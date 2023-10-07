import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { useEffect } from '../index'
import { defineComponent, isVue2 } from 'vue-demi'

describe('useEffect', () => {
  it('without deps', async () => {
    if (isVue2) return
    const logSpy = vi.spyOn(global.console, 'log').mockImplementation(() => {})
    const App = defineComponent({
      props: {
        name: {
          type: String,
          default: 'test'
        }
      },
      template: '<div></div>',
      setup(props) {
        useEffect(() => {
          console.log('update', props)
        })
      }
    })

    const wrapper = mount(App)

    expect(logSpy).toHaveBeenCalledTimes(1)
    await wrapper.setProps({ name: 'test1' })
    expect(logSpy).toHaveBeenCalledTimes(2)
    await wrapper.setProps({ name: 'test2' })
    expect(logSpy).toHaveBeenCalledTimes(3)
  })
  it('with deps = []', async () => {
    if (isVue2) return
    const logSpy = vi.spyOn(global.console, 'log').mockImplementation(() => {})
    const App = defineComponent({
      props: {
        name: {
          type: String,
          default: 'test'
        }
      },
      template: '<div></div>',
      setup() {
        useEffect(() => {
          console.log('mounted')
          return () => {
            console.log('unMounted')
          }
        }, [])
      }
    })

    const wrapper = mount(App)
    expect(logSpy).toHaveBeenLastCalledWith('mounted')
    await wrapper.setProps({ name: 'test1' })
    expect(logSpy).toHaveBeenCalledTimes(1)

    wrapper.unmount()
    expect(logSpy).toHaveBeenLastCalledWith('unMounted')
  })

  it('with deps = [...state]', async () => {
    if (isVue2) return
    const logSpy = vi.spyOn(global.console, 'log').mockImplementation(() => {})
    const App = defineComponent({
      props: {
        name: {
          type: String,
          default: 'test'
        },
        like: {
          type: String,
          default: 'apple'
        }
      },
      template: '<div></div>',
      setup(props) {
        useEffect(() => {
          console.log('update', props.name)
        }, [() => props.name])
      }
    })

    const wrapper = mount(App)
    expect(logSpy).toHaveBeenLastCalledWith('update', 'test')
    await wrapper.setProps({ name: 'test1' })
    expect(logSpy).toHaveBeenLastCalledWith('update', 'test1')

    await wrapper.setProps({ like: 'girl' })
    expect(logSpy).toHaveBeenCalledTimes(2)
  })
})

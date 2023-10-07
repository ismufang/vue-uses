import { defineComponent, isVue2 } from 'vue-demi'
import { mount } from '@vue/test-utils'
import { useFirstMountState } from '../index'

const App = defineComponent({
  props: {
    name: {
      type: String,
      default: 'test'
    }
  },
  template: '<div></div>',
  setup() {
    const isFirst = useFirstMountState()
    return {
      isFirst
    }
  }
})

describe('useFirstMountState', () => {
  it('should false on updated', async () => {
    if (isVue2) return
    const wrapper = mount(App)
    expect(wrapper.vm.isFirst).toBeTruthy()

    await wrapper.setProps({ name: 'test1' })
    expect(wrapper.vm.isFirst).toBeFalsy()
  })
})

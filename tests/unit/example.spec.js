import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('example test', () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.text()).toBeDefined()
  })
})

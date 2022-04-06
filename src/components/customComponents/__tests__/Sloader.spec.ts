import { shallowMount } from '@vue/test-utils'
import { SLoader } from '..'

describe('SLoader.vue', () => {
  it('renders default slot message', async () => {
    expect(SLoader).toBeTruthy()

    const slotMessage = 'message'
    const wrapper = shallowMount(SLoader, {
      slots: {
        default: slotMessage,
      },
    })
    expect(wrapper.html()).toContain(slotMessage)
  })

  it('renders default loading message', async () => {
    expect(SLoader).toBeTruthy()

    const wrapper = shallowMount(SLoader)

    expect(wrapper.html()).toContain('Loading ...')
  })

  it('shows the loader icon', async () => {
    expect(SLoader).toBeTruthy()

    const wrapper = shallowMount(SLoader)

    expect(wrapper.find('[data-test="loader"]').exists()).toBe(true)
  })
})

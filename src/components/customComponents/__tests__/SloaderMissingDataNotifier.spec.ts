import { shallowMount } from '@vue/test-utils'
import { SMissingDataNotifier } from '..'

describe('SMissingDataNotifier.vue', () => {
  it('renders default slot message', async () => {
    expect(SMissingDataNotifier).toBeTruthy()

    const slotMessage = 'message'
    const wrapper = shallowMount(SMissingDataNotifier, {
      slots: {
        default: slotMessage,
      },
    })

    expect(wrapper.html()).toContain(slotMessage)
  })

  it('renders default message when slot message is not provided', async () => {
    expect(SMissingDataNotifier).toBeTruthy()

    const wrapper = shallowMount(SMissingDataNotifier)

    expect(wrapper.html()).toContain('Could not find the requested Data!')
  })
})

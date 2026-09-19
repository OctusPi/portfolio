import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PrimaryHeader from '../PrimaryHeader.vue'
import { sections } from '@/data/profile'

describe('PrimaryHeader', () => {
  it('renderiza links de rolagem para todas as seções, sem menu popover', () => {
    const wrapper = mount(PrimaryHeader)
    const hrefs = wrapper.findAll('nav a').map(a => a.attributes('href'))

    for (const s of sections.filter(s => s.id !== 'inicio')) {
      expect(hrefs).toContain(`#${s.id}`)
    }
    expect(wrapper.find('[aria-haspopup]').exists()).toBe(false)
  })
})

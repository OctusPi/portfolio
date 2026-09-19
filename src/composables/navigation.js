import router from '@/router'

export const prefersReducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// Altura do header fixo, usada para a seção não ficar escondida atrás dele
export const headerOffset = () => (window.innerWidth < 768 ? 112 : 80)

export function scrollToSection(id) {
    const el = document.getElementById(id)
    if (!el) {
        // Fora da página inicial (ex.: 404): volta para ela e deixa o router rolar até a seção
        router.push({ path: '/', hash: `#${id}` })
        return
    }
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset()
    window.scrollTo({ top: id === 'inicio' ? 0 : top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
    history.replaceState(history.state, '', id === 'inicio' ? '/' : `#${id}`)
}

// v-reveal: anima o elemento quando ele entra na tela. Aceita um atraso em ms: v-reveal="120"
let observer

const getObserver = () => {
    observer ??= new IntersectionObserver(entries => {
        for (const entry of entries) {
            if (!entry.isIntersecting) continue
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
        }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 })
    return observer
}

export default {
    mounted(el, binding) {
        if (typeof IntersectionObserver === 'undefined') return
        el.classList.add('reveal')
        if (binding.value) el.style.setProperty('--reveal-delay', `${binding.value}ms`)
        getObserver().observe(el)
    },
    unmounted(el) {
        observer?.unobserve(el)
    }
}

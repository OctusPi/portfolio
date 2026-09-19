import { onBeforeUnmount, onMounted, ref } from 'vue'

// Acompanha qual seção está visível e o progresso de rolagem da página.
export function useScrollSpy(ids) {
    const active = ref(ids[0])
    const progress = ref(0)
    const scrolled = ref(false)

    const update = () => {
        const doc = document.documentElement
        const max = doc.scrollHeight - window.innerHeight
        progress.value = max > 0 ? Math.min(window.scrollY / max, 1) : 0
        scrolled.value = window.scrollY > 8

        // No fim da página a última seção pode ser curta demais para passar da linha de referência
        if (max > 0 && window.scrollY >= max - 2) {
            active.value = ids[ids.length - 1]
            return
        }

        const line = window.innerHeight * 0.35
        let current = ids[0]
        for (const id of ids) {
            const el = document.getElementById(id)
            if (el && el.getBoundingClientRect().top <= line) current = id
        }
        active.value = current
    }

    let frame = 0
    const onScroll = () => {
        cancelAnimationFrame(frame)
        frame = requestAnimationFrame(update)
    }

    onMounted(() => {
        update()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)
    })

    onBeforeUnmount(() => {
        cancelAnimationFrame(frame)
        window.removeEventListener('scroll', onScroll)
        window.removeEventListener('resize', onScroll)
    })

    return { active, progress, scrolled }
}

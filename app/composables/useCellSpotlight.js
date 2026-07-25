// Pages de poste : spotlight qui suit le curseur dans chaque cellule du bento.
export function useCellSpotlight() {
  let cleanup = []

  onMounted(() => {
    document.querySelectorAll('.cell').forEach((cell) => {
      const onMove = (e) => {
        const r = cell.getBoundingClientRect()
        cell.style.setProperty('--mx', `${e.clientX - r.left}px`)
        cell.style.setProperty('--my', `${e.clientY - r.top}px`)
      }
      cell.addEventListener('pointermove', onMove, { passive: true })
      cleanup.push(() => cell.removeEventListener('pointermove', onMove))
    })
  })

  onBeforeUnmount(() => {
    cleanup.forEach((fn) => fn())
    cleanup = []
  })
}

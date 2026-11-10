// Infobulle unique, partagée par la frise et la courbe solaire (TipBubble.vue).
export function useTip() {
  const tip = useState('tip', () => ({ on: false, x: 0, y: 0, head: '', sub: '' }))
  const show = (x, y, head, sub) => (tip.value = { on: true, x, y, head, sub })
  const hide = () => {
    if (tip.value.on) tip.value = { ...tip.value, on: false }
  }
  return { tip, show, hide }
}

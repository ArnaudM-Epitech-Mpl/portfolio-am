// Horodatage du rendu, sérialisé dans le payload : le client hydrate avec la
// même valeur que le serveur (pas de mismatch sur la frise), puis la rafraîchit.
export function useNow() {
  const now = useState('now', () => Date.now())
  onMounted(() => (now.value = Date.now()))
  return now
}

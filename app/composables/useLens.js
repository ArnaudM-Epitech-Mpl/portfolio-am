import { DEFAULT_LENS, LENS } from '~/data/profile'

// La lecture vit dans l'URL (`?profil=dev|lead|em`) : un CV peut ainsi pointer
// vers la lecture qui lui correspond, et le serveur rend directement la bonne.
export function useLens() {
  const route = useRoute()
  const router = useRouter()

  const lens = computed(() => {
    const q = route.query.profil
    return typeof q === 'string' && Object.hasOwn(LENS, q) ? q : DEFAULT_LENS
  })

  const setLens = (key) => {
    if (key === lens.value || !Object.hasOwn(LENS, key)) return
    router.replace({ query: { ...route.query, profil: key }, hash: route.hash })
  }

  return { lens, setLens }
}

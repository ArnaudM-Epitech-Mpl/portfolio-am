// Changer de lecture (`?profil=`) ou de langue (`/` ↔ `/en`) ne doit pas faire
// bouger la page. Les ancres (`#parcours`…) sont de simples liens : le
// navigateur les gère nativement, avec `scroll-padding-top`.
const page = (route) => String(route.name ?? '').split('___')[0]

export default {
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (!from.name || page(to) === page(from)) return false
    return { left: 0, top: 0 }
  },
}

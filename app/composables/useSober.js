// « Mode sobriété » — coupe toutes les animations de la page (clin d'œil à
// l'éco-conception de Troa). `body.sober` est posée par app.vue.
export const useSober = () => useState('sober', () => false)

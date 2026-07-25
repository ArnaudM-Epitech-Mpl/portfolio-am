// « Mode sobriété » — coupe le rendu 3D (clin d'œil à l'éco-conception de TROA).
// Partagé entre le bouton du header et la scène Three.js de l'accueil.
export const useSober = () => useState('sober', () => false)

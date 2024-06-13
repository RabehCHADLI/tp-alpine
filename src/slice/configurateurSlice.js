import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    modele: [
        './configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-1.jpg',
        './configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-2.jpg',
        './configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-3.jpg',
        './configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg'
    ],
    jantepure: [
        './configurateur/jantes/vues/couleur-blanc_jante-standard.jpg',
        './configurateur/jantes/vues/couleur-blanc_jante-serac.jpg',
    ],
    jantelegend: [
        './configurateur/jantes/vues/couleur-blanc_jante-legende.jpg'
    ],
    scelleriePure: [
        './configurateur/interieurs/selection/cuir-noir_dinamica.jpg',
        './configurateur/interieurs/selection/cuir-noir_perfore.jpg'
    ],
    scellerieLegende: [
        './configurateur/interieurs/selection/cuir-noir.jpg',
        './configurateur/interieurs/selection/cuir-brun.jpg'

    ]

};

export const configurateurSlice = createSlice({
    name: "configurateur",
    initialState,
    reducers: {
        changementDeCouleur: (state, action) => {
            let color = action.payload['color']
            let modele = action.payload['modele']
            let jante = action.payload['jante']
            console.log(jante);

            for (let i = 1; i <= state.modele.length; i++) {
                state.modele[i - 1] = `./configurateur/modele/${modele}/modele_${modele}-couleur_${color}-jante_${jante}-${i}.jpg`

            }
            if (modele == 'pure') {
                state.jantepure[0] = `./configurateur/jantes/vues/couleur-${color}_jante-standard.jpg`
                state.jantepure[1] = `./configurateur/jantes/vues/couleur-${color}_jante-serac.jpg`
            } else {
                state.jantelegend[0] = `./configurateur/jantes/vues/couleur-${color}_jante-legende.jpg`
            }



        },
        changementDeJante: (state, action) => {
            let modele = action.payload['modele']
            let color = action.payload['color']
            let jante = action.payload['jante']
            for (let i = 1; i <= state.modele.length; i++) {
                state.modele[i - 1] = `./configurateur/modele/${modele}/modele_${modele}-couleur_${color}-jante_${jante}-${i}.jpg`
            }
        }
    }
},
);

export default configurateurSlice.reducer;
export const { changementDeCouleur } = configurateurSlice.actions
export const { changementDeJante } = configurateurSlice.actions
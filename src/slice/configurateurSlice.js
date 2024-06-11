import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modele: [
        './configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-1.jpg',
        './configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-2.jpg',
        './configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-3.jpg',
        './configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg'
    ],

};

export const configurateurSlice = createSlice({
    name: "configurateur",
    initialState,
    reducers: {
        changementDeCouleur: (state, action) => {
            let color = action.payload['color']
            for (let i = 1; i <= state.modele.length; i++) {
                state.modele[i - 1] = `./configurateur/modele/legende/modele_legende-couleur_${color}-jante_legende-${i}.jpg`


            }
        }
    }
},
);

export default configurateurSlice.reducer;
export const { changementDeCouleur } = configurateurSlice.actions
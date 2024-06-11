import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modele: [
        { url0: '../../public/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-1.jpg' },
        { url1: '../../public/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-2.jpg' },
        { url2: '../../public/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-3.jpg' },
        { url3: '../../public/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg' }
    ],
};

export const configurateurSlice = createSlice({
    name: "configurateur",
    initialState,
    reducers: {

    },
});

export default configurateurSlice.reducer;
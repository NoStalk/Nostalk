import { createSlice, PayloadAction } from '@reduxjs/toolkit'



export interface userData {
    email: string;
    firstName: string;
    lastName: string;
}

/**
 * @member isLoggedIn If a valid user is logged in, if set to false all other values are garbage and MUST not be used
 */
export interface userSliceData extends userData {
    isLoggedIn: boolean;
}

const initialState: userSliceData = {
    isLoggedIn: false,
    email: '',
    firstName: '',
    lastName: ''
}

const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        logInUser(state, actions: PayloadAction<userData>) {
            return {
                isLoggedIn: true,
                ...actions.payload
            }
        },

        logOutUser(state) {
            return initialState
        }

    }
})

export const { logInUser, logOutUser } = userDataSlice.actions;
export default userDataSlice.reducer;
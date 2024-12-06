import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers:{
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id);
            if(!existingItem) {
                state.cartItems.push(action.payload)
                alert("Item added successfully")
                } else(
                    allert("Item already exists")
                )
            }
        }
    })

    // export the actions
    export const  {addToCart, removeFromCart, clearCart} = cartSlice.actions;
    export default cartSlice.reducer;
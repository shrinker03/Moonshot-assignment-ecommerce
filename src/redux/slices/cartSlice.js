import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload)
        },
        incrementItem: (state, action) => {
            state.map((item) => {
                if (item.productInfo.id === action.payload) {
                    item.qty += 1;
                }
            })
        },
        decrementItem: (state, action) => {
            state.map((item) => {
                if (item.productInfo.id === action.payload && item.qty > 0) {
                    item.qty -= 1;
                }
            })
        },
        removeFromCart: (state, action) => {
            return state.filter((item) => item.productInfo.id !== action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, incrementItem, decrementItem, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
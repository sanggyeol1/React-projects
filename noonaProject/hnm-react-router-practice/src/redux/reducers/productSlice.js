import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
    productList: [],
    productDetail: null,
    isLoading: false,
    error : null
}

//createAsyncThunk
export const fetchProducts = createAsyncThunk('product/fetchAll', async (searchQuery, thunkApi) => {

    try{
        let url = `https://my-json-server.typicode.com/sanggyeol1/React.js/products?q=${searchQuery}`
        let response = await fetch(url)
        return await response.json()
    }catch(error) {
        thunkApi.rejectWithValue(error.message)
    }
})


export const fetchProductDetail = createAsyncThunk('product/fetchDetail', async (id, thunkApi) => {

    try{
        let url = `https://my-json-server.typicode.com/sanggyeol1/React.js/products/${id}`
        let response = await fetch(url)
        return await response.json()
    }catch(error) {
        thunkApi.rejectWithValue(error.message)
    }
})




// function productSlice(state = initialState, action){
//     let { type, payload } = action
//     switch(type){
//         case "GET_PRODUCT_SUCCESS":
//             return { ...state, productList: payload.data }
//         case "GET_PRODUCT_DETAIL_SUCCESS":
//             return { ...state, productDetail: payload.data }
//         default:
//             return { ...state }
//     }   
// }

// export default productSlice

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {//동기적

        
    },
    extraReducers: (builder) => {//비동기, 외부라이브러리
        builder
            .addCase(fetchProducts.pending, (state) => {//데이터오는중이다
                state.isLoading = true
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {//데이터 성공적으로 옴
                state.isLoading = false
                state.productList = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {//에러핸들링
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(fetchProductDetail.pending, (state) => {//데이터오는중이다
                state.isLoading = true
            })
            .addCase(fetchProductDetail.fulfilled, (state, action) => {//데이터 성공적으로 옴
                state.isLoading = false
                state.productDetail = action.payload
            })
            .addCase(fetchProductDetail.rejected, (state, action) => {//에러핸들링
                state.isLoading = false
                state.error = action.payload
            })
    }
})

console.log(productSlice)


export const productActions = productSlice.actions
export default productSlice.reducer
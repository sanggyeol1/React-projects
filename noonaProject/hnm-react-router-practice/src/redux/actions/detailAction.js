
  function getProductDetail(id) {
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/sanggyeol1/React.js/products/${id}`
        let response = await fetch(url)
        let data = await response.json()
        dispatch({type:"GET_PRODUCT_DETAIL_SUCCESS", payload:{data}})
    };
}

export const detailAction = {getProductDetail}
import axios from "axios";


export const getProducts = (dispatch) => {
    dispatch({type : "GET_PRODUCT_REQUEST" });
    axios.get(`http://localhost:3001/product`)
    .then((res)=>{
    //   console.log("ankush",res);
      dispatch({type :"GET_PRODUCT_SUCCESS",payload: res.data });
    })
    .catch((err)=>{
      dispatch({type : "GET_PRODUCT_FAILURE" });
    })
  };


  export const missingPopupOpen = (dispatch) =>{
    dispatch({type : "MISSING_POPUP_OPEN"});
  }

  export const missingPopupClose = (dispatch) =>{
    dispatch({type : "MISSING_POPUP_CLOSE"});
  }

  export const editPopupOpen = (dispatch) =>{
    dispatch({type : "EDIT_POPUP_OPEN"});
  }

  export const editPopupClose = (dispatch) =>{
    dispatch({type : "EDIT_POPUP_CLOSE"});
  }
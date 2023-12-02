const initState = {
    product:[],
    isLoading:false,
    isError:false,
    missing:false,
    editpage:false
}

export const reducer = (state=initState,{type,payload}) =>{
    switch(type){
        case "GET_PRODUCT_REQUEST" :{
            return {...state,isLoading:true}
          }
          case "GET_PRODUCT_SUCCESS" :{
            return {...state,isLoading:false,product:payload}
          }
          case "GET_PRODUCT_FAILURE" :{
            return {...state,isLoading:false,isError:true}
          }
          case "MISSING_POPUP_OPEN":{
            return {...state,missing:true}
          }
          case "MISSING_POPUP_CLOSE":{
            return {...state,missing:false}
          }
          case "EDIT_POPUP_OPEN":{
            return {...state,editpage:true}
          }
          case "EDIT_POPUP_CLOSE":{
            return {...state,editpage:false}
          }
            default : {
                return state;
            }
    }
}
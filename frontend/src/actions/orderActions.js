import Axios from 'axios';
import { CART_EMPTY } from '../constants/cartConstant';
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS } from "../constants/orderConstants"

export const createOrder = (order) => async (dispatch, getState) => {
    console.log('Start createOrder')
       dispatch({  type: ORDER_CREATE_REQUEST, payload: order});
       try {
         const state = getState();
         const userInfo = state?.userSignin?.userInfo;
         console.log(userInfo)
       const { data } = await Axios.post('/api/orders', order, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
        dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order });
        dispatch({ type: CART_EMPTY }); // After we buy the cart will be emptied
        localStorage.removeItem('cartItems');
     } catch (error) {
        dispatch({
             type: ORDER_CREATE_FAIL,
             payload:
                 error.response && error.response.data.message
                 ? error.response.data.message
                 : error.message,
         });
      }
}
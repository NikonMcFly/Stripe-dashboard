import axios from 'axios';
import { browserHistory } from 'react-router';
/********************
* localhost:8080/api/balance
*
*This receive tweets from the server
*
************/
const URL = 'http://localhost:8080';

export const FETCH_POSTS = 'FETCH_POSTS',
             RECEIVE_POSTS = 'RECEIVE_POSTS',
             FAILED_POSTS = 'FAILED_POSTS';
export function getPosts() {
   return (dispatch) => {
       axios.get(`${URL}/api/balance`)
       .then((response) => {
         // console.log(response.data)
           dispatch(receivePost(response));
           // dispatch({type: 'VIEW_ARTICLE', article})
       }).catch((error) => {
        errorHandler(dispatch, error.response, AUTH_ERROR)
      });
   }
}
const receivePosts = function receivePosts(data) {
//  console.log(data)
 return {
   type: RECEIVE_POSTS,
   data: data
 }
}

import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
// export const FETCHING = "FETCHING"
// export const CREATING = "CREATING"
// export const UPDATING = "UPDATING"
// export const DELETING = "DELETING"
export const POST = "POST"
export const LOADING = "LOADING"
export const SUCCESS = "SUCCESS"
export const ERROR = "ERROR"
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({
      type: LOADING
  });
  return axios 
      .get('http://localhost:3333/smurfs')

      .then (res => {
          dispatch({
              type: SUCCESS,
              payload: res.data
          })
      })
      .catch(err => dispatch({ type: ERROR}))
}

export const addSmurf = smurf => dispatch => {
  dispatch({
      type: LOADING
  });
  return axios 
      .post('http://localhost:3333/smurfs', smurf)
      .then (res => {
          dispatch({
              type: POST,
              payload: res.data
          })
      })
      .catch(err => dispatch({ type: ERROR}))
}
//THERES A GOOD CHANCE LINE 34 SHOULD BE type:ERROR
/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING, CREATING, UPDATING, DELETING } from "../actions";
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null
  }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues. WHAT DOES THIS MEAN?!
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:   
      return {
        ...state,
        fetchingSmurfs: true,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null
      }
      case CREATING:
        return {
          ...state,
          fetchingSmurfs: false,
          addingSmurf: true,
          updatingSmurf: false,
          deletingSmurf: false,
          error: null
      };
      case UPDATING:
        return {
          ...state,
          fetchingSmurfs: false,
          addingSmurf: false,
          updatingSmurf: true,
          deletingSmurf: false,
          error: null
      };
      case DELETING:
        return {
          ...state,
          fetchingSmurfs: false,
          addingSmurf: false,
          updatingSmurf: false,
          deletingSmurf: true,
          error: null
      };

    default:
      return state;
  }
};
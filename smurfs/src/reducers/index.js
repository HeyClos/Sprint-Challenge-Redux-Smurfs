/*
  Be sure to import in all of the action types from `../actions`
*/
import { LOADING, SUCCESS, ERROR, POST } from "../actions";
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
    case POST:   
    return {
      ...state,
      smurfs: [...state.smurfs, action.payload],
      fetchingSmurfs: true,
      addingSmurf: false,
      updatingSmurf: false,
      deletingSmurf: false,
      error: null
    }
    case LOADING:   
      return {
        ...state,
        fetchingSmurfs: true,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null
      }
      case SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          fetchingSmurfs: false,
          addingSmurf: false,
          updatingSmurf: false,
          deletingSmurf: false,
          error: null
      };
      case ERROR:
        return {
          ...state,
          fetchingSmurfs: false,
          addingSmurf: false,
          updatingSmurf: false,
          deletingSmurf: false,
          error: 'UH OH'
      };

    default:
      return state;
  }
};

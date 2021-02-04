export default function (state = {}, action) {
    switch (action.type) {
      case "ADD_JOB_TO_FAVS":
         return {
          //always returning an object
          ...state,
          favourites: {
            ...state.favourites, //always spread the state, even if there is only one: future-proofing
            // [...this.state.favourites.jobs, action.payload]
            jobs: state.favourites.jobs.concat(action.payload), //same as above
          },
        };
      case "REMOVE_JOB_FROM_FAVS":
        return {
          ...state,
          favourites: {
            ...state,
            jobs: [
              ...state.favourites.jobs.filter(
                (job) => job.id !== action.payload.id //because now adding an object, have to check property
              ),
            ],
          },
        };
  
      case "SET_USER_NAME":
        return {
          ...state,
          user: {
            ...state.user,
            username: action.payload,
          },
        };
      default:
        return state;
    }
  }
  
export const data =  (state = {}, action) => {
    switch (action.type) {
     case 'SIMPLE_ACTION':
      return {
        ...state,
        history: [...state.history, action.payload]
      }
     default:
      return state
    }
   }

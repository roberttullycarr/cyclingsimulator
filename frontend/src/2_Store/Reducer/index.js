const initialState = {
    recentSessions: []
};

const reducer = (state = initialState, action) => {
     switch (action.type) {
         case 'RECENT_SESSIONS':
             return {...state, recentSessions: action.payload}
         default:
             return state;
     }
}

export default reducer;
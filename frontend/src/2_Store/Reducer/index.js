const initialState = {
    recentSessions: [],
    allSessions: [],
    myClients: [],
    routes: []
};

const reducer = (state = initialState, action) => {
     switch (action.type) {
         case 'RECENT_SESSIONS':
             return {...state, recentSessions: action.payload}
         case 'MY_CLIENTS':
             return {...state, myClients: action.payload}
         case 'ROUTES':
             return {...state, routes: action.payload}
         case 'ALL_SESSIONS':
             return {...state, allSessions: action.payload}
         default:
             return state;
     }
}

export default reducer;
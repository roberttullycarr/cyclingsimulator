const initialState = {
    token: null,
    recentSessions: [],
    allSessions: [],
    myClients: [],
    routes: [],
    clientDetails: {},
    clientRecentSessions: [],
    yearToDateSessions: [],
    myInfo: {},
    specificSession: {},
    allRoutes: [],
    sessionResults: {}
};

const reducer = (state = initialState, action) => {
     switch (action.type) {
         case 'TOKEN':
             return {...state, token: action.payload}
         case 'MY_INFO':
             return {...state, myInfo: action.payload}
         case 'RECENT_SESSIONS':
             return {...state, recentSessions: action.payload}
         case 'MY_CLIENTS':
             return {...state, myClients: action.payload}
         case 'ROUTES':
             return {...state, routes: action.payload}
         case 'ALL_SESSIONS':
             return {...state, allSessions: action.payload}
         case 'NEW_SESSION':
            return { ...state, clientRecentSessions: [action.payload, ...state.clientRecentSessions] };
         case 'CLIENT_DETAILS':
             return {...state, clientDetails: action.payload}
         case 'CLIENT_RECENT_SESSIONS':
             return {...state, clientRecentSessions: action.payload}
         case 'YEAR_TO_DATE_SESSIONS':
             return {...state, yearToDateSessions: action.payload}
         case 'SPECIFIC_SESSION':
             return {...state, specificSession: action.payload}
         case 'ALL_ROUTES':
             return {...state, allRoutes: action.payload}
         case 'SESSION_RESULTS':
             return {...state, sessionResults: action.payload}
         default:
             return state;
     }
}

export default reducer;
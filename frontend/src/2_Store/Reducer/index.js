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
    specificRoute: {},
    allRoutes: [],
    sessionResults: {},
    allCoaches: []
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
        case 'NEW_CLIENT':
            return { ...state, myClients: [action.payload, ...state.myClients] }
        case 'NEW_SESSION':
            return { ...state, clientRecentSessions: [action.payload, ...state.clientRecentSessions] };
        case 'NEW_ROUTE':
            return { ...state, routes: [...state.routes, action.payload] };
        case 'NEW_SEGMENT':
             let segments = state.specificRoute.segments;
             let newSegment = segments.push(action.payload);
            return { ...state, specificRoute: {...state.specificRoute, newSegment}};
        case 'NEW_COACH':
            return { ...state, allCoaches: [...state.allCoaches, action.payload] };
        case 'COACH_UPDATE':
            const newState = state.allCoaches;
            const index = newState.findIndex(x => x.id === action.payload.id);
            newState.splice(index, 1, action.payload);
            return { ...state, allCoaches: newState };
        case 'CLIENT_DETAILS':
             return {...state, clientDetails: action.payload}
        case 'CLIENT_RECENT_SESSIONS':
             return {...state, clientRecentSessions: action.payload}
        case 'YEAR_TO_DATE_SESSIONS':
             return {...state, yearToDateSessions: action.payload}
        case 'SPECIFIC_SESSION':
             return {...state, specificSession: action.payload}
        case 'SPECIFIC_ROUTE':
             return {...state, specificRoute: action.payload}
        case 'ALL_ROUTES':
             return {...state, allRoutes: action.payload}
        case 'SESSION_RESULTS':
             return {...state, sessionResults: action.payload}
        case 'ALL_COACHES':
             return {...state, allCoaches: action.payload}
        case 'CLEAR_RESULTS':
             return { ...state, sessionResults: {} }
        default:
             return state;
     }
}

export default reducer;
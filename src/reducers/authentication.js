const INITIAL_STATE = { token:''
};

export default (state = INITIAL_STATE,action) => {
    console.log(action);
    switch(action.type){
        case 'actionType':
           return {...state,token:action.payload};
        default:
            return state;
    }
};
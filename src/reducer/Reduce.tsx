const types = {
    Loading: 'Loading',
    Error: 'Error',
    Success: 'Success'
}
export const  initialState = {
        error: false,
        loading: false,
        photos: [],
        page: 1,
}

export const actions = {
    onLoading: () => ({type: types.Loading}),
    onError: () => ({type:types.Error}),
    onSuccess: (photos,page) => ({type:types.Success,payload: {photos,page}}),
    
}
export const  reducer = (state,action)=> {
    switch (action.type){
        case types.Error:
            return {...state,loading:false,errpr: true};
            
            case types.Loading:
                return {...state,loading: true,error:false};
    case types.Success:
        return {...state,error:false,loading:false, photos:[...state.photos,...action.payload.photos],
            page: state.page+1,
                }
    }}

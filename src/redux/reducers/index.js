const initialState = {
    isLogin:'false',
    userData:{}
};

function rootReducer(state = initialState, action) {
    if (action.type === 'SET_LOGIN') {
        window.localStorage.setItem('app_tt', action.payload.data.token.access_token)
        
        return Object.assign({}, state, {
            isLogin: 'true'
//            userData: action.payload.data
        });
    }else if (action.type === 'SET_LOGOUT') {
        window.localStorage.removeItem('app_tt')
        
        return Object.assign({}, state, {
            isLogin:'false',
            userData:{}
        });
    }else{
        return state;
    }
//   else if (action.type === 'MYBAND') {
//     //console.log(action.payload.data.bands);
//     return Object.assign({}, state, {
//       //userBand
//       bandData:action.payload.data.bands//state.userBand.concat(action.payload.data.bands)
//     });
//   }else if (action.type === 'LOADED_BAND') {
//     return Object.assign({}, state, {
//       bandData: action.payload.data.bands//state.userBand.concat(action.payload.data.bands)
//     });
//   }else if (action.type === 'LOADED_BAND_ALBUM') {
//     return Object.assign({}, state, {
//       bandAlbum: action.payload.data.data//state.bandAlbum.concat(action.payload.data.data)//state.userBand.concat(action.payload.data.bands)
//     });
//   }else if (action.type === 'LOADED_BAND_CONTENT') {
//     return Object.assign({}, state, {
//       bandContent: action.payload.data.data//state.bandAlbum.concat(action.payload.data.data)//state.userBand.concat(action.payload.data.bands)
//     });
//   }else if (action.type === 'CREATE_BAND') {
//     return Object.assign({}, state, {
//       //userBand
//       bandData: action.payload.data.data//state.userBand.concat(action.payload.data.data)
//     });
//   }else if (action.type === 'LOGIN') {
//     return Object.assign({}, state, {
//       isLogin: 'false'
//     });
//   }else if (action.type === 'UPLOAD_PROGRESS') {
//     return Object.assign({}, state, {
//       uploadData: {isUpload:true,loaded:action.payload.loaded,total:action.payload.total}
//     });
//   }else if (action.type === 'UPLOAD_COMPLETE') {
//     return Object.assign({}, state, {
//       uploadData: {isUpload:false,loaded:0,total:0}
//     });
//   }else if(action.type === 'SET_PUSHER'){
//     return Object.assign({}, state, {
//       pusherChannel: action.payload
//     });
//   }
}

export default rootReducer;
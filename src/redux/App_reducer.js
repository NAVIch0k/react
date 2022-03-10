import { header_info_API } from "./Auth_reducer"

const SET_INITIALIZED = 'SET_INITIALIZED'

let initial_state = {
    initialized: false
}
const App_reducer = (state = initial_state, action) => {

    switch (action.type) {
        case SET_INITIALIZED: {
            return { ...state, initialized:true }
        }
        default:
            return state
    }
}


const initialized_success = () => ({ type: SET_INITIALIZED})


export const initialize_app= () => (dispatch) => {
    let promise=dispatch(header_info_API())
    Promise.all([promise]).then(()=>{
        dispatch(initialized_success())
    })
}

export default App_reducer
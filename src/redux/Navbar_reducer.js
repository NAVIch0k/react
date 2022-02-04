const RENAME='RENAME'
let initial_state = {
    navbar_friends: [
        { name: "Leon" },
        { name: "Kesadi" },
        { name: "Adam" }
    ],
    but:1
}

const Navbar_reducer = (state=initial_state, action) => {
    debugger
    switch (action.type) {
        case RENAME:
            return{
                ...state,
                but: state.but+=1
            }
        default:
            return state;
    }
}
export  const rename_AC=(text)=>({type:RENAME,text})
export default Navbar_reducer
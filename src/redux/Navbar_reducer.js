const RENAME='RENAME'
let initial_state = {
    navbar_friends: [
        { name: "Leon" },
        { name: "Kesadi" },
        { name: "Adam" }
    ]
}

const Navbar_reducer = (state=initial_state, action) => {
    return state
}
export  const rename_AC=(text)=>({type:RENAME,text})
export default Navbar_reducer
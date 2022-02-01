import React from "react"
const store_context=React.createContext()
export const Provider=(props)=>{
    return(
        <store_context.Provider value={props.store}>
            {props.children}
        </store_context.Provider>
    )
}
export default store_context
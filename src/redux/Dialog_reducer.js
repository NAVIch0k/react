const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

let initial_state = {
    dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Oleg' },
        { id: 3, name: 'Valera' },
        { id: 4, name: 'Olya' },
        { id: 5, name: 'Polya' },
        { id: 6, name: 'Sven' },
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'Welcom' },
        { id: 4, message: 'NOO' },
        { id: 5, message: 'Between' },
        { id: 6, message: 'My name is?' },
    ],
    new_message: "hello ivan"
}

const Dialog_reducer = (state=initial_state, action) => {

    let new_state={...state}

    switch (action.type) {
        case ADD_MESSAGE:{
            let message = {
                id: 7,
                message: state.new_message
            }
            new_state.messages=[...state.messages]
            new_state.messages.push(message)
            new_state.new_message = ""
            return new_state
        }
        case UPDATE_NEW_MESSAGE:{
            new_state.new_message = action.new_message
            return new_state
        }
        default:
            return state
    }
}

export const add_message_creater = () => ({ type: ADD_MESSAGE })

export const on_message_change_creater = (text) => ({
    type: UPDATE_NEW_MESSAGE,
    new_message: text
})

export default Dialog_reducer
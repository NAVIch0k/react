const ADD_MESSAGE = 'ADD-MESSAGE'

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
    ]
}

const Dialog_reducer = (state=initial_state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:{
            let message = {
                id: 7,
                message: action.new_message
            }
            return{
                ...state,
                messages:[...state.messages,message]
            }
        }
        default:
            return state
    }
}

export const add_message_creater = (new_message) => ({ type: ADD_MESSAGE,new_message })

export default Dialog_reducer
import * as Types from './../constants/actionType'
import * as MessageType from './../constants/Message'

var initialState = MessageType.MSG_WELCOME

const message = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_MESSAGE:
            return action.message
        default: return state
    }
}



export default message;
import Dispatcher from '../dispatcher/dispatcher'
import ActionTypes from '../constants/actionTypes'

export default class UserActions {
    constructor(props) {

        this.registerUser = this.registerUser.bind(this)
    }
    
    registerUser(user) {
        console.log('user')
        console.dir(this.state.user)


        Dispatcher.dispatch({
            type: ActionTypes.CREATE_USER,
            payload: user
        })
    }
}
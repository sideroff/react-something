import Dispatcher from '../dispatcher/dispatcher'
import ActionTypes from '../constants/actionTypes'
const SomeActions = {
    createAuthor: author => {
        let newAuthor = { prop: author.prop }
        
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        })
    }
}

module.exports = SomeActions

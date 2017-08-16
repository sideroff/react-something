import { EventEmitter } from 'events'

import Dispatcher from '../dispatcher/dispatcher'
import ActionTypes from '../constants/actionTypes'

let _users = []

export default class UserStore extends EventEmitter {
    constructor(props) {
        super(props)
    }

    addChangeListener(callback) {
        this.on('change', callback)
    }

    removeChangeListener(callback) {
        this.removeListener('change', callback)
    }

    emitChange() {
        this.emit('change')
    }
}

Dispatcher.register(action => {
    switch (action.actionType) {
        case action.CREATE_USER:
            console.log('creating user in store')
            _users.push(action.payload)
            UserStore.emitChange()
    }
})
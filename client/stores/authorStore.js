import { EventEmitter } from 'events'

import Dispatcher from '../dispatcher/dispatcher'
import ActionTypes from '../constants/actionTypes'

let _authors = []

export default class AuthorStore extends EventEmitter {
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

    getAllAuthors() {
        return _authors
    }

    getAuthorsCount(id) {
        return _authors.length
    }
}

Dispatcher.register(action => {
    switch (action.actionType) {
        case ActionTypes.CREATE_AUTHOR:
            _authors.push(action.author)
            AuthorStore.emitChange()
    }
})
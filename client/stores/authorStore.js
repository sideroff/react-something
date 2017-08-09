import Dispatcher from '../dispatcher/dispatcher'
import ActionTypes from '../constants/actionTypes'
import { EventEmitter } from 'events'

let _authors = []

const AuthorStore = Object.assign({}, EventEmitter.prototype, {
    addChangeListener(callback) {
        this.on('change', callback)
    },
    removeChangeListener(callback) {
        this.removeListener('change', callback)
    },
    emitChange() {
        this.emit('change')
    },
    getAllAuthors() {
        return _authors
    },
    getAuthorsCount(id) {
        return _authors.length
    }
})

Dispatcher.register(action => {
    switch (action.actionType) {
        case ActionTypes.CREATE_AUTHOR:
            _authors.push(action.author)
            AuthorStore.emitChange()
    }
})

module.exports = AuthorStore
﻿import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { RECEIVE_PROFILE, RECEIVE_POSITIONS, RECEIVE_MAPSETTINGS, INITIALISE_LOGIN, RECEIVE_LOGINFAILURE } from './actions';

function profile(state = {}, action) {
  switch (action.type) {
    case RECEIVE_PROFILE:
      return action.data;
    default:
      return state;
  }
}

function positions(state = [], action) {
  switch (action.type) {
    case RECEIVE_POSITIONS:
      return action.data;
    default:
      return state;
  }
}

function mapSettings(state = {}, action) {
  switch (action.type) {
    case RECEIVE_MAPSETTINGS:
      return action.data;
    default:
      return state;
  }
}

function login(state = {}, action) {
  switch (action.type) {
    case RECEIVE_LOGINFAILURE:
      return Object.assign({}, state, {
        error: action.data
      })
    case INITIALISE_LOGIN:
      return Object.assign({}, state, {
        user: action.data
      })
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  profile,
  positions,
  mapSettings,
  login,
  routing: routerReducer
})

export default rootReducer

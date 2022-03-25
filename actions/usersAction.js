import {UPDATE_LOANS, UPDATE_PAYMENTS, UPDATE_SAVINGS} from '../types'

export const updatePayment = (data) => async dispatch => {
    dispatch({
        type: UPDATE_PAYMENTS,
        payload: data
    })
}

export const updateSaving = (data) => async dispatch => {
    dispatch({
        type: UPDATE_SAVINGS,
        payload: data
    })
}

export const updateLoans = (data) => async dispatch => {
    dispatch({
        type: UPDATE_LOANS,
        payload: data
    })
}
import {GET_LOANS, GET_PAYMENTS, GET_SAVINGS, UPDATE_LOANS, UPDATE_PAYMENTS, UPDATE_SAVINGS} from '../types'

const initialState = {
    savings: [],
    loans: [],
    payments: [],
    totalSavings: 0,
    totalLoans: 0,
    totalPayments: 0,
}

export default function appReducer(state = initialState, action) {

    switch (action.type) {

        case GET_SAVINGS:
            return state
        case GET_LOANS:
            return state
        case GET_PAYMENTS:
            return state
        case UPDATE_SAVINGS:
            return {
                ...state,
                savings: [...state.savings, action.payload],
                totalSavings: state.totalSavings + action.payload.amount
            }
        case UPDATE_LOANS:
            return {
                ...state,
                loans: [...state.loans, action.payload],
                totalLoans: state.totalLoans + action.payload.amount
            }
        case UPDATE_PAYMENTS:
            return {
                ...state,
                payments: [...state.payments, action.payload],
                totalPayments: state.totalPayments + action.payload.amount,
                totalLoans: state.totalLoans - action.payload.amount,
                totalSavings: state.totalSavings - action.payload.amount
            }
        default:
            return state
    }

}
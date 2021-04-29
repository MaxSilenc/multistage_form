import React from 'react';


const SET_CURRENT_USER = "SET_CURRENT_USER";



let initialState = {
    userInfo: {
        name: null,
        lastName: null,
        middleName: null,
        date: {
            day: null,
            month: null,
            year: null,
        }
    },
    email: null,
};

export const setCurrentUser = (data) => {return {type: "SET_CURRENT_USER", data: data}};

export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER: {
            return {...state, userInfo: {...action.data.userInfo}, email: action.data.email}
        }
        default:
            return state
    }
};

// some Thunk to communicate with API
export const registrationThunk = (data) => {
    return async (dispatch) => {
        // let answer = await someAPIMethod(data);
        // if (answer.keyError === 0) {
        //     some code for login user
               dispatch(setCurrentUser(data))
        // }
    }
};
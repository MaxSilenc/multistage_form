import './App.css';
import React from 'react';
import RegistrationComponent from './components/Registration/RegistrationComponent';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {registrationReducer} from "./state/registrationReducer";

const store = createStore(registrationReducer, applyMiddleware(thunkMiddleware));

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <RegistrationComponent />
        </Provider>
    </div>
  );
}

export default App;

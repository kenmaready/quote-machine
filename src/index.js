import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App.js';
import reducers from './reducers';

const store = createStore(reducers);

const ProvidedApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

ReactDOM.render(<ProvidedApp />, document.querySelector("#root"));
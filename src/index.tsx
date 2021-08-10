import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleWare from 'redux-saga';
import {
    createStore,
    applyMiddleware,
} from 'redux';
import App from './app/App';
import rootSagas from './roots/rootSagas';
import { colors } from './theme/theme';
import rootReducer from './roots/rootReducers';
import { extendTheme } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
import { createLocalization } from './localization/localization';
import './localization/localization';
import './index.scss';

const defaultLanguage = 'en';

function initialize() {
    const root = document.getElementById('root');
    const theme = extendTheme({ colors })
    const sagaMiddleWare = createSagaMiddleWare();
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
    createLocalization(defaultLanguage);

    sagaMiddleWare.run(rootSagas);


    ((window as any).store = store);

    ReactDOM.render(
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </Provider>,
        root
    );
}

initialize();
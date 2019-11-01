import React from 'react';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {ConfigureStore} from "./../store/configureStore";
import {PersistGate} from 'redux-persist/es/integration/react';

import {history} from './../store/configureStore';
import HomePage from './HomePage';
import News from './News';

const {persistor, store} = ConfigureStore();

const IndexPage = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path='/' component={HomePage}/>
                        <Route path='/News' component={News}/>
                    </Switch>
                </ConnectedRouter>
            </PersistGate>
        </Provider>
    )
};

export default IndexPage;



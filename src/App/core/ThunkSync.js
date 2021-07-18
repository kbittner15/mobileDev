import React from 'react'
import Constants from 'expo-constants'

// Redux Integrations
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createSecureStore from '@neverdull-agency/expo-unlimited-secure-store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import { Provider as ReduxProvider } from 'react-redux'


import * as Sentry from 'sentry-expo'

// Import all Janus reducers
import { reducers } from  '@cliqd/janet'

// Loading element
import Loading from './Loading'

// Setup Sentryx
Sentry.init({
  environment: !!Constants.manifest.releaseChannel ? Constants.manifest.releaseChannel : 'develop',
  dsn: 'https://2b9e4c2abe184b6b9360583c8766c5a4@o923026.ingest.sentry.io/5870111',
  enableInExpoDevelopment: true,
})


// Dependency Injection for actions
const services = {
  sentry: Sentry.Native,
}

// Construct the Store & Persistor
const store = createStore(
  persistReducer(
    {
      key: 'root',
      storage: createSecureStore(),
    },
    combineReducers(reducers)
  ),
  applyMiddleware(thunk.withExtraArgument(services))
)
const persistor = persistStore(store)

// Construct a Provider using our Store & Persistor
function ThunkSync({ children }) {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        {children}
      </PersistGate>
    </ReduxProvider>
  )
}

export default ThunkSync
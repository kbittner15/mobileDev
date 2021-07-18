import React from 'react'
import Constants from 'expo-constants'

// Redux Integrations
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createSecureStore from '@neverdull-agency/expo-unlimited-secure-store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import { Provider as ReduxProvider } from 'react-redux'

// Integrations
import * as Linking from 'expo-linking'
import * as WebBrowser from 'expo-web-browser'
import * as Sentry from 'sentry-expo'
import { Hub } from 'aws-amplify'

// Import all Janus reducers
import { reducers } from  '@cliqd/janet'

// Loading element
import Loading from './Loading'

// Setup Sentry
Sentry.init({
  environment: !!Constants.manifest.releaseChannel ? Constants.manifest.releaseChannel : 'develop',
  dsn: 'https://c92b896ba4e444f4aee1c4a9e0af542d@o331513.ingest.sentry.io/5419551',
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
function DataSync({ children }) {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        {children}
      </PersistGate>
    </ReduxProvider>
  )
}

export default DataSync
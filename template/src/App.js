import React                from 'react';
import './App.css';
import { Admin }            from 'react-admin';
import jsonServerProvider   from 'ra-data-json-server';
import { MixpanelProvider } from 'react-mixpanel-browser';
import {
  KEYCLOAK, KEYCLOAK_ENABLED,
  KEYCLOAK_INIT_CONFIG,
  MIXPANEL_TOKEN,
}                           from './config/constants';
import { KeycloakProvider } from '@react-keycloak/web';
import Loading              from './components/Loading';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => {
  const app = (
      <MixpanelProvider token={ MIXPANEL_TOKEN }>
        <Admin dataProvider={ dataProvider } />
      </MixpanelProvider>
  );

  if (KEYCLOAK_ENABLED) {
    return (
        <KeycloakProvider keycloak={ KEYCLOAK }
                          LoadingComponent={ <Loading /> }
                          isLoadingCheck={ (keycloak) => !keycloak.authenticated }
                          initConfig={ KEYCLOAK_INIT_CONFIG }>
          { app }
        </KeycloakProvider>
    );
  }

  return app;

};

export default App;

import keycloak_config_file from './keycloak.json.example';
import Keycloak             from 'keycloak-js';

// MixPanel

export const MIXPANEL_TOKEN = 37878237823783;

// Keycloak config

export const KEYCLOAK = Keycloak(keycloak_config_file);

export const KEYCLOAK_INIT_CONFIG = {
  onLoad: 'login-required',
  checkLoginIframe: false,
  'enable-cors': true,
};

export const TOKEN_MIN_VALIDITY = 60; // In seconds

export const KEYCLOAK_ENABLED = false;

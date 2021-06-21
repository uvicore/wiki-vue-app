import { User, UserManagerSettings, WebStorageStateStore } from "oidc-client";
import {
  createOidcAuth,
  LogLevel,
  OidcAuth as BaseOidcAuth,
  SignInType,
} from "vue-oidc-client/vue3";


import { config as configFile } from '@/config';


let config = configFile.auth.oidc;


let appUrl: string = config.appUrl;
let authUrl: string = config.authUrl;
let metadata = {
  issuer: authUrl,
  authorization_endpoint: `${authUrl}/oauth2/authorize`,
  token_endpoint: `${authUrl}/oauth2/token`,
  userinfo_endpoint: `${authUrl}/oauth2/userinfo`,
  jwks_uri: `${authUrl}/.well-known/jwks.json`,
  end_session_endpoint: `${authUrl}/oauth2/logout?client_id=${config.appId}`,
  introspect_endpoint: `${authUrl}/oauth2/introspect`,
};

let authConfig = {
  authority: authUrl,
  client_id: config.appId,
  response_type: 'code',
  //scope: 'openid offline_access',
  scope: 'openid profile',
  //metadata,
  //automaticSilentRenew: true,
  //redirect_uri: `${appUrl}${config.redirectPath}`,
  //userStore: new WebStorageStateStore({ store: window.sessionStorage }),
  //metadataUrl: "https://auth-local.triglobal.io/.well-known/openid-configuration/a7f35245-83d3-7261-4f33-535925ec58c8",
} as UserManagerSettings;

export const auth: BaseOidcAuth = createOidcAuth(
  config.appName,
  SignInType.Window,
  config.appUrl,
  authConfig,
  console,
  LogLevel.Debug
);



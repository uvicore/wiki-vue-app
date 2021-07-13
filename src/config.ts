import { OidcAuth } from '@uvicore/vue3-auth';


export const config = {
  // ---------------------------------------------------------------------------
  // App configuration
  // ---------------------------------------------------------------------------
  app: {
    // APIs using connection string naming
    apis: {
      wiki: {
        url: 'https://wiki-api-local.triglobal.io/api',
        token: 'some-token-name-so-we-can-handle-multiple-jws-token'
      },
    },
  },


  // ---------------------------------------------------------------------------
  // Auth plugin configuration
  // appUrl and authUrl must NOT end with a /
  // logoutRedirectPath must begin with a / and can be only a / for the home page
  // storage can be one of localStorage or sessionStorage (case-sensitive)
  // ---------------------------------------------------------------------------
  auth: {
    driver: 'oidc', // oidc is currently the only driver implemented
    oidc: {
      adapter: OidcAuth,

      appName: 'wiki',
      appId: '7cc7d2a5-cc02-43ca-93bc-8476370ebf9d',
      appUrl: 'https://wiki-local.triglobal.io',
      authUrl: 'https://auth-local.triglobal.io',
      logoutRedirectPath: '/logout',
      storage: 'localStorage',
    },
  }

}



// const auth_name = "wiki";
// const auth_type = SignInType.Window;
// const auth_url = "https://auth-local.triglobal.io";
// const app_url = "https://wiki-local.triglobal.io/";
// const client_id = "7cc7d2a5-cc02-43ca-93bc-8476370ebf9d";
// const response_type = "code";
// const scope = "openid offline_access";

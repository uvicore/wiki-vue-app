import { OidcAuth } from '@uvicore/vue-auth';


export const config = {
  // ---------------------------------------------------------------------------
  // App configuration
  // ---------------------------------------------------------------------------
  app: {
    // APIs using connection string naming
    apis: {
      'wiki': {
        name: 'wiki-uvicore-api',
        url: 'https://local.wiki.mreschke.net/api',
        uvicore: true
      },
      // 'tools': {
      //   name: 'tools-uvicore-api',
      //   url: 'https://tools-local.tgb.services/api',
      //   uvicore: true
      // },
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
    appUrl: 'https://local.vue.wiki.mreschke.com',
    uvicoreUserInfoUrl: 'https://local.iam.mreschke.net/api/userinfo',
    storage: 'localStorage',
    storageKey: 'user',
    oidc: {
      adapter: OidcAuth,
      appName: 'wiki',
      appId: 'e5f17737-231b-4abe-8760-03debc536af9',
      authUrl: 'https://local.auth.mreschke.com',
      logoutRedirectPath: '/logout',
      logLevel: 'Warn', // Debug, Error, Info, Warn, None (case sensitive)
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

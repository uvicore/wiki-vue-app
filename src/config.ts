import { OidcAuth } from '@/uvicore/auth/adapters/oidc';


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
  // ---------------------------------------------------------------------------
  auth: {
    driver: 'oidc', // oidc is currently the only driver implemented
    oidc: {
      adapter: OidcAuth,
      appName: 'wiki',
      appId: '7cc7d2a5-cc02-43ca-93bc-8476370ebf9d',
      appUrl: 'https://wiki-local.triglobal.io', // No / at end
      logoutRedirectPath: '/', // Begin with /
      authUrl: 'https://auth-local.triglobal.io', // No / at end
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

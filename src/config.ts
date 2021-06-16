import { Config } from '@/uvicore/config';
import { OidcAuth } from '@/uvicore/auth/oidc';


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
    driver: 'oidc',
    module: OidcAuth,
    oidc: {
      appName: 'wiki',
      appId: '7cc7d2a5-cc02-43ca-93bc-8476370ebf9d',
      appUrl: 'https://wiki-local.triglobal.io',
      redirectPath: '/login',
      authUrl: 'https://auth-local.triglobal.io',
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

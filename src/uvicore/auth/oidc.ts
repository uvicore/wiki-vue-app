import { User, UserManagerSettings, WebStorageStateStore } from "oidc-client";
import {
  createOidcAuth,
  LogLevel,
  OidcAuth as Auth,
  SignInType,
} from "vue-oidc-client/vue3";

export class OidcAuth {
  private options: any = {};

  public constructor(options: any) {
    this.options = options;
  }

  public init(): Auth {
    let authUrl: string = this.options.authUrl;
    let metadata = {
      issuer: authUrl,
      authorization_endpoint: `${authUrl}/oauth2/authorize`,
      token_endpoint: `${authUrl}/oauth2/token`,
      userinfo_endpoint: `${authUrl}/oauth2/userinfo`,
      jwks_uri: `${authUrl}/.well-known/jwks.json`,
      end_session_endpoint: `${authUrl}/oauth2/logout?client_id=${this.options.appId}`,
      introspect_endpoint: `${authUrl}/oauth2/introspect`,
    };


    let authConfig = {
      authority: authUrl,
      client_id: this.options.appId,
      response_type: 'code',
      scope: 'openid offline_access',
      metadata,
      automaticSilentRenew: true,
      redirect_uri: `${authUrl}login`,
      // userStore: new WebStorageStateStore({ store: window.sessionStorage }),
      //metadataUrl:
      //  "https://auth-local.triglobal.io/.well-known/openid-configuration/a7f35245-83d3-7261-4f33-535925ec58c8",
    } as UserManagerSettings;

    return createOidcAuth(
      this.options.appName,
      SignInType.Window,
      this.options.appUrl,
      authConfig,
      console,
      LogLevel.Debug
    );
  }

}




// // FIXME: from config file
// const auth_name = "wiki";
// const auth_type = SignInType.Window;
// const auth_url = "https://auth-local.triglobal.io";
// const app_url = "https://wiki-local.triglobal.io/";
// const client_id = "7cc7d2a5-cc02-43ca-93bc-8476370ebf9d";
// const response_type = "code";
// const scope = "openid offline_access";

// const metadata = {
//   issuer: `${auth_url}`,
//   authorization_endpoint: `${auth_url}/oauth2/authorize`,
//   token_endpoint: `${auth_url}/oauth2/token`,
//   userinfo_endpoint: `${auth_url}/oauth2/userinfo`,
//   jwks_uri: `${auth_url}/.well-known/jwks.json`,
//   end_session_endpoint: `${auth_url}/oauth2/logout?client_id=${client_id}`,
//   introspect_endpoint: `${auth_url}/oauth2/introspect`,
// };

// const auth_config = {
//   authority: auth_url,
//   client_id,
//   response_type,
//   scope,
//   metadata,
//   automaticSilentRenew: true,
//   redirect_uri: `${app_url}login`,
//   // userStore: new WebStorageStateStore({ store: window.sessionStorage }),
//   //metadataUrl:
//   //  "https://auth-local.triglobal.io/.well-known/openid-configuration/a7f35245-83d3-7261-4f33-535925ec58c8",
// } as UserManagerSettings;

// export const OidcAuth: Auth = createOidcAuth(
//   auth_name,
//   auth_type,
//   app_url,
//   auth_config,
//   console,
//   LogLevel.Debug
// );


// // Authentication Event Examples

// // auth.events.addAccessTokenExpiring(() => {
// //   // eslint-disable-next-line no-console
// //   console.log("access token expiring");
// // });

// // auth.events.addAccessTokenExpired(() => {
// //   // eslint-disable-next-line no-console
// //   console.log("access token expired");
// // });

// // auth.events.addSilentRenewError((err: Error) => {
// //   // eslint-disable-next-line no-console
// //   console.error("silent renew error", err);
// // });

// // auth.events.addUserLoaded((user: User) => {
// //   // eslint-disable-next-line no-console
// //   console.log("user loaded", user);
// // });

// // auth.events.addUserUnloaded(() => {
// //   // eslint-disable-next-line no-console
// //   console.log("user unloaded");
// // });

// // auth.events.addUserSignedOut(() => {
// //   // eslint-disable-next-line no-console
// //   console.log("user signed out");
// // });

// // auth.events.addUserSessionChanged(() => {
// //   // eslint-disable-next-line no-console
// //   console.log("user session changed");
// // });


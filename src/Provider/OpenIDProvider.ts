import Provider from '.';

export default class OpenIDProvider implements Provider {
  authorizationUri?: string;
  accessTokenUri?: string;
  userInfoUri?: string;
  deviceAuthorizationUri?: string;

  constructor(
    public name: string,
    public issuer: string,
    public discoveryUri?: string
  ) {
    if (!discoveryUri) {
      this.discoveryUri = `${issuer}/.well-known/openid-configuration`;
    }
  }
}

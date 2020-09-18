export default interface Provider {
  /**
   * Provider name
   */
  name: string;
  /**
   * Uri issuer, this is used to fetch configuration from the server
   * using the pattern `issuer/.well-known/openid-configuration`.
   *
   * This is used only if discoveryUri isn't defined
   * @example
   * issuer = https://accounts.google.com
   * then discoveryUri = https://accounts.google.com/.well-known/openid-configuration
   */
  issuer: string;
  /**
   * Uri to request configuration from the provider
   */
  discoveryUri?: string;
  /**
   * Uri to request authorization
   */
  authorizationUri?: string;
  /**
   * Uri to exchange token
   */
  accessTokenUri?: string;
  /**
   * Uri to request user info
   */
  userInfoUri?: string;
  /**
   * Uri to request authorization by device flow
   */
  deviceAuthorizationUri?: string;
}

import Provider from '.';
import OpenIDProvider from './OpenIDProvider';

describe('OpenIDProvider', () => {
  it('should initializer discoveryUri when not informed', () => {
    const provider: Provider = new OpenIDProvider(
      'Teste Provider',
      'https://oauth.4us.dev'
    );

    expect(provider.discoveryUri).toBe(
      `${provider.issuer}/.well-known/openid-configuration`
    );
  });
});

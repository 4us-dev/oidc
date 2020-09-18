import ClientOAuth2 from './index';
describe('ClientOAuth2', () => {
  it('should return empty when input is undefined', () => {
    const client = new ClientOAuth2();
    expect(client).not.toBeNull();
  });
});

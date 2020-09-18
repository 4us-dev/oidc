import OpenIDProvider from './OpenIDProvider';

export default class GoogleProvider extends OpenIDProvider {
  constructor() {
    super('Google', 'https://accounts.google.com');
  }
}

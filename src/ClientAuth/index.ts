import Provider from '../Provider';

export interface ClientAuthConfig {
  provider: Provider;
}
export default class ClientAuth {
  constructor(private config: ClientAuthConfig) {}
}

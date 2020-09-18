import crypto from 'crypto';
import { base64ToBase64Url } from '../base64url';

/**
 * See https://tools.ietf.org/html/rfc7636#section-4.2 to more information
 */
export default (codeVerifier: string): string => {
  return base64ToBase64Url(
    crypto.createHash('sha256').update(codeVerifier).digest().toString('base64')
  );
};

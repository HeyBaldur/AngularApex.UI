import { environment } from 'src/environments/env.development';

const baseUrl: string = environment.baseUrl;

// Base endpoints from API
export const EndpointsAuth = {
  signIn: `${baseUrl}api/auth/token`,
  signUp: `${baseUrl}api/auth`,
};

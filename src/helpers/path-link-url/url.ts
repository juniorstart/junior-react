import { ROUTING_PREFIX } from 'config';

const urlRoute = (url?: string): string => {
  return url ? `${ROUTING_PREFIX ? `${ROUTING_PREFIX}` : ''}${url}`.replace(/\/\//g, '/') : '';
};

export default urlRoute;

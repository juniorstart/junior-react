/* eslint-disable @typescript-eslint/no-explicit-any */
import urlRoute from './url';

class PathLink {
  link: (...p: any[]) => string;

  path: string;

  constructor(path: string, link?: (...p: any[]) => string) {
    this.path = urlRoute(path);
    this.link =
      link && typeof link === 'function'
        ? (...p: string[]) => urlRoute(link(...p))
        : () => urlRoute(link) || urlRoute(path);
  }
}

export default PathLink;

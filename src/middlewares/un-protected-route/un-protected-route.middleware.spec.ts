import { UnProtectedRouteMiddleware } from './un-protected-route.middleware';

describe('UnProtectedRouteMiddleware', () => {
  it('should be defined', () => {
    expect(new UnProtectedRouteMiddleware()).toBeDefined();
  });
});

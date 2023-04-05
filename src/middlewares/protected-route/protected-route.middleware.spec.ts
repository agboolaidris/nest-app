import { ProtectedRouteMiddleware } from './protected-route.middleware';

describe('ProtectedRouteMiddleware', () => {
  it('should be defined', () => {
    expect(new ProtectedRouteMiddleware()).toBeDefined();
  });
});

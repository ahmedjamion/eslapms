import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state) => state.isAuthenticated,
);

export const selectAuthUser = createSelector(
  selectAuthState,
  (state) => state.user,
);

export const selectAuthUserRole = createSelector(selectAuthUser, (user) =>
  user?.roles.find((role) => role.is_active),
);

export const selectAuthLoading = createSelector(
  selectAuthState,
  (state) => state.loading,
);

export const selectAuthError = createSelector(
  selectAuthState,
  (state) => state.error,
);

export const selectSuccess = createSelector(
  selectAuthState,
  (state) => state.success,
);

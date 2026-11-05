import { patchState, signalStore, withMethods, withProps, withState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { withDevtools } from '@ngrx-toolkit/core';
import { UserService } from '@gedoplan/api';

interface UserState {
  userSearch: string;
  page: {
    pageIndex: number;
    pageSize: number;
  };
}

const initialState: UserState = {
  userSearch: '',
  page: {
    pageIndex: 0,
    pageSize: 10,
  },
};

// provided in Oberkomponente oder über Routing
export const UserState = signalStore(
  withState(initialState),
  withDevtools('users'),

  withProps((_store) => ({
    _userService: inject(UserService),
  })),

  withProps((store) => ({
    users: store._userService.searchUsers(
      store.userSearch,
      store.page.pageSize,
      () => store.page.pageIndex() * store.page.pageSize(),
    ),
  })),

  withMethods((store) => ({
    resetPage(): void {
      patchState(store, { page: initialState.page });
    },
    updateUserSearch(userSearch: string): void {
      patchState(store, { userSearch });
      this.resetPage();
    },
    updatePage(page: { pageIndex: number; pageSize: number }): void {
      patchState(store, { page });
    },
  })),
);

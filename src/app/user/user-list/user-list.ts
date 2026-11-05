import { Component, inject, linkedSignal } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { UserState } from '../user-state';
import { RouterLink } from '@angular/router';
import { form, FormField, debounce} from '@angular/forms/signals';

@Component({
  imports: [MatPaginator, MatFormField, MatLabel, MatInput, RouterLink, FormField],
  selector: 'app-user-list',
  styleUrl: './user-list.scss',
  templateUrl: './user-list.html',
})
export class UserList {
  private userState = inject(UserState);
  protected users$ = this.userState.users;
  protected page$ = this.userState.page;

  formState = linkedSignal(
    () => ({
      query: this.userState.userSearch(),
    }),
    {
      set: (state) => {
        this.userState.updateUserSearch(state.query);
      },
    },
  );

  form = form(this.formState, schema => {
    debounce(schema.query, 500);
  });

  protected updatePage(page: PageEvent) {
    this.userState.updatePage({ pageIndex: page.pageIndex, pageSize: page.pageSize });
  }
}

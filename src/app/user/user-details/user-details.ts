import { Component, inject, input, linkedSignal } from '@angular/core';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { UserService } from '@gedoplan/api';
import { firstValueFrom } from 'rxjs';
import { Location } from '@angular/common';

interface UserFormData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  imports: [FormField, FormRoot],
  selector: 'app-user-details',
  styleUrl: './user-details.scss',
  templateUrl: './user-details.html',
})
export class UserDetails {
  userService = inject(UserService);
  location = inject(Location);

  id = input.required({ transform: (v: string) => Number.parseInt(v) });
  userDetail = this.userService.userById(this.id);

  userFormInitialState = linkedSignal(
    () =>
      ({
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        ...(this.userDetail.value() ?? {}),
      }) as UserFormData,
  );

  userForm = form<UserFormData>(this.userFormInitialState, (_) => {}, {
    submission: {
      action: async (fieldTree) => {
        await firstValueFrom(this.userService.updateUser(this.id(), fieldTree().value()));
        this.location.back();
        return null;
      },
    },
  });
}

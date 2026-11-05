import { inject, Service } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { GeneratedUserService } from './generated/generated-user-service';

// Wrapper für generierten Service; Caching / Konvertierungen / GETs als Resource
@Service()
export class UserService {
  private generatedUserService = inject(GeneratedUserService);

  userById(id: () => number) {
    return rxResource({
      params: () => ({ id: id() }),
      stream: ({ params }) => this.generatedUserService.userById(params.id),
    });
  }

  searchUsers(q: () => string, limit: () => number, skip: () => number) {
    return rxResource({
      params: () => ({ q: q(), limit: limit(), skip: skip() }),
      stream: ({ params }) =>
        this.generatedUserService.searchUsers(params.q, params.limit, params.skip),
    });
  }

  updateUser(id: number, user: any) {
    return this.generatedUserService.updateUser(id, user);
  }
}

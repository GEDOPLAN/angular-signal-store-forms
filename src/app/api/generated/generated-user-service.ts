import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Diese Datei wird normalerweise per OpenAPI-Generator erzeugt (nicht manuell bearbeiten)
@Service()
export class GeneratedUserService {
  private http = inject(HttpClient);

  userById(id: number) {
    return this.http.get<any>(`https://dummyjson.com/users/${id}`);
  }

  searchUsers(q: string, limit: number, skip: number) {
    return this.http.get<any>(
      `https://dummyjson.com/users/search?q=${q}&limit=${limit}&skip=${skip}`,
    );
  }

  updateUser(id: number, user: any) {
    return this.http.put<any>(`https://dummyjson.com/users/${id}`, user);
  }
}

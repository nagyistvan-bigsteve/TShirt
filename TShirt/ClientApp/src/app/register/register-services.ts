import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Product } from '../models/Product';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  loadUsers() {
    return this.http.get<User[]>(this.baseUrl + 'api/users');
  }

  public saveUser(user: User) {
    return this.http.post(this.baseUrl + 'api/users', user);
  }

  deleteUser(user: User) {
    return this.http.delete(this.baseUrl + 'api/users/' + user.id);
  }

  loadUserById(id) {
    return this.http.get<User>(this.baseUrl + 'api/users/' + id);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl + 'api/users/' + user.id, user);
  }

  public saveProduct(product: Product) {
    return this.http.post(this.baseUrl + 'api/products', product);
  }

  loadProducts() {
    return this.http.get<Product[]>(this.baseUrl + 'api/products');
  }

  deleteProduct(product: Product) {
    return this.http.delete(this.baseUrl + 'api/products/' + product.id);
  }

  updateProduct(product: Product) {
    return this.http.put(this.baseUrl + 'api/products/' + product.id, product);
  }
}

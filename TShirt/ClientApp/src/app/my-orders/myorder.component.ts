import { Component} from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../models/Product";
import { User } from "../models/User";
import { UsersService } from "../register/register-services";

@Component({
  selector: 'app-myorder',
  styleUrls: ['./myorder.component.css'],
  templateUrl: './myorder.component.html'
})
export class MyorderComponent {

  public products: Product[];
  user: User;
  email: string = "";
  password: string = "";

  columnsToDisplay: string[] = ['picture', 'size', 'color','status','action'];

  constructor(private userService: UsersService,
    private router: Router) { }

  login(email, password,user :User, products: Product[] =[]) {
      this.userService.loadUsers().subscribe(result => {
        result.forEach(function (value) {
          if (value.email == email && value.password == password)
            user = value;
        });
      }, error => console.error(error));
    setTimeout(() => {                
      this.user = user;
      if (this.user) {
        this.userService.loadProducts().subscribe(result => {
          result.forEach(function (value) {
            if (value.user == user.id)
                products.push(value);
          });
        }, error => console.error(error));
        setTimeout(() => {
          this.products = products;
        }, 500);
      }
    }, 500);
  }

  deleteProduct(product: Product) {
    this.userService.deleteProduct(product).subscribe(result => {
      this.login(this.email, this.password, this.user);
    }, error => console.error(error))
  }

  shippedProduct(product: Product) {
    product.status = true;
    this.userService.updateProduct(product).subscribe(result => {
      this.login(this.email, this.password, this.user);
    }, error => console.error(error))
  }
}

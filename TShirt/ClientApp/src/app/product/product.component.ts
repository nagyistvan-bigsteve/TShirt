import { Component } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material';
import { Router } from '@angular/router';
import { ResizedEvent } from 'angular-resize-event';
import { Product } from '../models/Product';
import { User } from '../models/User';
import { UsersService } from '../register/register-services';

@Component({
  selector: 'app-shop',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})

export class ProductComponent {
  name = 'Angular';

  width: number;
  height: number;

  myImage: string = "./assets/images/0.png";
  nr: number = 0;
  size: string;

  public disabled = false;
  public color: ThemePalette = 'primary';
  public touchUi = false;
  colorCtr: AbstractControl = new FormControl(null);

  public product: Product = <Product>{};

  user: User;
  email: string = "";
  password: string = "";

  constructor(private userService: UsersService,
    private router: Router) { }

  public orderProduct() {
    this.userService.saveProduct(this.product).subscribe(result => {
      this.router.navigateByUrl("/myorder");
      console.log("success");
    }, error => console.error(error));
  }

  onResized(event: ResizedEvent) {
    this.width = event.newWidth;
    this.height = event.newHeight;
  }
  noImage() {
    this.myImage = "./assets/images/0.png";
  }
  changeImage() {
    this.nr++;
    if (this.nr > 11) this.nr = 1;
    this.myImage = "./assets/images/" + this.nr + ".png";
  }
  login(email, password, user: User) {
    this.userService.loadUsers().subscribe(result => {
      result.forEach(function (value) {
        if (value.email == email && value.password == password)
          user = value;
      });
    }, error => console.error(error));
    setTimeout(() => {
      this.user = user;
    }, 1000);
  }

  submit() {
    if (!this.colorCtr.value) this.product.color = "fdfdfd";
    else this.product.color = this.colorCtr.value.hex;
    this.product.picture = this.myImage; this.product.size = this.size;
    this.product.user = this.user.id; this.product.status = false;
    setTimeout(() => {
      console.log(this.product);
      this.orderProduct();
    }, 500);
  }
}

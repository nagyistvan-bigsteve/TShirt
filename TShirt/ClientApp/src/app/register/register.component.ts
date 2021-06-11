import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../models/User";
import { UsersService } from "./register-services";

@Component({
  selector: 'app-register',
  styleUrls: ['./register.component.css'],
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  public user: User = <User>{};

  constructor(private userService: UsersService,
    private router: Router) { }

  public saveUser() {
    this.userService.saveUser(this.user).subscribe(result => {
      this.router.navigateByUrl("/shop");
      console.log("success");
    }, error => console.error(error));

  }
  public backToHome() {
    this.router.navigateByUrl("/shop");
  }
}


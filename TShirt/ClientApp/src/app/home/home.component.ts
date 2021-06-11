import { Component, OnInit } from '@angular/core';
import { Stat } from '../models/Stat';
import { UsersService } from '../register/register-services';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{

  public stat: Stat = { users: 0, shippedorder: 0, totalorder: 0 };
  public price: number = 3;

  constructor(private userService: UsersService) {
  }
    ngOnInit(): void {
      this.init();
      this.loadUsers();
    }
 
  init() {
    this.userService.loadProducts().subscribe(result => {
      this.stat.totalorder = result.length; var shipped = 0; 
      result.forEach(function (value) {
        if (value.status == true) shipped++;
      }); this.stat.shippedorder = shipped;
    }, error => console.error(error));
  }
  loadUsers() {
    this.userService.loadUsers().subscribe(result => {
      this.stat.users = result.length;
    }, error => console.error(error));
  }
}

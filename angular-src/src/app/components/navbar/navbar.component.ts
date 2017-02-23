import { Component, OnInit } from '@angular/core';
// import { NgModule } from '@angular/core';
// import { CollapseModule } from 'ng2-bootstrap/collapse';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

// @NgModule({
//   imports: [CollapseModule.forRoot()]
// })

export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}


// export class NavbarComponent implements OnInit {
//   public isCollapsed:boolean = false;
//
//   public collapsed(event:any):void {
//     console.log(event);
//   }
//
//   public expanded(event:any):void {
//     console.log(event);
//   }
//
//   constructor() { }
//
//   ngOnInit() {
//   }
// }

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-app',
  templateUrl: './navbar-app.component.html',
  styleUrls: ['./navbar-app.component.sass']
})
export class NavbarAppComponent implements OnInit {



  constructor() { }

  sendData(event: any){
    
  }


  ngOnInit(): void {
  }
  openSearch(): void{
    
    const input = document.getElementById("search-input");
    const custom_style={
        width: "200px",
        marginLeft: "-175px",
        transition: ".4s"
    }
    //Object.assign():
    if(input) Object.assign(input.style,custom_style);


  }
}

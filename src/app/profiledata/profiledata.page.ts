import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiledata',
  templateUrl: './profiledata.page.html',
  styleUrls: ['./profiledata.page.scss'],
})
export class ProfiledataPage implements OnInit {
  
mobile :  boolean = false;
work :  boolean = false;
roll :  boolean = true ;
pop : boolean = false;
other : boolean = false;
radioval : string;

workplace(){
  this.work = true;
  this.roll = false
}
mobilepage(){
  this.work = false;
  this.mobile = true;
}
popopen(){
this.pop = true ;
}
otheropen(){
  this.other = true;
  this.mobile = false;

}

radio(){
  console.log(this.radioval);
}
  constructor() { }

  ngOnInit() {
  }

}

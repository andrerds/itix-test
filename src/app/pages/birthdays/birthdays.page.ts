import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthdays',
  templateUrl: './birthdays.page.html',
  styleUrls: ['./birthdays.page.scss'],
})
export class BirthdaysPage implements OnInit {

  public iconsdefault = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  changeIcons(){}

}

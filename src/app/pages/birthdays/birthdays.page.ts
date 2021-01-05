import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-birthdays',
  templateUrl: './birthdays.page.html',
  styleUrls: ['./birthdays.page.scss'],
})
export class BirthdaysPage implements OnInit {

  public iconsdefault = false;
  public segmentselected = 'birthdays';
  public title = 'Aniversariantes';
  public monthNames = [
    'JANEIRO',
    'FEVEREIRO',
    'MARÇO',
    'ABRIL',
    'MAIO',
    'JUNHO',
    'JULHO',
    'AGOSTO',
    'SETEMBRO',
    'OUTUBRO',
    'NOVEMBRO',
    'DEZEMBRO',
  ]
  constructor(
    private navCtrl: NavController
  ) {
  }

  ngOnInit(): void {
  }

  public segmentChanged(event: HTMLIonSegmentElement): void {

    if (event.value === this.segmentselected) {
      this.title = 'Aniversariantes';
    } else {
      this.title = 'Unimed'
    }

  }

  public toBack(): void {
    this.navCtrl.back();
  }

}

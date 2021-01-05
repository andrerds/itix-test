import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { MocExampleService } from 'src/app/services/moc-example.service';
import { IBirthdays } from '../model/moc/birthdays.model';

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
  ];
  
  public birthdays$:Observable<IBirthdays[]>;

  constructor(
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private mocExampleService: MocExampleService
  ) {
  }

 async ngOnInit()  {
    const loading = await this.loadCtrl.create({message: 'Aguarde ...'});
    this.birthdays$ = this.mocExampleService.getAll();
    loading.present();
    this.birthdays$.pipe(take(1)).subscribe(_res => loading.dismiss());
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

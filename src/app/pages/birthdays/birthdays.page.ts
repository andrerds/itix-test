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
  public datenow = new Date().toISOString();
  
  public searchBirthdays: IBirthdays[];
  
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

  private birthdays$: Observable<IBirthdays[]>;
  
  public resultsBirthdays: IBirthdays[] = [];
  public allBirthdays: IBirthdays[] = [];

  constructor(
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private mocExampleService: MocExampleService
  ) {
  }

  async ngOnInit() {
    // Listando aniversariantes.
    this.searchBirthdays = [];
    this.getAllBirthdays(); 
    
  }

  public segmentChanged(event: HTMLIonSegmentElement): void {
    if (event.value === this.segmentselected) {
      this.title = 'Aniversariantes';
    } else {
      this.title = 'Unimed'
    }

  }

  public searchFilter(event: any) {
     this.initializeList()
    let terms = event.value;
    if(!terms && (terms = terms.trim())  === '') {
      return;
    };

    console.log(terms);
   

    this.resultsBirthdays = this.resultsBirthdays.filter((v) => {
      if(v.name && terms) {
        if (v.name.toLowerCase().indexOf(terms.toLowerCase()) > -1) {
          return true;
        }

        if (v.birthday.toLowerCase().indexOf(terms.toLowerCase()) > -1){
          return true;
        }

        if (v.birthday.toLowerCase().indexOf(terms.toLowerCase()) > - 1){
          return true;
        }

        return false;
      }
    });

  }


  private async getAllBirthdays(): Promise<void> {
    const loading = await this.loadCtrl.create({ message: 'Aguarde ...' });
    this.birthdays$ = this.mocExampleService.getAll();
    loading.present();
    this.birthdays$.pipe(take(1)).subscribe((res) => {
      this.allBirthdays = this.resultsBirthdays = res;
           loading.dismiss();
    })
  }

    

  public toBack(): void {
    this.navCtrl.back();
  }

  private initializeList(): void {
    this.resultsBirthdays = this.allBirthdays
  }
}

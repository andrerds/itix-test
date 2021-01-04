import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BirthdaysPageRoutingModule } from './birthdays-routing.module';
import { BirthdaysPage } from './birthdays.page';

@NgModule({
  imports: [
    SharedModule,
    BirthdaysPageRoutingModule
  ],
  declarations: [BirthdaysPage]
})
export class BirthdaysPageModule {}

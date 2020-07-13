import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home/home.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { MainRoutingModule } from './main-routing.module';
import { MainContainerComponent } from './main-container.component';
import { CommonCompModule } from '../common/common-comp.module';

@NgModule({
  declarations: [
    MainContainerComponent,
    HomeComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CommonCompModule
  ],
})
export class MainModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal/portal.component';
import { HomeComponent } from './home/home.component';
import { BottomNavigationBarComponent } from './bottom-navigation-bar/bottom-navigation-bar.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SettingsComponent } from './settings/settings.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchDetailsComponent } from './search-details/search-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PortalComponent,
    HomeComponent,
    BottomNavigationBarComponent,
    FavoritesComponent,
    SettingsComponent,
    NavbarComponent,
    SearchDetailsComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    IonicModule,
    RouterModule,
    FormsModule
  ]
})
export class PortalModule { }

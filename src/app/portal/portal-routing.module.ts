import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './portal/portal.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SettingsComponent } from './settings/settings.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchDetailsComponent } from './search-details/search-details.component';

const routes: Routes = [
  {
    path: 'portal',
    component: PortalComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        children: [
          
        ]
      },
      {
        path: 'favorites',
        component: FavoritesComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'searchResults',
        component: SearchResultsComponent
      },
      {
        path: 'searchDetails',
        component: SearchDetailsComponent
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PortalRoutingModule { }

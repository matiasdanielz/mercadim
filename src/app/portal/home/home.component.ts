import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {
  protected offers: any[] = [
    { store: 'Açougue do Carlão', product: 'Guisado de Segunda', quantity: '50 KG' },
    { store: 'Açougue do Carlão', product: 'Guisado de Segunda', quantity: '50 KG' },
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  protected handleSearch(searchFilter: any){
    this.router.navigate(['/portal/searchResults'], {
      queryParams: {
        "filter": searchFilter['detail']['value']
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent  implements OnInit {

  protected items: any[] = [
    {
      id: 1,
      name: 'Açougue do Carlito',
      description: 'Carne moída de segunda...',
      price: 'R$ 20,00/kg',
      image: 'https://static.itdg.com.br/images/auto-auto/f6f3e1b15273c5dee15bae1666407d3f/receitas-de-guisado.jpg',
    },
    {
      id: 2,
      name: 'Açougue 24h',
      description: 'Carne moída, qualidade de segunda...',
      price: 'R$ 24,00/kg',
      image: 'https://static.itdg.com.br/images/auto-auto/f6f3e1b15273c5dee15bae1666407d3f/receitas-de-guisado.jpg',
    },
    {
      id: 3,
      name: 'Mini Açougue Vitrine',
      description: 'Carne de segunda, diversas carnes...',
      price: 'R$ 21,00/kg',
      image: 'https://static.itdg.com.br/images/auto-auto/f6f3e1b15273c5dee15bae1666407d3f/receitas-de-guisado.jpg',
    },
  ];

  protected searchFilter: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchFilter = params['filter'];
      }
    );
  }

  protected handleSearch(searchFilter: any){
    this.router.navigate([], {
      queryParams: {
        "filter": searchFilter['detail']['value']
      },
      queryParamsHandling: 'merge', // Preserva os parâmetros existentes
      replaceUrl: true, // Evita criar um novo histórico no navegador
    });
  }

  protected onItemClick(item: any){
    this.router.navigate(['/portal/searchDetails'], {
      queryParams: {
        "itemId": item['id']
      },
    })
  }
}

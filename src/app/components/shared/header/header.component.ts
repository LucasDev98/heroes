import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor ( private heroeService : HeroesService,
                private router : Router  ) {

  }
  buscarHeroe( term : string ) {

    this.router.navigate(['buscador', term ])
  }
}

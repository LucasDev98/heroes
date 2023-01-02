import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroe';
import { HeroesService } from 'src/app/services/heroes.service';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent {

      heroes : Heroe [] = [];
      term : string = '';

      constructor ( private activateRoute : ActivatedRoute,
                    private heroeService : HeroesService,
                    private router : Router ) {

            activateRoute.params.subscribe( param  => {
              this.term = param['term'];
              this.heroes = heroeService.searchHero( param['term'] );
            })
      }

      verHeroe( id : any ) {
        this.router.navigateByUrl(`heroe/${id}`);
    }
}

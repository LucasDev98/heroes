import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroe';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

      heroe : any ;

        constructor (
                      private activateRoute : ActivatedRoute,
                      private heroeService : HeroesService
                    ) {

            activateRoute.params.subscribe( param => {
             this.heroe =  heroeService.getHeroeByID( param['id'] );
           })
        }


}

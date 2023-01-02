import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {


    constructor( public HeroeService : HeroesService,
                 private router : Router ){

    }



    verHeroe( id : number | string ) {
        this.router.navigateByUrl(`heroe/${id}`);
    }


}

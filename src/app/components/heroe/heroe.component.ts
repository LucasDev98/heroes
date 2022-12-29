import { Component, Input } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
        @Input() heroe : any ;


}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-hijocomic',
  templateUrl: './hijocomic.component.html',
  styleUrl: './hijocomic.component.css'
})
export class HijocomicComponent {
    @Input() C!: Comic;

    @Output() seleccionarFavoritoPadre : EventEmitter<any>= new EventEmitter

    seleccionarFavoritoHijo(): void{
        this.seleccionarFavoritoPadre.emit(this.C)
    }
}

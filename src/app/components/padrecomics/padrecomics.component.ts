import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Comic } from '../../models/comic';
import { Servicecomics } from '../../services/servicecomics';
@Component({
  selector: 'app-padrecomics',
  templateUrl: './padrecomics.component.html',
  styleUrl: './padrecomics.component.css',

  //HAY QUE INYECTA UN SERVICIO PARA PODER RECUPERARLO
  //POSTERIORMENTE EN EL CONSTRUCTOR

  providers:[Servicecomics]
})
export class PadrecomicsComponent implements OnInit {
  @ViewChild("cajanombre") cajanombre!:ElementRef
  @ViewChild("cajaimagen") cajaimagen!:ElementRef
  @ViewChild("cajadescripcion") cajadescripcion!:ElementRef



  public comics!: Array<Comic>;
  public favorito:string = "";

  constructor(private _service:Servicecomics){}
  ngOnInit(): void{
      this.comics= this._service.getComic()
  }
  seleccionarFavoritoPadre(event: any): void{
    this.favorito = event.nombre
  }

  nuevoComic():void{
    let nombre = this.cajanombre.nativeElement.value
    let url = this.cajaimagen.nativeElement.value
    let descripcion = this.cajadescripcion.nativeElement.value
    let nuevoComic = new Comic(nombre,url,descripcion)
    this.comics.push(nuevoComic)
  }


}
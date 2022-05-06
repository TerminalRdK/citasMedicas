import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css']
})
export class CrearCitasComponent implements OnInit {

  @Output() nuevaCita=new EventEmitter<any>();
  nombre:string='';
  fecha='';
  hora='';
  sintomas='';

  formularioIncorrecto=false;
  constructor() { }

  ngOnInit(): void {
  }

  agregarCita():void{
    if (this.nombre==''||this.fecha==''||this.hora==''||this.sintomas=='') {
      this.formularioIncorrecto=true;
      return;
    }
    this.formularioIncorrecto=false;

    //crear objeto
    const CITA={
      nombre:this.nombre,
      fecha:this.fecha,
      hora:this.hora,
      sintomas:this.sintomas
    }
    console.log(CITA);
    this.nuevaCita.emit(CITA);
    this.resetInputs();
    
  }

  resetInputs():void{
    this.nombre='';
    this.fecha='';
    this.hora='';
    this.sintomas='';
  }
}

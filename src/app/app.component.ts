import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'citasMedicas';
  listCitas: any[]=[];

  eliminarCitaListado(index:number){
    this.listCitas.splice(index, 1);
  }

  agregarCita(cita:any){
    this.listCitas.push(cita);
    console.log(this.listCitas);
    
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  fecha: Date = new Date();
  nombre: string = 'Juan Pérez';
  textoLargo: string = 'Texto largo del que solo quiero mostrar 10 caracteres';

  precio: number = 4.5;

  PI: number = Math.PI;

  descuento: number = 0.25;

  myObject = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };

  miPromesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Datos obtenidos de la API');
    }, 2000);
  });


}

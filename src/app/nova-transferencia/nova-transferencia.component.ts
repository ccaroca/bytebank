import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor: number = 555;
  destino: number = 55;

  transferir() {
    console.log('transferir acionado');
    console.log('Valor:', this.valor);
    console.log('Destino:', this.destino);
  }
}

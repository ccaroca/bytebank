import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  transferencia: any = {};
  mensagem: string = '';

  transferir($event: any) {
    console.log($event);
    this.transferencia = $event;
  }

  exibirModalErro($event: any) {
    // implementação da lógica para exibir o modal
    console.log($event);
    this.mensagem = $event;
  }
}

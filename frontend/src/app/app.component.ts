import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadosComponent } from './dados/dados.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DadosComponent]
})
export class AppComponent {
  title = 'frontend';
}

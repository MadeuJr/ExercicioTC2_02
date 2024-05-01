import { Component, NgModule } from '@angular/core';
import { linhas, telefones, secretarias, campainhas } from '../../../../backend/src/index';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dados',
  standalone: true,
  templateUrl:  './dados.component.html',
  styleUrl: './dados.component.css',
  imports: [CommonModule],
})
export class DadosComponent {
  linhas = linhas;
  telefones = telefones;
  secretarias = secretarias;
  campainhas = campainhas;
}
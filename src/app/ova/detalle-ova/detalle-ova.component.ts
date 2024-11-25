import { Component, Input } from '@angular/core';
import { Ova } from "../model/ova";
import { OvaService } from '../service/ova.service';


@Component({
  selector: 'app-detalle-ova',
  standalone: true,
  imports: [],
  templateUrl: './detalle-ova.component.html',
  styleUrls: ['./detalle-ova.component.css']
})
export class DetalleOvaComponent {
  @Input() ova!: Ova;
}


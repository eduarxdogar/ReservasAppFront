// src/app/reservas/listar/listar.component.ts
import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/servicios/reserva.service';
import { Reserva } from '../app/models/reserva.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  reservas: Reserva[] = [];

  constructor(private reservaService: ReservaService) {}

  ngOnInit(): void {
    this.obtenerReservas();
  }

  obtenerReservas() {
    this.reservaService.obtenerReservas().subscribe({
      next: (response) => {
        this.reservas = response;
      },
      error: (err) => {
        console.error('Error obteniendo las reservas:', err);
      }
    });
  }
}

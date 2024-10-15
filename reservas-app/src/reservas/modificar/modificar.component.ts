// src/app/reservas/modificar/modificar.component.ts
import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/servicios/reserva.service';
import { Reserva } from 'src/app/models/reserva.model';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  reservaId: number = 0;
  reserva: Reserva = new Reserva();
  mostrarFormulario: boolean = false;

  constructor(private reservaService: ReservaService) {}

  ngOnInit(): void {}

  buscarReserva() {
    this.reservaService.obtenerReservaPorId(this.reservaId).subscribe({
      next: (response) => {
        this.reserva = response;
        this.mostrarFormulario = true;
      },
      error: (err) => {
        console.error('Error obteniendo la reserva:', err);
        this.mostrarFormulario = false;
      }
    });
  }

  modificarReserva() {
    this.reservaService.modificarReserva(this.reservaId, this.reserva).subscribe({
      next: (response) => {
        console.log('Reserva modificada:', response);
      },
      error: (err) => {
        console.error('Error modificando la reserva:', err);
      }
    });
  }
}

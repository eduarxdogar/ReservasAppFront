// src/app/reservas/cancelar/cancelar.component.ts
import { Component } from '@angular/core';
import { ReservaService } from 'src/app/servicios/reserva.service';

@Component({
  selector: 'app-cancelar',
  templateUrl: './cancelar.component.html',
  styleUrls: ['./cancelar.component.css']
})
export class CancelarComponent {
  reservaId: number = 0;

  constructor(private reservaService: ReservaService) {}

  cancelarReserva() {
    if (this.reservaId) {
      this.reservaService.cancelarReserva(this.reservaId).subscribe({
        next: (response) => {
          console.log('Reserva cancelada:', response);
        },
        error: (err) => {
          console.error('Error cancelando la reserva:', err);
        }
      });
    }
  }
}

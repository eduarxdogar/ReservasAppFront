
import { Component } from '@angular/core';
import { ReservaService } from 'src/app/servicios/reserva.service';
import { Reserva } from 'src/app/models/reserva.model'; // Asegura que el modelo esté correctamente importado

@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.css']
})
export class NuevaComponent {
  reserva: Reserva = new Reserva();

  constructor(private reservaService: ReservaService) {}

  crearReserva() {
    this.reservaService.crearReserva(this.reserva).subscribe({
      next: (response) => {
        console.log('Reserva creada:', response);
      },
      error: (err) => {
        console.error('Error creando la reserva:', err);
      }
    });
  }
}

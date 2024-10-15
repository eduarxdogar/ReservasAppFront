## Proyecto: Sistema de Reservas - Frontend
Este proyecto es la interfaz de usuario para el sistema de reservas, construido con Angular. Proporciona formularios y vistas para gestionar reservas.

# Requisitos
Node.js y npm
Angular CLI
Instalación
Clona el repositorio:

# bash
Copiar código
git clone https://github.com/tuusuario/ReservasAppFront.git
Instala las dependencias:

Navega a la carpeta del proyecto y ejecuta:

# bash
Copiar código
npm install
Configura el entorno:

En el archivo src/environments/environment.ts, agrega la URL del backend:

typescript
Copiar código
export const environment = {
  production: false,
  apiUrl: 'https://localhost:5001/api'
};
Ejecuta la aplicación:

# bash
Copiar código
ng serve
La aplicación estará disponible en http://localhost:4200.

## Funcionalidades
Crear reserva: Formulario para hacer una nueva reserva.
Modificar reserva: Opción para modificar una reserva existente.
Cancelar reserva: Posibilidad de cancelar una reserva.
Visualizar reservas: Lista de todas las reservas con filtros por fecha, servicio o cliente.

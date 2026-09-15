# LAB CRUD - Frontend

React + Vite para consumir el backend del laboratorio.

## Requisitos

- Node.js 20+
- Backend ejecutándose en `http://localhost:3000`
- Base de datos `lab_crud`

## Instalar

```bash
npm install
```

## Ejecutar

```bash
npm run dev
```

Frontend: `http://localhost:5173`

## Usuarios de prueba

Admin:
- `admin@labcrud.local`
- `password123!`

Cliente:
- `cliente@labcrud.local`
- `password123!`

## Responsabilidades

- `assets`: estilos y recursos.
- `components`: componentes reutilizables.
- `config`: configuración del frontend.
- `context`: estado gloral de autenticación.
- `hooks`: hooks propios.
- `pages`: pantallas
- `services`: comunicación con la API.
- `utils`: almacenamiento de sesión.

## Flujo

Login -> AuthContext -> JWT en localStorage -> `api.js` agrega Bearer tokem -> backend verifica JWT -> autorización por rol.

El botón Eliminar solo aparece para `admin`, pero el backend también verifica el rol. Ocultar un botón en React no constituye seguridad.

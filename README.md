# AdminWeb-SamProject

Consola web administrativa de **SamProject**: para administrar un espacio de trabajo (miembros y roles, supervisión de proyectos, configuración del asistente, reportes e historial de cambios).

> Estado actual: **scaffold**. No hay lógica de negocio ni llamadas reales a la API. Solo estructura, tema institucional y navegación mínima «en construcción».

- Contexto del proyecto: `AGENTS.md` (raíz del workspace)
- Adicendum DERCAS v1.2 (Fase 5, RF-29 a RF-34): `..\ADICENDUM_DERCAS_v1.2.md`
- Plan de Fase 1 (menciona este repo): `..\docs\orquestacion\FASE1.md`
- Contrato de API: `..\docs\orquestacion\CONTRATO_API.md`

## Qué es (y qué no es)

- Es **otro cliente de la misma API REST** del backend, junto con la app móvil.
- **No tiene lógica de negocio propia y NO calcula métricas.** Nunca debe convertirse en una segunda fuente de verdad: las cifras son idénticas a las del panel móvil (RF-22) y a las del asistente (RF-25) porque las produce el backend.
- Comparte el modelo de roles: **administrador por espacio**, sin super-admin global. Un miembro sin rol de administrador recibe 403.
- Sin API keys en el cliente. Las credenciales sensibles viven solo en el servidor.

## Requisitos

- **Node.js 24** (probado con 24.15.0) y npm 11
- El **backend** en ejecución (`C:\Users\samue\Desktop\DESARROLLO MOVIL MEJORADO\Backend-SamProject`) para cuando se consuman datos

## Versiones reales instaladas

| Paquete | Versión |
|---|---|
| react / react-dom | ^19.3.1 |
| vite | ^8.3.6 |
| @vitejs/plugin-react | ^6.1.2 |
| typescript | ~5.9.3 |
| react-router-dom | ^7.18.5 |
| @tanstack/react-query | ^5.108.0 |
| eslint (flat config) | ^10.15.0 |
| typescript-eslint | ^8.73.0 |

> **Desviación**: el template de Vite 8 trae `typescript ~7.0.2`, pero `typescript-eslint` exige `typescript <6.1.0` como peer. Se fijó **typescript ~5.9.3** (estable, soportado por el toolchain de lint). Revisar cuando typescript-eslint soporte TS 7.

## Setup

```bash
npm install
cp .env.example .env
```

Edita `.env` y define `VITE_API_URL` (desarrollo local: `http://localhost:3000/api/v1`).

> **`.env` no se commitea** (está en `.gitignore`).

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo Vite |
| `npm run build` | `tsc -b && vite build` (typecheck + bundle de producción) |
| `npm run preview` | Sirve el build de producción |
| `npm run lint` | ESLint (flat config) |
| `npm run typecheck` | `tsc -b` (noEmit, estricto) |

Verificación realizada sobre este scaffold: `npm run build` ✓ (dist generado, luego borrado; no está en el repo), `npm run lint` ✓, `npm run typecheck` ✓.

## Estructura

```
src/
  api/
    config.ts            API_BASE_URL desde VITE_API_URL (default http://localhost:3000/api/v1)
    client.ts            Cliente HTTP PLACEHOLDER: tipos del contrato (ApiError, Paginated<T>); NO hace llamadas todavía
  components/MainLayout.tsx   Header con logotipo + nombre, <Outlet />, footer institucional
  pages/
    HomePage.tsx         «/» — «SamProject AdminWeb — en construcción»
    LoginPage.tsx        «/login» — placeholder sin formulario ni llamadas
  theme/colors.ts        Paleta institucional (fuente única para TS)
  assets/Logo.png        Logotipo institucional (copiado del root del workspace; no se inventó otro)
  index.css              Variables CSS con la paleta institucional
  App.tsx                QueryClientProvider + BrowserRouter + rutas
public/logo.png          Favicon
```

## Rutas (placeholder)

| Ruta | Contenido |
|---|---|
| `/` | «SamProject AdminWeb — en construcción» |
| `/login` | «Iniciar sesión» placeholder (llega con RF-29) |

Sin llamadas a la API todavía.

## Paleta institucional (fija)

| Rol | Color |
|---|---|
| Primary | `#245B4A` |
| Secondary | `#DCE9DF` |
| Tertiary | `#D5C78E` |
| Background | `#F7F8F5` |
| Text | `#34413A` |

Interfaz en **español**. Código técnico en inglés permitido.

## Contexto de producto

AdminWeb se construye en la **Fase 5** (después de la Fase 4), porque reutiliza el servicio de métricas, las herramientas del asistente y los reportes ya construidos. Requisitos RF-29 a RF-34:

- **RF-29** Acceso con las mismas credenciales (JWT); solo espacios donde eres administrador; 403 para miembros.
- **RF-30** Gestión de miembros del espacio: invitar, quitar, cambiar rol.
- **RF-31** Supervisión de proyectos: progreso, tareas pendientes, vencidas y ritmo — cifras idénticas al panel móvil y al asistente.
- **RF-32** Configuración del asistente por espacio (activo/inactivo, límites de uso).
- **RF-33** Exportación de reportes PDF y CSV (el archivo se genera en el servidor).
- **RF-34** Historial de cambios (solo lectura).

El tamaño del logotipo (`Logo.png`, ~1 MB) es el original del proyecto; para producción convendrá generar una versión optimizada. No se ha alterado el asset de marca.

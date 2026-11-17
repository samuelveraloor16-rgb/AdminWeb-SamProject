/**
 * Configuración del cliente API (placeholder de Fase 5 — scaffold).
 *
 * La URL base se toma de la variable de entorno VITE_API_URL
 * (ver .env.example). Valor por defecto de desarrollo:
 * http://localhost:3000/api/v1
 *
 * El contrato completo de la API está en docs/orquestacion/CONTRATO_API.md.
 * El AdminWeb NO calcula métricas: los números vienen siempre del backend.
 */

const DEFAULT_API_URL = 'http://localhost:3000/api/v1';

export const API_BASE_URL: string =
  import.meta.env.VITE_API_URL ?? DEFAULT_API_URL;

/**
 * Cliente HTTP placeholder (Fase 5 — scaffold).
 *
 * AÚN NO CONSUME NINGÚN ENDPOINT. Deja lista la estructura para las
 * pantallas del AdminWeb (RF-29 a RF-34, Adicendum DERCAS v1.2),
 * consumiendo el contrato de docs/orquestacion/CONTRATO_API.md.
 *
 * Convenciones del contrato que este cliente respetará:
 *  - Base URL: `${API_BASE_URL}` (ver ./config.ts), rutas bajo /api/v1.
 *  - Auth: `Authorization: Bearer <accessToken>` en todos los endpoints
 *    excepto registro/login/recuperar/restablecer.
 *  - Errores: `{ statusCode, message: string | string[], error: string }`.
 *  - Listas paginadas con envelope `{ datos: [...], meta: {...} }`.
 *
 * Fuera de alcance a propósito: el AdminWeb NO tiene lógica de negocio
 * propia ni calcula métricas; es OTRO cliente de la misma API REST.
 */

import { API_BASE_URL } from './config';

export type ApiError = {
  statusCode: number;
  message: string | string[];
  error: string;
};

/** Envelope de lista paginada del contrato (sección 0, Paginación). */
export type Paginated<T> = {
  datos: T[];
  meta: {
    pagina: number;
    tamanoPagina: number;
    total: number;
    totalPaginas: number;
  };
};

async function request<T>(_path: string, _init?: RequestInit): Promise<T> {
  // Intencionadamente sin implementar en el scaffold.
  throw new Error(
    `Cliente API no implementado todavía (scaffold de Fase 5). Base URL configurada: ${API_BASE_URL}`,
  );
}

export const apiClient = {
  baseUrl: API_BASE_URL,
  request,
} as const;

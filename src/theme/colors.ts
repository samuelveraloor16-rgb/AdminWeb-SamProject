/**
 * Paleta institucional SamProject (fija, no modificable).
 * Debe mantenerse sincronizada con las variables CSS de index.css.
 */
export const colors = {
  primary: '#245B4A',
  secondary: '#DCE9DF',
  tertiary: '#D5C78E',
  background: '#F7F8F5',
  text: '#34413A',
} as const;

export type InstitutionalColor = keyof typeof colors;

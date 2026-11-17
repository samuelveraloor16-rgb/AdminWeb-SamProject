import { Link } from 'react-router-dom'

export function LoginPage() {
  return (
    <section>
      <h1 className="page__title">Iniciar sesión</h1>
      <div className="page__rule" />
      <p className="page__text">
        Acceso con las mismas credenciales que la app móvil (JWT). Todavía no
        hay formulario ni llamadas reales: llegará con la Fase 5 (RF-29).
      </p>
      <p className="page__text" style={{ marginTop: '1rem' }}>
        <Link className="page__link" to="/">
          Volver al inicio
        </Link>
      </p>
    </section>
  )
}

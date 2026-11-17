import { Outlet } from 'react-router-dom'
import logo from '../assets/Logo.png'

/**
 * Layout mínimo institucional: header con logotipo + nombre y <Outlet />.
 * Sin navegación de negocio todavía (llega con la Fase 5: RF-29 a RF-34).
 */
export function MainLayout() {
  return (
    <div className="layout">
      <header className="layout__header">
        <img className="layout__logo" src={logo} alt="Logotipo de SamProject" />
        <div className="layout__name">
          SamProject <span>AdminWeb</span>
        </div>
      </header>
      <main className="layout__main">
        <Outlet />
      </main>
      <footer className="layout__footer">
        Consola administrativa de espacio · mismo JWT y rol de administrador
        por espacio que la app móvil · sin super-admin
      </footer>
    </div>
  )
}

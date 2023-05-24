import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"

import { LayoutContainer } from "./styles"

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      {/* fixo para todas paginas */}
      <Header />
      {/*espaço para ser inserido um conteudo */}
      <Outlet />
    </LayoutContainer>
  )
}

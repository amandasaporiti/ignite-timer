import { GlobalStyles } from "./styles/global"
import { Router } from "./Router"

import { BrowserRouter } from "react-router-dom"
import { CyclesContextProvider } from "./contexts/CyclesContext"

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>
    </BrowserRouter>
  )
}

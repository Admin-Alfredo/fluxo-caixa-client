// import RouterElement from './RouterElemet'
import { Provider } from "react-redux"
import store from './store'
import { useState } from 'react'
import ToastError from './components/ToastError'
import ToastSuccess from './components/ToastSuccess'
import { ThemeProvider } from 'styled-components'
import { DarkTheme, GlobalStyles, LightTheme } from './styles/theme'
import { AppContainer, WrapperMain } from './styles'
import SideBar from './components/SideBar'
import TopBar from './components/TopBar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Login from './pages/Login'
import Entidade from "./pages/Entidade"
import Home from "./pages/Home"
import Operacao from "./pages/Operacao"
import Usuario from "./pages/Usuario"

function App() {
  const [token, setToken] = useState(false)
  const [theme, setTheme] = useState('dark')
  const isDarkTheme = theme == 'dark'
  const toggleTheme = () =>
    setTheme(isDarkTheme ? 'light' : 'dark')

  if (!token) {
    return (
      <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
        <Provider store={store}>
          <>
            <GlobalStyles />
            <ToastError />
            <ToastSuccess />
            <Login setToken={setToken} />
          </>
        </Provider>
      </ThemeProvider>
    )
  }
  return (
    <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
      <Provider store={store}>
        <>
          <GlobalStyles />
          <ToastError />
          <ToastSuccess />
          <Router>
            <AppContainer>
              <SideBar />
              <WrapperMain>
                <TopBar/>
                <Routes>
                  <Route path="/" exact element={<Home />}></Route>
                  <Route path="/usuario" element={<Usuario />}></Route>
                  <Route path="/operacao" element={<Operacao />}></Route>
                  <Route path="/entidade" element={<Entidade />}></Route>
                </Routes>
              </WrapperMain>
            </AppContainer>
          </Router>
        </>
      </Provider>
    </ThemeProvider>
  )
}

export default App

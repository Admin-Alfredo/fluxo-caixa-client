

export default function RouterElement() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/usuario" element={<Usuario />}></Route>
        <Route path="/operacao" element={<Operacao />}></Route>
        <Route path="/entidade" element={<Entidade />}></Route>
      </Routes>
    </Router>
  )
}
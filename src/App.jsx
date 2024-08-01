import './App.css'
import CadastroLocais from './contexts/cadastroLocais/cadastroLocais'
import CadastroUsuario from './contexts/cadastroUsuario/cadastroUsuario'
import LoginUsuario from './contexts/loginUsuario/loginUsuario'
import PageLogin from './pages/login/pageLogin'


function App() {

  return (
    <>
      {/* <CadastroUsuario/>
     <CadastroLocais/> */}
     <PageLogin/>
     {/* <LoginUsuario/> */}
    </>
  )
}

export default App

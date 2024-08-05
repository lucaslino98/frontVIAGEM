import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '../contexts/auth/auth';
import PageLogin from '../pages/login/pageLogin'
import CadastroUsuario from '../contexts/cadastroUsuario/cadastroUsuario'

function RoutesComponent() {
    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>

                        <Route path='/' element={<PageLogin />} />
                        <Route path='/cadastro' element={<CadastroUsuario />} />


                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
    )
}

export default RoutesComponent
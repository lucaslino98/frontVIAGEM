import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '../contexts/auth/auth';
import PageLogin from '../pages/login/pageLogin'
import CadastroUsuario from '../contexts/cadastroUsuario/cadastroUsuario'
import Dashboard from '../pages/dashboard/dashboard';
function RoutesComponent() {
    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>

                        <Route path='/' element={<PageLogin />} />
                        <Route path='/cadastro' element={<CadastroUsuario />} />
                        <Route path='/dashboard' element={<Dashboard />} />

                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
    )
}

export default RoutesComponent
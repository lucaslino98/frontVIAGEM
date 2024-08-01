import { Navigate } from 'react-router-dom'
import './loginUsuario.css'
import CadastroUsuario from '../cadastroUsuario/cadastroUsuario'
function LoginUsuario() {
    return (
        <>
            <div className="logUsuario">


                <div className="englobarLogin">

                    <div className='nameCabecalho'>
                        <h2>Faça seu login</h2>
                        <span>Entre e faça descrições sobre sua viagem</span>
                    </div>

                    <div className='divLogin'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder='Digite seu email'
                        />

                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            placeholder='Digite seu password'
                        />

                        <button className="btnEntrar" >Entrar</button>
                        <button className="btnCadastrar">Cadastrar</button>

                    </div>
                </div>
            </div>

        </>

    )
}

export default LoginUsuario
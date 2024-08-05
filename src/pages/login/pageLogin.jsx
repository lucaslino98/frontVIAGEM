import React, { useState } from 'react';
import imgPG from './aviao.jpg';
import './pageLogin.css';
import LoginUsuario from '../../contexts/loginUsuario/loginUsuario';
import CadastroUsuario from '../../contexts/cadastroUsuario/cadastroUsuario';

function PageLogin() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleComponent = () => {
        setIsLogin(!isLogin);
    };

    return (
        <>
            <div className="pagLogin">
                <div className="imgPage">
                    <img src={imgPG} alt="imagem de uma janela de avião" />
                </div>

                <div className="compPage">
                    <div className='atriLogin'>
                        {isLogin ? 
                            <LoginUsuario toggleComponent={toggleComponent} /> : 
                            <CadastroUsuario toggleComponent={toggleComponent} />
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default PageLogin;

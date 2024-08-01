import imgPG from './aviao.jpg'
import './pageLogin.css'
import LoginUsuario from '../../contexts/loginUsuario/loginUsuario'


function PageLogin() {
    return (
        <>
            <div className="pagLogin">
                <div className="imgPage">
                    <img src={imgPG} alt="imagem de uma janela de avião" />
                </div>

                <div className="compPage">


                    <div className='atriLogin'>
                       <LoginUsuario/>
                    </div>

                </div>

            </div>
        </>
    )
}

export default PageLogin
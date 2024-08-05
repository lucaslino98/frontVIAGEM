import './dash.css'
import LogoHome from './img/casa.png'
import LogoUsuarios from './img/usuario.png'
function Dashboard() {
    return (
        <>
            <div className="dashCentral">

                <div className="dashMenu">
                    <div className='imgDashMenu'>
                        <img src={LogoHome} />
                    </div>
                    <ul className="dashLista">
                        <li>
                            <img src={LogoHome} alt="Logo Home" />


                            <span>Home</span>


                        </li>


                        <li>
                            <img src={LogoHome} alt="Logo Home" />

                            <span>Locais</span>
                        </li>


                        <li>
                            <img src={LogoHome} alt="Logo Home" />
                            <span>Usuários</span>
                        </li>
                    </ul>

                    <ul className="dashSair">
                        <li>
                            <img src={LogoHome} alt="Logo Home" />
                            <span>Sair</span>
                        </li>
                    </ul>
                </div>


                <div className="dashOptions">

                    <div className="dashInfor">
                        <div className='dashInflocalUsu'>
                            <div className="dashUsuario">
                                <div className='dashUsuarioContador'>
                                    <span>Usuários</span>
                                    <span>0</span>
                                </div>
                            </div>


                            <div className="dashUsuario">

                                <div className='dashUsuarioContador'>

                                    <span>Locais</span>
                                    <span>1</span>
                                </div>
                                <img src={LogoHome} />
                            </div>
                        </div>


                        <div className="dashLocalUsuario">

                            <div className="dashTituloLocal">
                                <h2>Locais</h2>
                                <span>Listagem dos Locais cadastrados</span>
                            </div>

                            <div className='dashTable'>
                                <div className='dashNameUsuarioLocal'>
                                    <h3>Local</h3>
                                    <h3>Usuario</h3>
                                </div>

                                <div className='dashNameUsuarioLocal'>
                                    <h4>Praia do canto</h4>
                                    <h4>Lucas Lino</h4>

                                </div>
                                
                                <div className='dashNameUsuarioLocal'>
                                    <h4>Praia do canto</h4>
                                    <h4>Lucas Lino</h4>

                                </div>

                            </div>


                        </div>

                    </div>





                </div>



            </div>
        </>
    )
}

export default Dashboard
import LogoHome from './casa.png'

function DashOptions(){
    return(
        <>
         <div className="dashInfor">
                        <div className='dashInflocalUsu'>
                            <div className="dashUsuario">
                                <div className='dashUsuarioContador'>

                                    <span>Usuários</span>
                                    <span>1</span>
                                </div>
                                <img src={LogoHome} />

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
        </>
    )
}

export default DashOptions
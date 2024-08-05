import { Link } from 'react-router-dom'
import './dash.css'
import LogoHome from './img/casa.png'
import DashOptions from '../../contexts/dashOptions/dashOpt'
function Dashboard() {
    return (
        <>
            <div className="dashCentral">

                <div className="dashMenu">
                    <div className='imgDashMenu'>
                        <img src={LogoHome} />
                    </div>

                    <ul className="dashLista">

                        <Link to='/' className='dashLink'>
                            <li>
                                <img src={LogoHome} alt="Logo Home" />
                                <span>Home</span>
                            </li>
                        </Link>

                        <Link to='/' className='dashLink'>
                            <li>
                                <img src={LogoHome} alt="Logo Home" />
                                <span>Locais</span>
                            </li>
                        </Link>


                        <Link to='/' className='dashLink'>
                            <li>
                                <img src={LogoHome} alt="Logo Home" />
                                <span>Usuários</span>
                            </li>
                        </Link>
                    </ul>

                    <ul className="dashSair">
                        <Link to={-1} className='dashLink'>
                            <li>
                                <img src={LogoHome} alt="Logo Home" />
                                <span>Sair</span>
                            </li>
                        </Link>
                    </ul>
                </div>


                <div className="dashOptions">

                    <DashOptions />

                </div>



            </div>
        </>
    )
}

export default Dashboard
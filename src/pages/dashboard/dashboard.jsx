import { useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 
import './dash.css';
import LogoHome from './img/casa.png';
import DashOptions from '../../contexts/dashOptions/dashOpt';
import CadastroLocais from '../../contexts/cadastroLocais/cadastroLocais';

function Dashboard() {
    const [isLogin, setIsLogin] = useState(true); 
    const navigate = useNavigate();

    const handleHomeClick = () => {
        setIsLogin(true); 
    };

   
    const handleLocaisClick = () => {
        setIsLogin(false);  
    };

    return (
        <div className="dashCentral">
            <div className="dashMenu">
                <div className='imgDashMenu'>
                    <img src={LogoHome} alt="Logo" />
                </div>

                <ul className="dashLista">
                    <li className='dashLink' onClick={handleHomeClick}>
                        <img src={LogoHome} alt="Logo Home" />
                        <span>Home</span>
                    </li>

                    <li className='dashLink' onClick={handleLocaisClick}>
                        <img src={LogoHome} alt="Logo Locais" />
                        <span>Locais</span>
                    </li>

                    <Link to='/users' className='dashLink'>
                        <li>
                            <img src={LogoHome} alt="Logo Usuários" />
                            <span>Usuários</span>
                        </li>
                    </Link>
                </ul>

                <ul className="dashSair">
                    <Link to={-1} className='dashLink'>
                        <li>
                            <img src={LogoHome} alt="Logo Sair" />
                            <span>Sair</span>
                        </li>
                    </Link>
                </ul>
            </div>

            <div className="dashOptions">
                {isLogin ? 
                    <DashOptions toggleComponent={() => setIsLogin(!isLogin)} /> : 
                    <CadastroLocais toggleComponent={() => setIsLogin(!isLogin)} />
                }
            </div>
        </div>
    );
}

export default Dashboard;

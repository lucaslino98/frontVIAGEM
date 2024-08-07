import LogoHome from './casa.png'
import React, { useEffect, useState } from 'react';
function DashOptions() {

    const [locais, setLocais] = useState([]);

    useEffect(() => {
        async function fetchLocais() {
            try {
                const response = await fetch('http://localhost:3000/local');
                if (response.ok) {
                    const data = await response.json();
                    setLocais(data);
                } else {
                    console.error('Erro ao buscar locais');
                }
            } catch (error) {
                console.error('Erro ao buscar locais:', error);
            }
        }

        fetchLocais();
    }, []);
    return (
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
                            <h3>Descrição</h3>
                        </div>

                        {locais.map((local, index) => (
                            <div key={index} className='dashNameUsuarioLocal'>
                                <h4>{local.local_name}</h4>
                                <h4>{local.descricao}</h4>
                            </div>
                        ))}

                    </div>


                </div>

            </div>
        </>
    )
}

export default DashOptions
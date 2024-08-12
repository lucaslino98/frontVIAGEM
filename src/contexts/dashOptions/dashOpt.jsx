import LogoHome from './casa.png'
import React, { useEffect, useState } from 'react';
function DashOptions() {

    const [locais, setLocais] = useState([]);
    const [users, setUsers] = useState([]);
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

        async function fetchUsers() {
            try {
                const response = await fetch('http://localhost:3000/users');
                if (response.ok) {
                    const data = await response.json();
                    setUsers(data);
                } else {
                    console.error('Erro ao buscar Usuarios');
                }
            } catch (error) {
                console.error('Erro ao buscar Usuarios:', error);
            }
        }
        fetchUsers();

    }, []);
    return (
        <>
            <div className="dashInfor">
                <div className='dashInflocalUsu'>
                    <div className="dashUsuario">
                        <div className='dashUsuarioContador'>
                            <span>Usuários</span>
                            <span>{users.length}</span>
                        </div>
                        <img src={LogoHome} />

                    </div>


                    <div className="dashUsuario">

                        <div className='dashUsuarioContador'>

                            <span>Locais</span>
                            <span>{locais.length}</span>
                        </div>
                        <img src={LogoHome} />
                    </div>
                </div>


                <table className="dashLocalUsuario">
                    <thead className='dashTable'>
                        <tr className='dashNameUsuarioLocal'>
                            <th>Local</th>
                            <th>Descrição</th>
                            <th>Latitude</th>
                            <th>Longitude</th>
                        </tr>
                    </thead>
                    <tbody className='dashTable'>
                        {locais.map((local, index) => (
                            <tr className='dashNameUsuarioLocal' key={index}>
                                <td>{local.local_name}</td>
                                <td>{local.descricao}</td>
                                <td>{local.latitude}</td>
                                <td>{local.longitude}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>





            </div>
        </>
    )
}

export default DashOptions
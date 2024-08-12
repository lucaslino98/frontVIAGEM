import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './listagem.css'


function ListaUsers() {
    const [users, setUsers] = useState([]);
    useEffect(() => {

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



                <table className="dashLocalUsuario">
                    <thead className='dashTable'>
                        <tr className='dashNameUsuarioLocal'>
                            <th>Nome</th>
                            <th>Sexo</th>
                            <th>Email</th>
                            <th>CPF</th>
                        </tr>
                    </thead>
                    <tbody className='dashTable'>
                        {users.map((users, index) => (
                            <tr className='dashNameUsuarioLocal' key={index}>
                                <td>{users.nome}</td>
                                <td>{users.sexo}</td>
                                <td>{users.email}</td>
                                <td>{users.cpf}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='btnTodo'>
                    <Link to={-1} className='dashLinke'>
                        <button className='btnVoltar'>Voltar</button>

                    </Link>

                </div>
            </div>
        </>
    )
}

export default ListaUsers
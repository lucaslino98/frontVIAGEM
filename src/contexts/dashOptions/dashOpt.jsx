import React, { useEffect, useState } from 'react';
import LogoHome from './casa.png';
import MapComponent from '../mapas/mapas'

function DashOptions() {
    const [locais, setLocais] = useState([]);
    const [users, setUsers] = useState([]);
    const [editingLocal, setEditingLocal] = useState(null);
    const [formValues, setFormValues] = useState({ local_name: '', descricao: '', latitude: '', longitude: '' });
    const [showMapModal, setShowMapModal] = useState(false);
    const [selectedLocal, setSelectedLocal] = useState(null);

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
                    console.error('Erro ao buscar Usuários');
                }
            } catch (error) {
                console.error('Erro ao buscar Usuários:', error);
            }
        }
        fetchUsers();
    }, []);

    function handleEditClick(local) {
        setEditingLocal(local.id);
        setFormValues({ local_name: local.local_name, descricao: local.descricao, latitude: local.latitude, longitude: local.longitude });
    }

    async function handleSaveClick(id) {
        try {
            const response = await fetch(`http://localhost:3000/local/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValues)
            });
            if (response.ok) {
                alert('Local atualizado com sucesso!');
                setEditingLocal(null);
                setLocais(locais.map(local => (local.id === id ? { ...local, ...formValues } : local)));
            } else {
                alert('Erro ao atualizar o local.');
            }
        } catch (error) {
            console.error('Erro ao atualizar local:', error);
        }
    }

    async function handleDeleteClick(id) {
        try {
            const response = await fetch(`http://localhost:3000/local/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                alert('Local deletado com sucesso!');
                setLocais(locais.filter(local => local.id !== id));
            } else {
                alert('Erro ao deletar o local.');
            }
        } catch (error) {
            console.error('Erro ao deletar local:', error);
        }
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    function handleMapClick(local) {
        setSelectedLocal(local);
        setShowMapModal(true);
    }

    function closeModal() {
        setShowMapModal(false);
        setSelectedLocal(null);
    }

    return (
        <>
            <div className="dashInfor">
                <div className='dashInflocalUsu'>
                    <div className="dashUsuario">
                        <div className='dashUsuarioContador'>
                            <span>Usuários</span>
                            <span>{users.length}</span>
                        </div>
                        <img src={LogoHome} alt="Logo Home" />
                    </div>
                    <div className="dashUsuario">
                        <div className='dashUsuarioContador'>
                            <span>Locais</span>
                            <span>{locais.length}</span>
                        </div>
                        <img src={LogoHome} alt="Logo Home" />
                    </div>
                </div>

                <div className="tableOrg">
                    <table className="dashLocalUsuario">
                        <thead className='dashTable'>
                            <tr className='dashNameUsuarioLocal'>
                                <th>Local</th>
                                <th>Descrição</th>
                                <th>Latitude</th>
                                <th>Longitude</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody className='dashTable'>
                            {locais.map((local, index) => (
                                <React.Fragment key={index}>
                                    <tr className='dashNameUsuarioLocal'>
                                        <td>{local.local_name}</td>
                                        <td>{local.descricao}</td>
                                        <td>{local.latitude}</td>
                                        <td>{local.longitude}</td>
                                        <td>
                                            <button className='btnAgora' onClick={() => handleEditClick(local)}>Editar</button>
                                            <button className='btnAgora' onClick={() => handleDeleteClick(local.id)}>Deletar</button>
                                            <button className='btnAgora' onClick={() => handleMapClick(local)}>Mapa</button>
                                        </td>
                                    </tr>
                                    {editingLocal === local.id && (
                                        <tr className='dashNameUsuarioLocal'>
                                            <td colSpan="5">
                                                <div className='editForm'>
                                                    <input
                                                        type="text"
                                                        name="local_name"
                                                        value={formValues.local_name}
                                                        onChange={handleInputChange}
                                                        placeholder="Nome do local"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="descricao"
                                                        value={formValues.descricao}
                                                        onChange={handleInputChange}
                                                        placeholder="Descrição do local"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="latitude"
                                                        value={formValues.latitude}
                                                        onChange={handleInputChange}
                                                        placeholder="Latitude"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="longitude"
                                                        value={formValues.longitude}
                                                        onChange={handleInputChange}
                                                        placeholder="Longitude"
                                                    />
                                                    <button className='btnAgora' onClick={() => handleSaveClick(local.id)}>Salvar</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {showMapModal && (
                <div className="modal">
                    <div className="modalContent">
                        <h2>Mapa do Local</h2>
                        <p>Nome: {selectedLocal.local_name}</p>
                        <p>Descrição: {selectedLocal.descricao}</p>
                        <p>Latitude: {selectedLocal.latitude}</p>
                        <p>Longitude: {selectedLocal.longitude}</p>
                        <div className='card-map'>
                            <MapComponent latitude={selectedLocal.latitude} longitude={selectedLocal.longitude} />
                        </div>
                        <button onClick={closeModal}>Fechar</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default DashOptions;

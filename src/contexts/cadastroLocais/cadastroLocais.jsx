import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import './cadastroLocais.css';

function CadastroLocais() {
    const { register, handleSubmit, formState, setValue, watch } = useForm({});
    const { errors } = formState;

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const cep = watch('local'); 

    useEffect(() => {
        async function buscarCEP() {
            if (cep && cep.length === 8) { 
                try {
                    const response = await fetch(`https://nominatim.openstreetmap.org/search?postalcode=${cep}&format=json&addressdetails=1&limit=1`);
                    const data = await response.json();
                    if (data.length > 0) {
                        setLatitude(data[0].lat);
                        setLongitude(data[0].lon);
                        setValue('latitude', data[0].lat); 
                        setValue('longitude', data[0].lon); 
                    }
                } catch (error) {
                    console.error("Erro ao buscar CEP:", error);
                }
            }
        }

        buscarCEP();
    }, [cep, setValue]);

    async function addLocal(dados) {
        dados.latitude = latitude;  
        dados.longitude = longitude; 
        try {
            const resposta = await fetch('http://localhost:3000/local', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            });

            if (!resposta.ok) {
                alert("Houve um erro ao cadastrar o Local.");
            } else {
                alert("Cadastrado com sucesso!");
            }

        } catch (error) {
            alert("Houve um erro ao cadastrar o Local.");
        }
    }

    return (
        <>
            <form className="formCadastroLocal" onSubmit={handleSubmit(addLocal)}>

                <div className="layouCadastro">
                    <div className="nameLocal">
                        <h1>Cadastro de Locais</h1>
                    </div>

                    <div className="cadastroLocalInf">
                        <label htmlFor="local_name">Nome do local</label>
                        <input
                            type="text"
                            id="local_name"
                            placeholder="Digite o nome do Local"
                            {...register('local_name', { 
                                required: "Nome do local é obrigatório", 
                                minLength: {
                                    value: 3, 
                                    message: "Nome do local deve ter pelo menos 3 caracteres"
                                } 
                            })}
                        />
                        {errors.local_name && <p style={{ color: 'red' }}>{errors.local_name.message}</p>}

                        <label htmlFor="descricao">Descrição do Local</label>
                        <input
                            type="text"
                            id="descricao"
                            placeholder="Descreva o local em poucas palavras"
                            {...register('descricao', { 
                                required: "Descrição do local é obrigatória", 
                                minLength: {
                                    value: 10, 
                                    message: "Descrição deve ter pelo menos 10 caracteres"
                                } 
                            })}
                        />
                        {errors.descricao && <p style={{ color: 'red' }}>{errors.descricao.message}</p>}

                        <label htmlFor="local">CEP</label>
                        <input
                            type="text"
                            id="local"
                            placeholder="Digite o CEP"
                            {...register('local', { 
                                required: "CEP é obrigatório", 
                                pattern: {
                                    value: /^[0-9]{8}$/, 
                                    message: "CEP deve conter 8 números"
                                } 
                            })}
                        />
                        {errors.local && <p style={{ color: 'red' }}>{errors.local.message}</p>}
                    </div>
                    <button type="submit" className="btnCadastroLocal">Cadastrar</button>
                </div>
            </form>
        </>
    );
}

export default CadastroLocais;

import { useForm } from "react-hook-form"
import './cadastroLocais.css'
function CadastroLocais() {
    const { register, handleSubmit, formState } = useForm({})

    const { errors, isSubmitting } = formState;
    console.log(errors)
  
    async function addLocal(dados) {
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

                            <label htmlFor="local">Nome do local</label>
                            <input
                                type="text"
                                id="local_name"
                                placeholder="Digite o nome do Local"
                                {...register('local_name', { required: true })}
                            />

                            <label htmlFor="descricao">Descrição do Local</label>
                            <input
                                type="text"
                                id="descricao"
                                placeholder="Descreva o local em poucas palavras"
                                {...register('descricao', { required: true })}
                            />

                            <label htmlFor="local">Localização</label>
                            <input
                                type="text"
                                id="local"
                                placeholder="Digite o CEP"
                                {...register('local', { required: true })}
                            />
                        </div>
                        <button type="submit" className="btnCadastroLocal">Cadastrar</button>
                    </div>

                </form>

            </>
        )
    }

    export default CadastroLocais
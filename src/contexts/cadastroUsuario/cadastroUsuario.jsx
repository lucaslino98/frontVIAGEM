import { useForm } from "react-hook-form";
import './cadastroUsuario.css';



function CadastroUsuario() {

    const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm();


    async function addUser(dados) {
        try {
            const resposta = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            });

            if (!resposta.ok) {
                alert("Houve um erro ao cadastrar usuário.");
            } else {
                alert("Cadastrado com sucesso!");
            }

        } catch (error) {
            alert("Houve um erro ao cadastrar usuário.");
        }
    }

    return (
        <>
            <form className="formUsuario" onSubmit={handleSubmit(addUser)}>
                <div className="formHeader">
                    <div className="cadastroInputs">
                        <label htmlFor="nome">Nome</label>
                        <input
                            className="inputUsuarioCadastro"
                            type="text"
                            id="nome"
                            placeholder="Digite seu nome"
                            {...register('nome', { required: true })}
                        />
                        {errors.nome && errors.nome.type === 'required' && <p className="errorForm">{errors.nome.message || 'nome é obrigatório'}</p>}
                    </div>

                    <div className="cadastroInputs">
                        <label htmlFor="sexo">Sexo</label>
                        <select
                            className="inputUsuarioCadastro"
                            name="sexo"
                            id="sexo"
                            {...register('sexo', { required: true })}
                        >
                            <option value="">Selecione seu Sexo</option>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                        </select>
                    </div>

                    <div className="cadastroInputs">
                        <label htmlFor="cpf">CPF - (Cadastro de Pessoas Físicas)</label>
                        <input
                            className="inputUsuarioCadastro"
                            type="text"
                            id="cpf"
                            placeholder="Digite seu CPF (Apenas números)"
                            {...register('cpf', { required: true })}
                        />
                        {errors.cpf && <p className="errorForm">{errors.cpf.message || 'CPF é obrigatório'}</p>}

                        <label htmlFor="dataNascimento">Data de Nascimento</label>
                        <input
                            className="inputUsuarioCadastro"
                            type="date"
                            id="date"
                            {...register('date', { required: true })}
                        />
                        {errors.date && <p className="errorForm">{errors.date.message || 'Data de Nascimento é obrigatória'}</p>}
                    </div>

                    <div className="cadastroInputs">
                        <label htmlFor="email">Email</label>
                        <input
                            className="inputUsuarioCadastro"
                            type="email"
                            id="email"
                            placeholder="Digite um email válido"
                            {...register('email', { required: true })}
                        />
                        {errors.email && <p className="errorForm">{errors.email.message || 'Email é obrigatório'}</p>}

                        <label htmlFor="password">Senha</label>
                        <input
                            className="inputUsuarioCadastro"
                            type="password"
                            id="password"
                            placeholder="Digite uma senha"
                            {...register('password', { required: true })}
                        />
                        {errors.password && <p className="errorForm">{errors.password.message || 'Senha é obrigatória'}</p>}
                    </div>

                    <button type="submit" className="btnCadastroUsuario">Cadastrar</button>
                </div>
            </form>
        </>
    )
}

export default CadastroUsuario;

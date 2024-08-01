import { useForm } from "react-hook-form"
import './cadastroUsuario.css'


function CadastroUsuario() {
    const { register, handleSubmit, formState } = useForm({})

    const { errors, isSubmitting } = formState;
    console.log(errors)
    const handleSubmitData = (data) => {
        console.log('submit', data)
    }
    return (
        <>
            <form className="formUsuario" onSubmit={handleSubmit(handleSubmitData)}>

                <div className="formHeader">

                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        placeholder="Digite seu nome"
                        {...register('nome', { required: true })}
                    />
                    {errors.nome && errors.nome.type === 'required' && <p className="errorForm">{errors.nome.message || 'nome é obrigatório'}</p>}

                    <label htmlFor="sexo">Sexo</label>
                    <select
                        name="sexo"
                        id="sexo"
                        {...register('sexo', { required: true })}
                    >
                        <option value="0">Selecione seu Sexo</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>

                    <label htmlFor="cpf">CPF - (Cadastro de Pessoas Físicas)</label>
                    <input
                        type="text"
                        id="cpf"
                        placeholder="Digite seu CPF (Apenas números)"
                        {...register('cpf', { required: true })}
                    />

                    <label htmlFor="dataNascimento">Data de Nascimento</label>
                    <input
                        type="date"
                        id="date"
                        {...register('date', { required: true })}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Digite um email válido"
                        {...register('email', { required: true })}
                    />

                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Digite uma senha"
                        {...register('password', { required: true })}
                    />

                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </>
    )
}

export default CadastroUsuario
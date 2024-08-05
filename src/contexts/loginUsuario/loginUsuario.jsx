import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/auth';
import { useForm } from 'react-hook-form';
import './loginUsuario.css';

function LoginUsuario({toggleComponent}) {
    const { signIn } = useAuth();
    const { handleSubmit, register, formState: { errors } } = useForm();
    const navigate = useNavigate();

    async function onSubmit(data) {
        try {
            const isSuccess = await signIn(data);
            console.log(isSuccess);
            if (isSuccess) {
                navigate('/dashboard');
            } else {
                alert('Email/senha inválidos');
            }
        } catch (error) {
            console.log('Erro ao tentar fazer login', error.message);
        }
    }

   

    return (
        <div className="logUsuario">
            <div className="englobarLogin">
                <div className='nameCabecalho'>
                    <h2>Faça seu login</h2>
                    <span>Entre e faça descrições sobre sua viagem</span>
                </div>
                <form className='divLogin' onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder='Digite seu email'
                        {...register('email', { required: 'Email é obrigatório' })}
                    />
                    {errors.email && <p className="error">{errors.email.message}</p>}

                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        placeholder='Digite sua senha'
                        {...register('password', { required: 'Senha é obrigatória' })}
                    />
                    {errors.password && <p className="error">{errors.password.message}</p>}

                    <button type="submit" className="btnEntrar">Entrar</button>
                    <button className="btnCadastrar" onClick={toggleComponent}>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default LoginUsuario;

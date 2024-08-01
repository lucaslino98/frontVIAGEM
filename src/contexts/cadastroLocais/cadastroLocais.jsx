import { useForm } from "react-hook-form"

function CadastroLocais() {
    const { register, handleSubmit, formState } = useForm({})

    const { errors, isSubmitting } = formState;
    console.log(errors)
    const handleSubmitData = (data) => {
        console.log('submit', data)
    }

    return (
        <>
            <h1>locais</h1>
            <form onSubmit={handleSubmit(handleSubmitData)}>

                <label htmlFor="local">Nome do local</label>
                <input
                    type="text"
                    id="local-name"
                    placeholder="Digite o nome do Local"
                    {...register('local-name', { required: true })}
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


            </form>

        </>
    )
}

export default CadastroLocais

#  VIAGEM 365

Projeto voltado para troca de informações entre usuários. Onde cada usuário vai poder cadastrar destinos que frequentou em sua viajem e dar uma breve descrição sobre o mesmo.



## Tecnologias Utilizadas

-   **Linguagem:** ReactJS

## Como utilizar esta API

Na primeira vez você ira ter que clonar o respositório 
```bash
cd "caminho/da/sua/pasta"
git clone https://github.com/lucaslino98/frontVIAGEM
cd "viagem365"
code ./ #Abrirá o Vscode na raiz do projeto
```

Após isso precisamos instalar as dependencias

```bash
`npm install`
 Se for em ambiente local: `npm install --dev`
```

Para rodar o repositório em um ambiente local

```bash
`npm run dev`
```

Execute este comando para Simular o backend (Banco de dados)
```bash
`npx json-server  server.json`

Para acessar os endpoints utilize
```bash
http://localhost:5173/
```

Para fazer login
```bash
Cadastre um Usúario novo ou utilize o usuario admin.
Email : admin@admin.com
senha: admin
```



    
## Bibliotecas utilizadas

[json-server](https://www.npmjs.com/package/json-server) \
[leaflet](https://www.npmjs.com/package/leaflet) \
[react](https://www.npmjs.com/package/react) \
[react-dom](https://www.npmjs.com/package/react-dom) \
[react-hook-form](https://www.npmjs.com/package/react-hook-form) \
[react-leaflet](https://www.npmjs.com/package/react-leaflet) \
[react-router-dom](https://www.npmjs.com/package/react-router-dom) 




## Melhorias

- Ter um sistema de roteiros. Após a pessoa cadastrar um destino a mesma pode adicionar seu roteiro utilizado pela cidade, sendo assim ajudando um outro usúario a otimizar tempo antes de criar o roteiro.
- Criar campos para o usuário adicionarem fotos dos destinos.
- Criar um sistema dentro desta API, onde quando o cliente vizualizar o destino após cadastrar o mesmo poder ter opções de hotéis, restaurantes.



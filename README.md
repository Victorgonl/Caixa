# Caixa

## Ambiente

### Instalação do `Node.js` e `npm`

Existem algumas meneiras para instalar o `Node.js` e `npm`, como:

- Instaladores do site: https://nodejs.org/en/download

  Recomendado para `Windows` e `macOS`.

- `apt` em `Linux`.

      sudo apt install nodejs npm

  Recomendado para distribuições Linux beseadas em `Debian`.

- Gerenciador de pacotes, como `Conda` e `Mamba`, com arquivo `environment.yml` neste repositório.

  Recomendado para isolar os pacotes instalados do Sistema Operacional.

  Para mais informações:

    - https://mamba.readthedocs.io/en/latest/installation.html

    - https://mamba.readthedocs.io/en/latest/user_guide/micromamba.html

  No próximo tópico, iremos instalar e configurar o ambiente com o gerenciador de pacotes `micromamba` dentro de uma instância do `Visual Studio Code`.

### Visual Studio Code

Com o VSCode aberto, instale as extensões recomendadas em `./.vscode/extensions.json`. Use `Crtl + P` e entre:

    ext install corker.vscode-micromamba

  <p></p>

    ext install qwtel.sqlite-viewer

<img src="./images/extensions.png">

Após a instalação da extensão `micromamba`, utilize `Ctrl + Shift + P` e entre o comando:

    >micromamba create environment

<img src="./images/create_environment.png">

A extensão irá instalar o `micromamba` em `./.micromamba/` e em seguida instalar os pacotes necessários no ambiente local do projeto, listados em `environment.yml`.

<img src="./images/environment.png">

Os pacotes (`nodejs` e `nmp`) estarão instalados em `./.micromamba/` e não no Sistema Operacional. Assim, poderemos utilziar os pacotes necessários dentro desta instância do VSCode e poder atualizar ou apagar o ambiente quando desejado, excluindo tudo o que foi instalado.

No canto inferior esquerdo do VSCode, irá aparecer o ambiente `micromamba` (`μenv[Caixa]`) ativo.

**Observação:** Talvez seja necessário reiniciar o VSCode para ativar o ambiente.

<img src="./images/micromamba.png">

Você pode verificar os pacotes instalados com o `micromamba` com o seguinte comando no terminal do VSCode:

  micromamba list

<img src="./images/micromamba_list.png">

### Instalação das dependências do `Node.js`

Dentro do terminal no VSCode, entre:

    npm install

### Banco de Dados

A aplicação utilizará um banco de dados embutido, o `SQLite`, uma implementação de código aberto multiplataforma que não requer qualquer tipo de instalação ou manutenção, simplificando nossa tarefa.

Mais informações em:

- https://www.sqlite.org/index.html

- https://en.m.wikipedia.org/wiki/SQLite

O banco de dados, em arquivo único, estará disponível em `./database/database.sqlite`, podendo ser apagado, caso necessário. Suas modificações serão ignoradas em commits por meio do `.gitignore`.

Com a extensão `SQLite Viewer`, podemos abrir o arquivo do banco de dados para vizualizar as tabelas criadas e os dados que serão inseridos.

<img src="./images/database.png">

### Execução dos testes

    npm test
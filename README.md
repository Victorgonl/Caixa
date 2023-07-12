# Caixa

## Ambiente

### Instalação do `Node.js` and `npm`

- Instaladores do site: https://nodejs.org/en/download

  Recomendado para `Windows` e `MacOS`.

- `apt` em `Linux``.

      sudo apt install nodejs npm

  Recomendado para distribuições Linux beseadas em `Debian`.

- Gerenciador de pacotes, como `Conda` e `Mamba`, com arquivo `environment.yml` neste repositório.

      name: Caixa

      channels:
        - conda-forge

      dependencies:
        - nodejs

  Recomendado para isolar os pacotes instalados do Sistema Operacional.

  Para mais informações:

    - https://conda.io/projects/conda/en/latest/user-guide/install/index.html
    - https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html
    - https://mamba.readthedocs.io/en/latest/installation.html
    - https://mamba.readthedocs.io/en/latest/user_guide/micromamba.html

### Instalação das dependências

    npm install

### Execução dos testes

    npm test
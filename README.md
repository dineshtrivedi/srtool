# srtool
Ferramenta de edição de tempo em legendas no formato srt

## 1 - Passos seguintes -> Arquitetura css

* Definição de paleta de cores;
* Definição de breakpoints;
* Definição de função para espaçamento;
* *Adicionar box-sizing:border-box como padrão*;
* Usando sass maps para criar um sistema de grids simplificado;
* Componente de input de formulário;
* Componente de botões (estados: botão mais e botão menos);
* Componente de cabeçalho;
* Componente de tooltip css;
* Pesquisa e eventual aplicação de schema.org;
* Criação de classes para páginas;

## Arquitetura css, ter sempre em mente:

* Mantenha a integridade entre o design e o css;
* Criei componentes reutilizáveis;
* Nomenclatura de classes deve fazer parecer óbvia a relação entre uma .classe-pai  e uma .classe-pai-filha;
* Componentes devem funcionar fora de páginas;
* Css de páginas apenas posiciona componentes (à menos que o design justifique o contrário);
* Evite nomes de classes muito genéricos ou que conflitem com tags e atributos html, como: .select, .checkbox, .blue;
* Classes de utilities podem servir ao bem quando bem utilizadas;
* Mobile first quer dizer que você usará principalmente media queries com min-width;
* Mobile first precisava de uma estrutura de breakpoints coerente e fiel ao design;

## 2. Passos seguintes -> Angular 
Aqui é com você, Dinesh!

## 3. Config

Configurando ambiente de desenvolvimento.

### Sass

sudo su -c "gem install sass"

### Grunt

Primeiro instalar o grunt-cli: sudo npm install -g grunt-cli

Grunt local: npm install grunt --save-dev

### Grunt Sass

npm install grunt-contrib-sass --save-dev

### Grunt Watch

npm install grunt-contrib-watch --save-dev

### Grunt Scss-lint

sudo gem update
sudo gem install scss_lint
npm install grunt-scss-lint --save-dev

### Colors

https://flatuicolors.com/

### Bower

sudo npm install -g bower
bower init

### Compass-mixins

bower install compass-mixins --save

### Normalize.css

bower install normalize.css --save

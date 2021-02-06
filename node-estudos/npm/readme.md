# ambiente
para começar a utilzar o npm você deve ter instalado:

- [ ] nodejs
- [ ] npm

# iniciar um projeto com npm

para começar um projeto no npm basta abrir um terminal e digitar(depois de ter todo o ambiente configurado):

<pre>
npm init
</pre>

ai o npm fará perguntas do tipo:

- qual é o nome da aplicação?
- qual é o autor dela?
- etc...

caso queira pular estas perguntas ou de enter e pule todas manualmente
ou utilize a "flag" -y depois do init, assim:

<pre>
    npm init -y
</pre>

e seu package.json será gerado com informações disponiveis

obs: é importante que sua pasta onde está iniciado o projeto,
não tenha caracteres especiais ou letras maiscúlas

# começando

obeserve a estrutura dos arquivos desta pasta, temos um package.json.

## package.json o centro de tudo
pense no package.json como uma ficha da aplicação para o npm
la você terá coisas como:

- dependencias da aplicação
- dependencias de desenvolvimento
- nome da aplicação
- autor da aplicação 
- scripts para executar a aplicação
- licença
- descrição da aplicação
- versão da aplicação

# comandos basicos do npm

na cli(command-line-interface) do npm temos comandos como:

<pre>
    npm install package-name
</pre>

ou

<pre>
    npm i package-name
</pre>

ambos servem para instalar modulos de terceiros em nossa aplicação
onde esta escrito "package-name" também poderia ser um express ou
qualquer modulo publico no npm. quando instalar algum modulo novo
ou atualizar algum antigo o npm irá automaticamente agir, e modificar
o package.json para não ficar desatualizado.

## comando de atualização

para atualizar seus pacotes, basta digitar o comando:

<pre>
    npm update
</pre>

## comando de remoção 

para remover um modulo do projeto basta utilizar:

<pre>
    npm uninstall package-name
</pre>

# flags 

acima ja foi citado o termo "flags", bom flags são parametros opcionais passados ao comando, no npm temos muitos mais alguns mais utilizados como:

## adicionar dependencia como de desenvolvimento:

<pre>
    npm install package-name -D
</pre>

## adicionar uma depencia e atualizar todas as outras:

<pre>
    npm install package-name --save
</pre>

obs: atualmente o comando "npm install package-name" ja vem com o --save integrado e para evitar o comportamento dele você deve utilizar a flag:

<pre>
    npm install package-name --no_save
</pre>

## adicionar dependencia como de produção:

<pre>
    npm install package-name -prod
</pre>

obs: o "npm install" por padrão adiciona uma dependencia como de produção, porém se tiver uma de desenvolvimento e desejar muda-la para produção este comando também fará isto

# scripts no package.json

no nosso package.json, teremos uma pequena funcionalidade que te ajudara, a utilizar comandos de um jeito mais facil e encurtado pois você pode trocar:

<pre>
    node app.js 
</pre>

por

<pre>
    npm run start
</pre>

neste caso foi até desvantajoso pois ficara mais curto com a cli do node, porém ainda é aconselhavel utilizar mesmo assim.

## criando scripts

para criar um script, igual o visto acima entre no package.json e lá tera uma sessão scripts(caso não tenha coloque manualmente) ficará assim:

<pre>
    {
        "name": "app-npm",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "start": "node helloword.js"
        },
        "keywords": [],
        "author": "",
        "license": "ISC"
    }
</pre>

## executando scripts

para executar um script, como visto acima você utilizará:

<pre>
    npm run nomescript
</pre>
# Descrição projeto Desafio FRONTEND
Projeto de construção de de uma página web Exponsivo para mobile com utilização de APIs já pré fornecidas utilizando somente HTML, JS e CSS seguindo segundo a imagem **wireframe.webp** o projeto será composto por 7 partes que são hearder contendo logo e menu, slider de imagem com avanço latera, slide com descrição dos imóveis e interação via DOT inferiores, faixa com um botão e um texto informativo, slide com descrição das últimas notícias com interação via DOT inferiores, blocos com textos dos itens mais procurados e footer com um menu de navegação.

Todo código foi construido em blocos, tanto as DIVs quanto os JS e CSS, optei por esse formato pelo motivo de ser possível aproveitar o código para outros projetos ou mover dentro do próprio código para cima ou para baixo todos os blocos estão descritos com <!--ITEM numeo do bloco!-->.

## descrição das tarefas e dificuldades pontuais:
**Header:** o desenvolvimento a dificuldade inicial foi a pré disposição dos itens de menu na posição horizontal onde ele ficasse visualmente apresentável e outro desafio foi a visualização  mobile, onde optei por estruturar de uma forma visual diferente, onde o menu irá se posicionar a baixo do header no mesmo formato desktop horizontalmente.

**OBS:** Dificuldade em prédispor o menu em um formato horizontal.

1) Slider com imagem, título e botão action feito com JS, css e API **https://labs.inforcedata.com.br/desafio-frontend/banners.json** maior.

**OBS:** Dificuldade foi encontrar um termo em que ficasse bom tanto para o desktop quando para o mobile.

2) Apresentação dos imóveis em formato slider com interação em DOT na parte inferior feito com JS, CSS e API **https://labs.inforcedata.com.br/desafio-frontend/vitrines.json**.

3) Inclusão da faixa dividindo a página em duas partes com um botão action e texto descritivo.

**OBS:** Dificuldade encontrar uma cor onde ficasse dentro do layout,tentei preto, cinza e verde devido a logo, mas nenhuma ficou visualmente boa então optei por manter o mesmo formato do header e do footer, com o intuito de manter um layout clean que foi a proposta inicial.

4) Apresentação das últimas noticias em formato de slider com interação em DOT na parte inferior feito com JS, CSS e API **https://labs.inforcedata.com.br/desafio-frontend/noticias.json**.

**OBS:** Dificuldade alinhar os botões de action, pois os textos do link da API estão em tamanhos diferentes, por esse motivo os botões ficavam desalinhados.



**FOOTER:** o desenvolvimento foi utilizado a mesma pré disposição dos itens de menu na posição horizontal com uma fonte menor.


## Dificuldade(s) geral

1) **OBS:** Dificuldades com a API fornecida, pois estou acostumado com a API em um formato diferente e um dos itens do desafio é não usar nenhum tipo de library, por esse motivo tive que usar o split do JS para organizar os itens.
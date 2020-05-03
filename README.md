# AVD1 - PROGRAMAÇÃO ORIENTADA A OBJETOS II

# Dupla: João Paulo Rosa Medeiros & Marco Antônio de Souza Silva Júnior

O aplicação do frontend contém duas rotas: uma para cadastrar os livros (/) e a
outra para fazer a listagem de todos os livros cadastrados (/listalivro).
Quando a aplicação for iniciada deverá ser exibida a página para listar os livros
cadastrados em ordem do livro mais atual. Utilizar o campo createdAt do banco
de dados mongodb
No cabeçalho deverá ter dois botões, um botão para cadastrar e outro para listar
os livros. Clicando no botão de cadastrar deverá ser exibido o formulário com os
seguintes campos: imagem do livro, Nome do Livro, Autor, Número de Páginas,
Editora e ISBN. Quando salvar o cadastro deverá retornar para a página de
listagem.
A listagem dos livros deverá aparecer a imagem do livro e logo abaixo as
informações do nome do Livro, autor, número de páginas, editor e ISBN. Deverá
ter um botão para excluir o livro cadastrado. No final da página habilitar os
botões próximo e anterior para fazer a paginação dos dados.
Aplicar o styled components.
No frontend para visualizar a imagem que está gravada no backend utilize a
seguinte sintaxe:
<img src={`http://localhost:3333/files/${variavel_do_map.nome_campo_da_imagem}`} alt='' />
Para alterar o estado da imagem, utilize o comando abaixo:
this.setState( { nome_do_atributo_imagem: e.target.files[0] })

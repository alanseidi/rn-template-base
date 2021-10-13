
# Template padrão react native com expo barer workflow utilizando typescript

Esse template foi criar para facilitar a criação e padronização de novos projetos com o expo, sendo aplicado algumas configurações e eslint, prettifier e editorconfig.

Além de já ter algumas libs instaladas por default, para que facilite o processo de ciração de novos apps.

Está sendo utilizado por padrão o yarn como gerenciador de pacotes.

## Instalação

#### Para instalar rode o comando na pasta raiz após o clone

```http
  yarn
```
#### Instalação da fonte
Após a instalação das dependências, será necessário instalar as fontes, para isso veja qual fonte será utilizada no app, e instale seguindo a documentação do [expo-font](https://docs.expo.dev/guides/using-custom-fonts/)

Caso já saiba o nome da fonte que será utilizada, basta rodar o comando abaixa substituindo o nome "raleway" pelo nome da fonte desejada
```http
  yarn add @expo-google-fonts/raleway
```

## TODO
No código existem alguns todo para serem feitos após a instalação.
Siga as recomendações para não haver erros quando for rodar o app pela primeira vez

## Iniciando o aplicativo
Para iniciar o expo rode o comando na pasta raiz do projeto
```http
  expo start
```

## Pacotes instalados

- [react native](https://reactnative.dev/)
- [expo](https://expo.dev/)
- [eslint](https://eslint.org/)
- [prettifier](https://www.prettifier.net/)
- [editorconfig](https://editorconfig.org/)
- [typescript](https://www.typescriptlang.org/)
- [react-native-masked-view](https://github.com/react-native-masked-view/masked-view)
- [react-navigation](https://reactnavigation.org/)
- [axios](https://axios-http.com/docs/intro)
- [expo-font](https://docs.expo.dev/guides/using-custom-fonts/)

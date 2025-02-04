## geradorQRcodePassword 

## Descrição do código
Este código é um programa em JavaScript que utiliza o módulo prompt para interagir com o usuário e oferece duas opções de funcionalidade: gerar um código QRcode ou criar uma senha. Ele importa funções de módulos externos para realizar essas tarefas e executa o fluxo de interação com o usuário de forma assíncrona.

## Dependências:
* prompt: Biblioteca para capturar entradas do usuário via terminal.
* Mainprompt: Um módulo que contém a estrutura do prompt inicial, incluindo as opções que o usuário pode escolher.
* createQRcode: Módulo responsável pela criação de códigos QR.
* createPassword: Módulo responsável pela geração de senhas seguras.

## Fluxo do Código:
* O programa inicia com a chamada da função main(), que começa a interação com o usuário.
* O prompt.get() é utilizado para exibir um menu de opções ao usuário (definido no arquivo promptMain.js).

## Dependendo da escolha do usuário:
* Se o usuário escolher a opção 1, a função createQRcode() é chamada para gerar um código QRcode.
* Se o usuário escolher a opção 2, a função createPassword() é chamada para gerar uma senha.
* O código utiliza funções assíncronas, então a execução aguarda a conclusão de uma função antes de iniciar a próxima.
* O prompt.start() é chamado para iniciar o processo de entrada de dados do usuário.

## Tecnologias usadas 
* JavaScript
* NodeJS

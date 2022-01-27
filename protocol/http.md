Protocolos

HTTP: 80
HTTPS: 443

HTTP/HTTPS -> Comunicação Web Geralmente
UDP -> 
22 SSH -> Acesso Remoto
21 FTP -> Protocol transferência de arquivos
FTPS -> Mesmo de cima só que mais seguro 
TCP/IP -> Rede mundial de computadores...
SOCKET -> Protocolo para comunicação em tempo real

Porta

6379 -> Redis
3306 -> Mysql
5432 -> PostgreeSQL
1433 -> SQL Server
27017 -> MongoDB

Navegador Web / Servidor Web

Client Side / Server Side

Next.JS -> Framework React > Server Side Rendering
CRA -> Boilerplate React > Client Side Rendering

Verbs - Verbos - Metodos

{
    name: "Keven",
    city: "Recife",
    state: "Pernambuco"
}

GET -> Busca informações / Renderiza
POST -> Envio de dados -> Cadastro
PUT -> Envio de dados -> Atualiza
DELETE -> Remove algum recurso
PATCH -> Atualiza partes de um recurso

XML - JSON

Web Services > SOAP

<user>
    <name>Keven Leone</name>
    <address>Rua Santos Dumont</address>
    <number>304</number>
    <today-date>2022-01-27T00:28:53.409Z</today-date>
    <is-raining>false</is-raining>
</user>

REST -> JSON

{
    "user": {
        "name": "Keven Leone",
        "address": "Rua Santos Dumont",
        "number": 304,
        "is-raining": true,
        "today-date": "2022-01-27T00:28:53.409Z"
    }
}

http://example.com/apagar/produto/1234

VERB: GET -> http://example.com/api/produto?page=4&pageSize=100
VERB: GET -> http://example.com/api/produto/1234
VERB: DELETE -> http://example.com/api/produto/1234
VERB: PUT -> http://example.com/api/produto/1234 (BODY: {})
VERB: POST -> http://example.com/api/produto (BODY: {})

http://example.com/api/produto?page=4&pageSize=100

http:// -> Protocolo
example.com -> Domínio
/api/produto -> URL / Rota
?page=1&pageSize=100&skip=10 -> Query Parameter

STATUS CODE >

Respostas de informação (100-199),
Respostas de sucesso (200-299),
Redirecionamentos (300-399)
Erros do cliente (400-499)
Erros do servidor (500-599).

https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
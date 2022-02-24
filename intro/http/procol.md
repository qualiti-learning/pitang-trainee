Protocolo HTTP, REST, JSON

HTTP / HTTPS

HTTP: 80
HTTPS: 443 

Protocolos:

22 SSH -> Acesso Remoto
21 FTP -> Transferência de Arquivo

SOCKET -> Comunicação em tempo real 
UDP ->
TCP/IP -> 
MQTT ->
SOAP ->

HTTPS > Camada de Segurança

27017 -> MongoDB 
5432 -> Postgres
3306 -> MySQL
6379 -> Redis NoSQL
1433 -> MSSQL

Navegador Web / Servidor Web
Client Side / Server Side

–≠–≠–≠–≠–≠–≠–≠–≠–≠–≠–≠–≠–≠–≠–≠–≠–≠–≠–≠–≠–≠–≠–≠–≠–≠–≠–≠–≠–

Cross-Origin Resource Sharing (CORS)

GET

POST
PUT
DELETE
PATCH

classroom.google.com
meet.google.com
google.com

onedrive.com

Method HTTP / Verbo HTTP

GET -> Lista de informações, carregamento de páginas
POST -> 
PUT ->
DELETE ->

REST 

Header Request > 
    Content-Type: "audio/mpeg",
    Authorization: "bearer ...",
    "Accept-Language": "pt-BR"

Status Code -> 
Content Type -> 

http://example.com/apagar/produto/1234
http://example.com/buscar/produto/1234
http://example.com/criar/produto
http://example.com/atualizar/produto/1234

GET http://example.com/produto
GET http://example.com/produto/1234
POST http://example.com/produto (BODY: { name: 'Shampoo' })
PUT http://example.com/produto/1234 (BODY: { name: 'Shampoo' })
DELETE http://example.com/produto/1234

http://example.com/produto?filter=Shampoo&items=10

http:// => Protocolo
example.com => domain/host
/produto => path 
1234 => parametro/param 
?filter=Shampoo => Query Param

https://github.com/kevenleone?tab=overview&from=2021-12-01&to=2021-12-31

---

JSON -> REST

{
    "user": {
        "name": "Keven",
        "address": "Recife 1234...",
        "city": "Recife",
        "capital": true,
        "number": 1234
    }    
}

XML -> SOAP

<user>
    <name>Keven</name>
    <address>Recife 1234...</address>
    <city>Recife</city>
</user>
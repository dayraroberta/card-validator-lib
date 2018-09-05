# Verificador de cartão de crédito v.1.0.0

**Esta biblioteca se destina à verificação de cartões de créditos**
Ao inserir o número de um cartão, esta versão informa de acordo com o algorítmo de Luhn se o cartão inserido é válido ou inválido.


## Os métodos utilizados na biblioteca são:

#### **cardValidator(cardNumber);**

Exemplo de uso:

```
$node
> let creditNumber = require('credit-card-validator-lib')
> creditNumber.cardValidator(34234234); //'false'
```


## Versão 1.0.0
- Funcionalidades: Verifica se o cartão é válido ou não e retorna true para válido e false para inválido.


## Instalação

- Você deverá ter o node + npm instalados. Para guia de instalação, visite [o site oficial](https://www.npmjs.com/get-npm).
- proceda com a instalação com `$npm install credit-card-validator-lib`


## Roadmap oficial do projeto

#### Versão 3.0.0 (sem previsão, aceita-se contribuições)
- README translated to english;

#### Versão 2.0.0 (previsão dezembro/2018)
- Implementação de reconhecimento da bandeira do cartão.

#### Versão 1.0.0 (released)
- Funcionalidades: Verifica se o cartão é válido ou não e retorna true para válido e false para inválido.
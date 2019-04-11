# GetStarted API

Para importar en su componente:

```js
manifest.json

"dependencies": {
  "exito.getstarted-graphql": "1.x"
}

```

## Uso

Se deben de proveer los siguientes datos.

```js
user(gender?: string)
```

Donde se retornaran los siguientes datos

```js
gender: string;
fullName: string;
email: string;
```

Para ver más ejemplos revise `node\shared\querys.gql`
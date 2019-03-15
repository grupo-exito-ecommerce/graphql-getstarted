# SmartQuick API (Coverage)

La API SmartQuick Permite realizar la integración del servicio SmartQuick que se emplea para realizar la validación de cobertura de una dirección para las modalidades **A domicilio** Y **Compra y recoge**
  

Para importar en su componente:

```js
manifest.json

"dependencies": {
	"exito.smartquick": "1.x"
}

```

  

## Uso

Se deben de proveer los siguientes datos.

```js
smartQuick(address: String, city: String, domine:String)
```

Donde se retornaran los datos con la longitud y latitud obtenida por SmartQuick

```js
lat: String
long: String
```

# title: Reto técnico backend nodejs - Indra company

### description: Este reto fue realizado para diseñar una pequeña API con la arquitectura serverless mediante AWS Lambdas. Esta API contiene 4 endpoints que se explicarán en detalle.

### Cloud: AWS

### framework: Serverless

### framework doc: https://www.serverless.com/framework/docs/getting-started

### language: nodeJS

### authorLink: https://github.com/DanielHervias

### authorName: Daniel Hervias

### Endpoint 1: https://1had2quone.execute-api.us-east-1.amazonaws.com/get-planet-swapi/:id

Este endpoint le permite a usted hacer un fetch de un elemento de la colección de planetas que posee la API Star Wars. Y mostrarle un la respuesta con los atributos cambiados de ingles a español.

### Endpoint 2: https://1had2quone.execute-api.us-east-1.amazonaws.com/save-planet

Este endpoint le permite a usted traer un elemento de la API Star Wars y guardarlo en nuetras Dyanamo DB en su respectiva colección.
Sedebe manar un json. Ejemplo:
{
"planet_id": "1"
}

### Endpoint 3: https://1had2quone.execute-api.us-east-1.amazonaws.com/get-planet/:id

Este endpoint le permite a usted hacer un fetch de un elemento de la colección de planetas que posee nuestra Dynamo DB.

### Endpoint 4: https://1had2quone.execute-api.us-east-1.amazonaws.com/get-planets

Este endpoint le permite a usted hacer un fetch de todos elementos de la colección de planetas que posee nuestra Dynamo DB.

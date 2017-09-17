# Web Service For Selling Rocket and Components

RESTful API for selling rockets and it's components.

## Endpoints

| Method  | Endpoint          | Description                 | Data                  |
|---------+-------------------+-----------------------------+-----------------------|
| GET     | api/products      | List of products            | [{}, {}, {}]          |
| GET     | api/products/:id  | View a products             | {}                    |
| POST    | api/products      | Create a new product        | {"info": ""}          |
| PUT     | api/products/:id  | Update a product            | {"info": ""}          |
| DELETE  | api/products/:id  | Delete a product            | {"info": ""}          |

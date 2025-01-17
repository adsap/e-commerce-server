# e-commerce-server

**Getting Started**

Create .env file then copy all credentials from .envtemplate and make sure to fill in all of the credentials needed<br/>
npm run setup:test to setup test<br/>
npm run test to run test<br/>
npm run setup to setup<br/>
npm run dev to run

**Base URL**

server: https://agile-ecommerce-cms.herokuapp.com<br/>
client: https://agile-ecommerce-cms.web.app<br/>
client customer: https://agile-fox-ecommerce.web.app

---
# Products

***End Points***

POST /products<br/>
GET /products<br/>
GET /products/:id<br/>
PUT /products/:id<br/>
DELETE /products/:id

***Add***

Returns new product

* **URL**

    /products

* **Method:**

    `POST`

* **URL Params**

    None

* **Data Params**

    **Required:**
    ````
    {
      name: req.body.name,
      image_url: req.body.image_url,
      category: req.body.category,
      price: req.body.price,
      stock: req.body.stock
    }
    ````

* **Success Response:**

    * **Code:** 201 <br/>
      **Content:**
      ```
      {
        "id": "<product id>",
        "name": "<product name>",
        "image_url": "<product image url>",
        "category": "<product category>",
        "price": "<product price>",
        "stock": "<product stock>",
        "UserId": "<user id>",
        "updatedAt": "<updated date>",
        "createdAt": "<created date>"
      }
      ```
* **Error Response:**

    * **Code:** 400 <br/>
      **Content:**
      ```
      { error : "SequelizeValidationError" }
      ```
    OR
    * **Code:** 401 <br/>
      **Content:**
      ```
      message : [
        "Missing access token",
        "Invalid access token",
        "Only admin can add, update and delete product"
      ]
      ```
    OR
    * **Code:** 404 <br/>
    **Content:**
      ```
      message: [
        "User not found",
        "Product not found"
      ]
      ```
    OR
    * **Code:** 500 <br/>

* **Sample Call:**
    ```javascript
      axios({
        method: 'POST',
        url: `https://agile-ecommerce-cms.herokuapp.com/products`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name, image_url, category, price, stock
        }
      })
    ```


***Display***

Returns all products

* **URL**

    /products

* **Method:**

    `GET`

* **URL Params**

    None

* **Data Params**

    None

* **Success Response:**

    * **Code:** 200 <br/>
      **Content:**
    ```  
    [
      {
        "id": "<product id>",
        "name": "<product name>",
        "image_url": "<product image url>",
        "category": "<product category>",
        "price": "<product price>",
        "stock": "<product stock>",
        "UserId": "<user id>",
        "updatedAt": "<updated date>",
        "createdAt": "<created date>"
      },
      {
        "id": "<product id>",
        "name": "<product name>",
        "image_url": "<product image url>",
        "category": "<product category>",
        "price": "<product price>",
        "stock": "<product stock>",
        "UserId": "<user id>",
        "updatedAt": "<updated date>",
        "createdAt": "<created date>"
      }
    ]
    ```
* **Error Response:**

    * **Code:** 401 <br/>
      **Content:**
      ```
      message : [
        "Missing access token",
        "Invalid access token"
      ]
      ```
    OR
    * **Code:** 404 <br/>
    **Content:**
      ```
      message: [
        "User not found"
      ]
      ```
    OR
    * **Code:** 500 <br/>

* **Sample Call:**
    ```javascript
      axios({
        method: 'GET',
        url: 'https://agile-ecommerce-cms.herokuapp.com/products',
        headers: {
          token: localStorage.getItem('token')
        }
      })
    ```


***Detail***

Returns product by id

* **URL**

    /products/:id

* **Method:**

    `GET`

* **URL Params**

    **Required:**
    `id`

* **Data Params**

    None

* **Success Response:**

    * **Code:** 200 <br/>
      **Content:**
    ```  
    {
      "id": "<product id>",
      "name": "<product name>",
      "image_url": "<product image url>",
      "category": "<product category>",
      "price": "<product price>",
      "stock": "<product stock>",
      "UserId": "<user id>",
      "updatedAt": "<updated date>",
      "createdAt": "<created date>"
    }
    
    ```
* **Error Response:**

    * **Code:** 401 <br/>
      **Content:**
      ```
      message : [
        "Missing access token",
        "Invalid access token"
      ]
      ```
    OR
    * **Code:** 404 <br/>
    **Content:**
      ```
      message: [
        "User not found"
      ]
      ```


* **Sample Call:**
    ```javascript
      axios({
        method: 'GET',
        url: 'https://agile-ecommerce-cms.herokuapp.com/products/:id',
        headers: {
          token: localStorage.getItem('token')
        }
      })
    ```


***Update***

Returns updated product

* **URL**

    /products/:id

* **Method:**

    `PUT`

* **URL Params**

    **Required:**
    `id`

* **Data Params**

    **Required:**
    ````
    {
      name: req.body.name,
      image_url: req.body.image_url,
      category: req.body.category,
      price: req.body.price,
      stock: req.body.stock
    }
    ````

* **Success Response:**

    * **Code:** 200 <br/>
      **Content:**
    ```  
    {
      "id": "<product id>",
      "name": "<product name>",
      "image_url": "<product image url>",
      "category": "<product category>",
      "price": "<product price>",
      "stock": "<product stock>",
      "UserId": "<user id>",
      "updatedAt": "<updated date>",
      "createdAt": "<created date>"
    }
    
    ```
* **Error Response:**

    * **Code:** 400 <br/>
      **Content:**
      ```
      { error : "SequelizeValidationError" }
      ```
    OR
    * **Code:** 401 <br/>
      **Content:**
      ```
      message : [
        "Missing access token",
        "Invalid access token",
        "Only admin can add, update and delete product"
      ]
      ```
    OR
    * **Code:** 404 <br/>
    **Content:**
      ```
      message: [
        "User not found",
        "Product not found"
      ]
      ```
    OR
    * **Code:** 500


* **Sample Call:**
    ```javascript
      axios({
        method: 'PUT',
        url: 'https://agile-ecommerce-cms.herokuapp.com/products/:id',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name, image_url, category, price, stock
        }
      })
    ```


***Delete***

Returns deleted product

* **URL**

    /products/:id

* **Method:**

    `DELETE`

* **URL Params**

    **Required:**
    `id`

* **Data Params**

    None

* **Success Response:**

    * **Code:** 200 <br/>
      **Content:**
      ```
      { message : "product success to delete" }
      ```

* **Error Response:**

    * **Code:** 401 <br/>
      **Content:**
      ```
      message : [
        "Missing access token",
        "Invalid access token",
        "Only admin can add, update and delete product"
      ]
      ```
    OR
    * **Code:** 404 <br/>
      **Content:**
      ```  
      message: [
        "User not found",
        "Product not found"
      ]
      ```
    OR
    * **Code:** 500


* **Sample Call:**
    ```javascript
      axios({
        method: 'DELETE',
        url: 'https://agile-ecommerce-cms.herokuapp.com/products/:id',
        headers: {
          token: localStorage.getItem('token')
        }
      })
    ```

---
# Transactions

***End Points***

POST /transactions/:productId<br/>
GET /transactions<br/>
GET /transactions/:id<br/>
PUT /transactions/:id<br/>
DELETE /transactions/:id

***Add***

Returns new transaction

* **URL**

    /transactions/:productId

* **Method:**

    `POST`

* **URL Params**

    None

* **Data Params**

    **Required:**
    ````
    {
      ProductId: req.params.productId,
      status: req.body.status,
      quantity: req.body.quantity,
      total_price: req.body.total_price
    }
    ````

* **Success Response:**

    * **Code:** 201 <br/>
      **Content:**
      ```
      {
        "id": "<transaction id>",
        "UserId": "<user id>",
        "ProductId": "<product id>",
        "status": "<transaction status>",
        "quantity": "<transaction quantity>",
        "total_price": "<transaction total price>",
        "updatedAt": "<updated date>",
        "createdAt": "<created date>"
      }
      ```
* **Error Response:**

    * **Code:** 400 <br/>
      **Content:**
      ```
      { error : "SequelizeValidationError" }
      ```
    OR
    * **Code:** 401 <br/>
      **Content:**
      ```
      message : [
        "Missing access token",
        "Invalid access token"
      ]
      ```
    OR
    * **Code:** 404 <br/>
    **Content:**
      ```
      message: [
        "User not found",
        "Transaction not found"
      ]
      ```
    OR
    * **Code:** 500 <br/>

* **Sample Call:**
    ```javascript
      axios({
        method: 'POST',
        url: `https://agile-ecommerce-cms.herokuapp.com/transactions/:productId`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          ProductId, status, quantity, total_price
        }
      })
    ```


***Display***

Returns all transactions

* **URL**

    /transactions

* **Method:**

    `GET`

* **URL Params**

    None

* **Data Params**

    None

* **Success Response:**

    * **Code:** 200 <br/>
      **Content:**
    ```  
    [
      {
        "id": "<transaction id>",
        "UserId": "<user id>",
        "ProductId": "<product id>",
        "status": "<transaction status>",
        "quantity": "<transaction quantity>",
        "total_price": "<transaction total price>",
        "updatedAt": "<updated date>",
        "createdAt": "<created date>"
      },
      {
        "id": "<transaction id>",
        "UserId": "<user id>",
        "ProductId": "<product id>",
        "status": "<transaction status>",
        "quantity": "<transaction quantity>",
        "total_price": "<transaction total price>",
        "updatedAt": "<updated date>",
        "createdAt": "<created date>"
      }
    ]
    ```
* **Error Response:**

    * **Code:** 401 <br/>
      **Content:**
      ```
      message : [
        "Missing access token",
        "Invalid access token"
      ]
      ```
    OR
    * **Code:** 404 <br/>
    **Content:**
      ```
      message: [
        "User not found"
      ]
      ```
    OR
    * **Code:** 500 <br/>

* **Sample Call:**
    ```javascript
      axios({
        method: 'GET',
        url: 'https://agile-ecommerce-cms.herokuapp.com/transactions',
        headers: {
          token: localStorage.getItem('token')
        }
      })
    ```


***Detail***

Returns transaction by id

* **URL**

    /transactions/:id

* **Method:**

    `GET`

* **URL Params**

    **Required:**
    `id`

* **Data Params**

    None

* **Success Response:**

    * **Code:** 200 <br/>
      **Content:**
    ```  
    {
      "id": "<transaction id>",
      "UserId": "<user id>",
      "ProductId": "<product id>",
      "status": "<transaction status>",
      "quantity": "<transaction quantity>",
      "total_price": "<transaction total price>",
      "updatedAt": "<updated date>",
      "createdAt": "<created date>"
    }
    
    ```
* **Error Response:**

    * **Code:** 401 <br/>
      **Content:**
      ```
      message : [
        "Missing access token",
        "Invalid access token"
      ]
      ```
    OR
    * **Code:** 404 <br/>
    **Content:**
      ```
      message: [
        "User not found"
      ]
      ```


* **Sample Call:**
    ```javascript
      axios({
        method: 'GET',
        url: 'https://agile-ecommerce-cms.herokuapp.com/transactions/:id',
        headers: {
          token: localStorage.getItem('token')
        }
      })
    ```


***Update***

Returns updated transaction

* **URL**

    /transactions/:id

* **Method:**

    `PUT`

* **URL Params**

    **Required:**
    `id`

* **Data Params**

    **Required:**
    ````
    {
      ProductId: req.body.productId,
      status: req.body.status,
      quantity: req.body.quantity,
      total_price: req.body.total_price
    }
    ````

* **Success Response:**

    * **Code:** 200 <br/>
      **Content:**
    ```  
    {
      "id": "<transaction id>",
      "UserId": "<user id>",
      "ProductId": "<product id>",
      "status": "<transaction status>",
      "quantity": "<transaction quantity>",
      "total_price": "<transaction total price>",
      "updatedAt": "<updated date>",
      "createdAt": "<created date>"
    }
    
    ```
* **Error Response:**

    * **Code:** 400 <br/>
      **Content:**
      ```
      { error : "SequelizeValidationError" }
      ```
    OR
    * **Code:** 401 <br/>
      **Content:**
      ```
      message : [
        "Missing access token",
        "Invalid access token"
      ]
      ```
    OR
    * **Code:** 404 <br/>
    **Content:**
      ```
      message: [
        "User not found",
        "Transaction not found"
      ]
      ```
    OR
    * **Code:** 500


* **Sample Call:**
    ```javascript
      axios({
        method: 'PUT',
        url: 'https://agile-ecommerce-cms.herokuapp.com/transactions/:id',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          ProductId, status, quantity, total_price
        }
      })
    ```


***Update (Patch)***

Returns updated transaction

* **URL**

    /transactions/:id

* **Method:**

    `PATCH`

* **URL Params**

    **Required:**
    `id`

* **Data Params**

    **Required:**
    ````
    {
      quantity: req.body.quantity,
      total_price: req.body.total_price
    }
    ````

* **Success Response:**

    * **Code:** 200 <br/>
      **Content:**
    ```  
    {
      "id": "<transaction id>",
      "UserId": "<user id>",
      "ProductId": "<product id>",
      "status": "<transaction status>",
      "quantity": "<transaction quantity>",
      "total_price": "<transaction total price>",
      "updatedAt": "<updated date>",
      "createdAt": "<created date>"
    }
    
    ```
* **Error Response:**

    * **Code:** 400 <br/>
      **Content:**
      ```
      { error : "SequelizeValidationError" }
      ```
    OR
    * **Code:** 401 <br/>
      **Content:**
      ```
      message : [
        "Missing access token",
        "Invalid access token"
      ]
      ```
    OR
    * **Code:** 404 <br/>
    **Content:**
      ```
      message: [
        "User not found",
        "Transaction not found"
      ]
      ```
    OR
    * **Code:** 500


* **Sample Call:**
    ```javascript
      axios({
        method: 'PATCH',
        url: 'https://agile-ecommerce-cms.herokuapp.com/transactions/:id',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          quantity, total_price
        }
      })
    ```


***Delete***

Returns deleted transaction

* **URL**

    /transactions/:id

* **Method:**

    `DELETE`

* **URL Params**

    **Required:**
    `id`

* **Data Params**

    None

* **Success Response:**

    * **Code:** 200 <br/>
      **Content:**
      ```
      { message : "cart success to delete" }
      ```

* **Error Response:**

    * **Code:** 401 <br/>
      **Content:**
      ```
      message : [
        "Missing access token",
        "Invalid access token"
      ]
      ```
    OR
    * **Code:** 404 <br/>
      **Content:**
      ```  
      message: [
        "User not found",
        "Transaction not found"
      ]
      ```
    OR
    * **Code:** 500


* **Sample Call:**
    ```javascript
      axios({
        method: 'DELETE',
        url: 'https://agile-ecommerce-cms.herokuapp.com/transactions/:id',
        headers: {
          token: localStorage.getItem('token')
        }
      })
    ```

---
# User

***End Points***

POST /users/register<br/>
POST /users/login

***Register***

  Returns new user

* **URL**

  /users/register

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

  * **Required:**
  ````
    {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    }
  ````

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
      {
        "id": <user id>,
        "email": "<user email>",
        "password": "<user password>",
        "role": "<user role>",
        "updatedAt": "<updated date>",
        "createdAt": "<created date>"
      }
    ```

* **Error Response:**

  * **Code:** 400 <br/>
      **Content:**
      ```
      { error : "SequelizeValidationError" }
      ```
  OR
    * **Code:** 500

* **Sample Call:**

  ```javascript
    axios({
      method: 'POST',
      url: 'https://agile-ecommerce-cms.herokuapp.com/users/register',
      data: {
        email, password, role
      }
    })
  ```


***Login***

  User Login

* **URL**

  /users/login

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

  * **Required:**
  ````
    {
      email: req.body.email,
      password: req.body.password,
    }
  ````

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
      "access_token": "<access token>"
    }
    ```

* **Error Response:**

  * **Code:** 401 <br />
    **Content:** 
    ```
    message: [ "Wrong email or password" ]
    ```
  OR
  * **Code:** 404 <br />
    **Content:** 
    ```
    message: [ "Email or Password cannot be empty" ]
    ```
  OR
  * **Code:** 500

* **Sample Call:**

  ```javascript
    axios({
      method: 'POST',
      url: 'https://agile-ecommerce-cms.herokuapp.com/users/login',
      data: {
        email, password
      }
    })
  ```

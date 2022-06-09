# React Shopping cart with Redux

This is a shopping cart app where users can order products through  an online service.
The users can filter the product based on the available size, highest and lowest price. By clicking on Proceed on the left side after adding a product to the cart, the order form will pop up, requested from the user's information. Also, by clicking checkout order will store on the admin page.

![Shoppingcart](/img/ShoppingCart.png)

---
 ## Used technologies: 
- React, 
- React Redux,
- [Heroku](https://www.heroku.com)
- [MongoDB](https://www.mongodb.com/)
- [Postman](https://www.postman.com/)
- react-awesome-reveal
- react-modal

---
## Installation 
- [For animation ](https://www.npmjs.com/package/react-awesome-reveal)
```shell
npm install react-awesome-reveal --save
```

- [For modal ](https://www.npmjs.com/package/react-modal)
```shell
npm install react-modal
```

```shell
npm install nodemon globally 
```

```shell
npm install express 
body-parse mongoose shortid
```


```shell
npm install redux react-redux react-thunk
```

---
## Runing server

```shell
npm run server
```

### Postman
- [For get](http://localhost:5000/api/products)
- [For post](http://localhost:5000/api/products)


## Deployment to Heroku from mongoDB

### Steps
- **Step 1**

```shell
npm run build
```

- **Step 2**
    -   Enter these line of codes into the server.js (node.js) for production 

app.use("/", express.static(__dirname + "/build"));

app.get("/", (req, res)=>res.sendFile(__dirname + "/build(index.html"))

- **Step 3**
    - check the [localhost](http://localhost:5000/)

- **Step 4**
    [Click on this link](https://www.mongodb.com/cloud)
    - Create an account and login

    - Creates project name
        - Click on database access
        ![DatabaseAcess](/img/DatabaseAccess.png)

    - Creates  a database
        ![Database](/img/Database.png)

    - Click on **network access**
        ![Netwrok](/img/Netwrok.png)

        - Enter the information like this
        ![IPEntry](/img/IPEntry.png)
    

    - On database click on connect 
        ![connect](/img/Connect.png)

        - and connect 
        ![ConnectApplication](/img/ConnectApplication.png)
    
    - Copy the link
        ![Link](/img/Link.png)

- **Step 5**    
    - [Creates an account from heroku or login](https://id.heroku.com/login)
    - [visit this heroku cli](https://devcenter.heroku.com/articles/heroku-cli)
        - **Copy this link** 
            `brew tap heroku/brew && brew install heroku`

- **Step 6**  
    - From terminal follow these steps

     ```shell
        brew tap heroku/brew && brew install heroku
    ```

    ```shell
    heroku login 
    ```
    - You will be redirect to login pages, then login and move back to terminal 
        ![Heroku-Login](/img/Herokulogin.png)

    - Enter this on terminal
        ```shell
        heroku apps:create [name of your app] (shopping-cart)
        ```
    - Clicks on the link on your terminal 

    - **Step 7** 
        - Edit **`Package.json`**
            - At the end enter these based on the current version
            ![PackageJson](/img/PackageJson.png)

        - Create Procfile 
            - From root file, create a file **`Procfile`**
                - Enter this line **`web: node server.js`**
        - from **server.js** change the code
        ```js
            mongoose.connect(
            "mongodb://localhost/shopping-cart-db", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            });
        ```
        to 
        ```js
            mongoose.connect(
            process.env.MONGODB_URL ||
            "mongodb://localhost/shopping-cart-db", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            });
        ```


    - **Step 7**    
        - From heroku click on the created app

            - follow this 
             
            ![Heroku](/img/Heroku.png)

            - Copy this link created in **`step 4`** under copy link 

            ![MongoHeroko](/img/MongoHeroku.png)

            - Then add NODE_MODULES_CACHE and set value to false

            ![Node_nodule_cache](/img/NodeModule.png)

## Web for this package
- https://femi-shopping-cart.herokuapp.com/

---

## Acknowledgement 
- Bassir Jafarzadeh (INSTRUCTOR)
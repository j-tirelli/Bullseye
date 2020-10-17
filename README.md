# recommendedProducts
Main repository for recommended products module for FEC project

On load, this repository opens some sample data for recommended products for a Target web app. When running through the included Express server and properly seeded with data, it will query a MongoDB database (created through the Mongoose ODM) for specific product departments.

To properly start up this service, run the following commands from the root directory:
- `npm install`
- `npm run seed`

The following commands should be run from their own terminals to render the app:
- `npm run build`
- `npm start`


**Data Generation**
```
npm run data 1000 - Create a csv file at data/example_data.js that is 1000 lines long and filled with seed data.
```

## API Resources

**GET Requests**
```
GET: /products/id/1 - Get all products (by department) related to product with id of 1.
```
```
GET: /products/dept/Sports - Get all related products by the department Sports.
```
```
GET: /products/brand/Tommy%20Hilfiger - Get all related products by the brandname Tommy Hilfiger.
```
```
GET: /products/price/?min=1&min=2 - Get all with a price between 1 amd 2 dollars.
```
```
GET: /products/id/product/1 - Get all information about the product by id 1.
```
**POST Request**
```
POST: /products/id/product/1 - Create a new product
req.body (JSON)
{
    "title": "Incredible Freshest Computer",
    "brand": "Tramp, Gutkowsky and Nixon",
    "department": "Work",
    "price": 98.27,
    "imageUrl": "https://twzkraus-fec-images.s3-us-west-1.amazonaws.com/target-images/22.jpg"
}
```
**PUT Request**
```
PUT: /products/id/product/1 - Update an existing product.
req.body (JSON)
{
    "title": "Incredibly Fresh Computer",
    "brand": "Tromp, Gutkowski and Gibson",
    "department": "Home",
    "price": 27.98,
    "imageUrl": "https://twzkraus-fec-images.s3-us-west-1.amazonaws.com/target-images/8.jpg"
}
```
**DELETE Request**
```
DELETE: /products/id/product/1 - Delete an existing product.
```

# Bullseye
Bullseye is an ecommerce home-goods single page application that was designed handle a high amount of traffic through horizontal scaling. The user interface allows users to peruse items for sale and get recommendations from similiar items as well as review products.


## Team Members

  - [Owen Wexler](https://www.linkedin.com/in/owen-wexler/)
  - [Brian Hauck](https://www.linkedin.com/in/brian-hauck-a554ba1bb/)
  - [John Tirelli](https://www.linkedin.com/in/john-tirelli/)
  - [Luke Eastman](http://linkedin.com/in/luke-eastman/)

## Table of Contents

1. [Usage](#usage)
1. [Requirements](#requirements)
1. [Installation](#installation)
1. [Scripts](#scripts)
1. [Resources](#resources)

## Usage
> After installation, use npm start to run the server and navigate to htttp://localhost:<your port> (default: 3000)

## Requirements

- dayjs
- express
- markdown-it
- mongo-sanitize
- mongoose
- react
- react-dom
- socket.io
- styled-components

### Installation

From within the root directory:

```sh
1. npm install
1. npm start
```

## Scripts
From within the root folder:
- npm run build - run webpack to create a bundle.js file.
- npm run data - Generate a csv with fake data for importing into database.
- npm run test - Test front end through jest.
- npm start - Start the webserver.

## Resources

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

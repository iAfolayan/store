[![Build Status](https://travis-ci.org/iAfolayan/store-manager.svg?branch=develop)](https://travis-ci.org/iAfolayan/store-manager)
[![Maintainability](https://api.codeclimate.com/v1/badges/142b219a88134673ca9e/maintainability)](https://codeclimate.com/github/iAfolayan/store-manager/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/iAfolayan/store-manager/badge.svg?branch=develop)](https://coveralls.io/github/iAfolayan/store-manager?branch=develop)

# Store Manager

# Description
Store Manager is a web application that helps store owners manage sales and product inventory records.

# Table of Contents
* <a href="#Technologies">Technologies</a>
* <a href="#Features">Features</a>
* <a href="#Installations">Installation</a>
        
# Technologies
Currently,
  - HyperText Mark-up Language (HTML) 
  - Cascade Style Sheet (CSS)
  - Vanilla Javascript
  - PostgreSQL Database(raw SQL): This will be implemented later.
  - Nodejs (Express framework)
  
# Pivotal Tracker
Store manager app project is broken down into small task with pivotal tracker board. The link to the relevant Pivoltal tracker board is (https://www.pivotaltracker.com/n/projects/2203755)

# API Enpoint
API Endpoints is hosted at (https://store-manager-iafolayan.herokuapp.com/api/v1/)

# UI Templates
The application is hosted online on gh-pages with (https://iafolayan.github.io/store-manager/ui/)

# API Documentation
to be added later

# Features
<ul>
<li>Login</li>
<li>Products</li>
<li>Sales</li>
<li>Users</li>
</ul>

# Getting Started
# Installation
- Get the folder on your system by cloning (git clone https://github.com/iAfolayan/store-manager.git)
- npm install
- run npm run start-dev then navigate to localhost:4000 on POSTMAN
- install POSTMAN app (https://www.getpostman.com/apps)
# API Endpoint Route
<table>
  <tr>
    <td>HTTP VERB</td>
    <td>ENDPOINT</td>
    <td>TASK</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/v1/products</td>
    <td>Get all available products</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/v1/products/:productId</td>
    <td>Fetch a single product record</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/v1/sales/</td>
    <td>Get all sale records</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/v1/sales/saleId</td>
    <td>Fetch a single sale record</td>
  </tr>
   <tr>
    <td>GET</td>
    <td>/api/v1/sales/seller/staffid</td>
    <td>Fetch all sale records for a single attendant</td>
  </tr>
   <tr>
    <td>GET</td>
    <td>/api/v1/users</td>
    <td>Fetch all available users</td>
  </tr>
    <tr>
    <td>POST</td>
    <td>/api/v1/products/</td>
    <td>Create a Product</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>api/v1/sales/</td>
    <td>Create a sale order</td>
  </tr>
    <tr>
    <td>POST</td>
    <td>/api/v1/auth/signup</td>
    <td>Register a user</td>
  </tr>
   <tr>
    <td>POST</td>
    <td>/api/v1/auth/login</td>
    <td>Login a user</td>
  </tr>
   <tr>
    <td>PUT</td>
    <td>/api/v1/products/productId</td>
    <td>Update a single product return <em>success/error</em> as status</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>/api/v1/products/:productId</td>
    <td>Delete a product</td>
  </tr>
  </table>
  
# Author
Afolayan Isaiah

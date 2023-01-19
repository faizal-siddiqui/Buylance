## Complete till FRIDAY NIGHT I will update the further work after that.

1. Login Page / SignUp Page - **Sama sarun reddy**

   - using (firebase)
   - using api also

2. Home Page - **karmit Verma**

   - Navbar
   - Other Sections
   - Footer

3. Category Page - **Sama sarun reddy**

   - images grid
   - navbar and footer (Re use from Karmit Components)

4. Products Page with filter - **Faizal**

   - products cards
   - filter functions
   - navbar and footer (Re use from Karmit Components)

5. Products Details Page - **Faizal**

   - products details
   - ratings and reviews
   - navbar and footer (Re use from Karmit Components)

6. Cart Page - **Avinash**

   - create Navbar (different from homepage)
   - create footer (different from homepage)
   - handle cart data (crud)

7. Address Page - **Rishu raj**

   - Used Navbar (ceated by Avinash)
   - create footer (ceated by Avinash)
   - handle address selection

8. Payment Page - **Rishu Raj**

   - Used Navbar (ceated by Avinash)
   - create footer (ceated by Avinash)
   - handle payment options

9. Order Summary Page - **Karmit Verma**

   - list of products that are purchased (Trach Orders)
   - navbar and footer (Re use from Karmit Components)

10. Admin Login - **Sama sarun reddy**

    - create some different email and password that can only be access by Admin

11. Admin Dashboard - **karmit**

    - Create a dashboard like this present on this link [Dashboard](<"https://www.figma.com/file/HWqetPpkRqfPU2uCjHeL3x/Krait-UI-Admin-Dashboard-(Community)?t=zn6kVpCPy3vjZBFr-0>)

    - Leave proper variables wherever the values are dynamic

12. Crud Page - **Avinash**
    - Ui
    - Add the product to products api
    - Delete the product from products api
    - Update the product from products api
    - Get the ordered products from orderedProducts key in api

**Extras**

1. Handle the users carts for different users in admin Panel
2. Every user have their separate user id and password as well as carts

## Development Details

Q1. How many api's we ae going to use?

- Products api (For all products)

  ```
  {
   carause: false,
   brand: "Louis Philippe",
   name: "Men Navy Blue Polo Collar T-shirt",
   rating: {
      star: 4.6,
      count: 1301
   },
   price: 1120,
   mrp: 1899,
   discount: 41,
   sizes: "M",
   qty: 1,
   productDetails: "Navy Blue solid T-shirt, has a polo collar, and short sleeves",
   size: "The model (height 6') is wearing a size M",
   material: "Material: Cotton Machine Wash",
   category: "tshirts",
   type: "men",
   specification: {
      fabric: "Polyster",
      fit: "RegularFit",
      length: "Regular",
      mainTrend: "New Basics"
  },
  "images": [
   "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14047672/2021/5/17/4829edea-d10c-48bd-b035-a6763cdd790a1621252467629-Louis-Philippe-Men-Navy-Blue-Solid-Polo-Collar-T-shirt-71816-3.jpg",
   "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14047672/2021/5/17/c1fd89a5-6364-4d0b-bde4-fcc0b7ddd1571621252467672-Louis-Philippe-Men-Navy-Blue-Solid-Polo-Collar-T-shirt-71816-1.jpg",
   "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14047672/2021/5/17/d65b4316-e4ba-4ae5-9c37-6bff1035ed3a1621252467611-Louis-Philippe-Men-Navy-Blue-Solid-Polo-Collar-T-shirt-71816-4.jpg"
  ],
  "reviews": [],
  "id": 21
  }
  ```

  - Profile api (For all the products)

  ```
    {
       id: 2,
       name: "Amaan Sid",
       email: "amaansidp@gmail.com",
       mobile: 7867789867,
       gender: "Male",
       birthDate: "23-09-2002",
       location: "Delhi",
       cardDetails: "89878676565441",
       password: "Aman!234",
       cart: [
          .....all the products that we have added to the cart similar to the products api
      ],
      orderedProducts: [
         ......all the products that we have moved after payment
      ]
    }

  ```

  - cart key and orderedProducts key
    - not directly but we have to patch the data inside cart by using logics

## Thinking

1. How many Pages do we need ?

- 11 Pages
  - Login / SignUp
  - Home
  - Products Category
  - Products
  - Products Details
  - Cart
  - Address
  - Payment
  - Order Summary
  - Admin Dashboard
  - Admin Crud

2. How many Components do we need and what are those ?
   // Guys edit this part make your own components so that we can reuse it

- ## Home
  -
- ## Products Category
  -
- ## Products
  -
- Products Details
- Cart
- Address
- Payment
- Order Summary
- Admin Dashboard
- Admin Crud

3. How many API's do we need ?

   - Website

     - POST /profile
     - GET /profile

     - GET /products

     - GET /products/[id]
     - PATCH /products/[id]

     - (POST)-> PATCH / profile[cart]
     - PATCH / profile[cart]

     - PATCH / profile[orderedProducts]

   - admin

     - GET /profile

     - GET /products
     - POST /products

     - GET /products/[id]
     - PATCH /products/[id]
     - DELETE /products/[id]

     - POST / profile[cart]
     - PATCH / profile[cart]

<p>
   <img src="https://user-images.githubusercontent.com/112858862/212770392-86ea4911-6478-4c94-8764-c20bade47547.png" />
</p>

4. How to get Started ?

- (1): Create Backend Data
- (2): Create Redux Logic
- (3): Create TSX Component

- [Create backend Data](./my-app/db.json)

- Create Redux
  - How many reducers do we need ? : 2
  - How many store do we need ? : 1
- create all the files

        
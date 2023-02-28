
# BUYLANCE.COM
An ecommerce platform that provides user-friendly interface that enables customers to browse products, add them to their cart, and checkout seamlessly. It also includes admin panel where admin can track and manage the products as well as users.


## Tech Stacks Used
   - Typescript
   - React Redux
   - Redux thunk
   - Chart Js
   - Axios
   - CSS
   - Chakra Ui (External Css)
   - Chakra Icons (External Icons)
   - React Icons (External Icons)

## Pages
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
  - Admin Products Manage Page

## Key Responsibilities
 
1. Home Page - **karmit Verma**

   - Navbar
   - Other Sections
   - Footer
- ## Our Landing Page

![Screenshot_20230123_125607](https://user-images.githubusercontent.com/103635770/213993662-2adeea46-487c-4ea2-9e83-d3c5fa31464d.png)
-

![Screenshot_20230123_125648](https://user-images.githubusercontent.com/103635770/213993958-68ed97cc-e392-4ec9-886f-a9e7b04fb04d.png)

2. Login Page / SignUp Page - **Sama sarun reddy**

   - using (firebase)
   - using api also
- ## Signup

![Screenshot_20230123_125941](https://user-images.githubusercontent.com/103635770/213993747-9ff62781-0f66-40ae-ba39-de2d486a413b.png)

## Login 

![Screenshot_20230123_010003](https://user-images.githubusercontent.com/103635770/213993780-7e7a4e2d-0a7f-49a6-9a56-2be3a3bc8afa.png)


3. Products Page with filter - **Faizal**

   - products cards
   - filter functions
   - navbar and footer (Re use from Karmit Components)
## Products Page
![Screenshot_20230123_011246](https://user-images.githubusercontent.com/103635770/213994110-4bc177ce-eb64-472f-898c-390d80c85103.png)


4. Category Page - **Sama sarun reddy**

   - images grid
   - navbar and footer (Re use from Karmit Components)
## Category Page
![Screenshot_20230123_011848](https://user-images.githubusercontent.com/103635770/213994151-eb140b9e-b85a-4bf2-ad93-e4bd2d5c699c.png)

5. Products Details Page - **Faizal**

   - products details
   - ratings and reviews
   - navbar and footer (Re use from Karmit Components)
##  Products Details Page
![Screenshot_20230123_011522](https://user-images.githubusercontent.com/103635770/213994187-985bdd33-d5c6-46c5-8f4a-df2d0654616f.png)

6. Cart Page - **Avinash**

   - create Navbar (different from homepage)
   - create footer (different from homepage)
   - handle cart data (crud)
   ## Cart Page
   ![Screenshot_20230123_011622](https://user-images.githubusercontent.com/103635770/213994217-286bf508-746b-4262-a42e-e8b9167ef583.png)


7. Address Page - **Rishu raj**

   - Used Navbar (ceated by Avinash)
   - create footer (ceated by Avinash)
   - handle address selection
   ## Address Page
   ![Screenshot_20230123_011700](https://user-images.githubusercontent.com/103635770/213994253-3911d7e3-65ee-497e-b25c-13e8a25caadc.png)


8. Payment Page - **Avinash Singh**

   - Used Navbar (ceated by Avinash)
   - create footer (ceated by Avinash)
   - handle payment options
 ## Payment Page
![Screenshot_20230123_011724](https://user-images.githubusercontent.com/103635770/213994328-a14c7054-46aa-4944-a836-0f18dbdf0a53.png)

9. Order Summary Page - **Karmit Verma**

   - list of products that are purchased (Trach Orders)
   - navbar and footer (Re use from Karmit Components)
   ## Order Summary Page
![Screenshot_20230123_011753](https://user-images.githubusercontent.com/103635770/213994387-3ee2caa8-01f2-4b12-ac9c-38edf2dd900d.png)

10. Admin Login - **Sama sarun reddy**

    - create some different email and password that can only be access by Admin

11. Admin Dashboard - **Faizal**

    - Create a dashboard like this present on this link [Dashboard](<"https://www.figma.com/file/HWqetPpkRqfPU2uCjHeL3x/Krait-UI-Admin-Dashboard-(Community)?t=zn6kVpCPy3vjZBFr-0>)

    - Leave proper variables wherever the values are dynamic
   ##  Admin Dashboard 
  ![Screenshot_20230123_011942](https://user-images.githubusercontent.com/103635770/213994453-1115a604-5d76-49a7-893a-dd0fd3f9adf7.png)

   ## User Details from Admin Site
   
![Screenshot_20230123_012005](https://user-images.githubusercontent.com/103635770/213994601-6cad9676-d614-4593-b854-ac31865c8e01.png)

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

``` {
      "delivered": false,
      "brand": "SELECTED",
      "name": "Men White Printed Round Neck Organic Cotton T-shirt",
      "rating": {
        "star": 4.2,
        "count": 21
      },
      "price": 649,
      "mrp": 1299,
      "discount": 50,
      "sizes": "M",
      "qty": 1,
      "productDetails": "White printed T-shirt, has a round neck, and short sleeves",
      "size": "The model (height 6') is wearing a size M",
      "material": "Material: 100% organic cotton Machine Wash",
      "category": "tshirts",
      "type": "men",
      "specification": {
        "fabric": "Organic Cotton",
        "fit": "Regular Fit",
        "length": "Regular",
        "mainTrend": "Graphic Print Others"
      },
      "images": [
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13234038/2021/3/1/0d95beec-0505-4689-9188-50bc5fc01dce1614593973198-SELECTED-Men-Tshirts-6521614593971549-4.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13234038/2021/3/1/15b6af74-ade1-40c2-942b-16e5326bdf0a1614593973245-SELECTED-Men-Tshirts-6521614593971549-2.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13234038/2021/3/1/226ecd5f-e452-4fcb-944a-17188112c30a1614593973270-SELECTED-Men-Tshirts-6521614593971549-1.jpg"
      ],
      "reviews": [],
      "id": 33
    }```

  - Profile api (For all the products)

  ```
    {
      "id": 16743830916890,
      "name": "Faizal Siddiqui",
      "email": "faizalsid123@gmail.com",
      "mobile": 0,
      "gender": "",
      "birthDate": "",
      "location": {
        "street": "",
        "city": "",
        "state": "",
        "postal_code": "",
        "country": "",
        "social": "",
        "email": ""
      },
      "cardDetails": "",
      "password": "Faizal@123",
      "cart": [],
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


# Admin Login Creds
Email: faizalsid123@gmail.com
Password: Faizal@123


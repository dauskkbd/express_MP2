const exp = require("express");
const laptop_cards = require("./laptop_lists");
const mobile_cards = require("./mobile_phone_lists");
const accessory_cards = require("./accessory_lists");
const cors = require("cors");
const app = exp();

app.use(cors());
app.use(exp.json());

// Temporary database
const lptp = laptop_cards.laptops;
const mblphn = mobile_cards.mobilePhone;
const accssry = accessory_cards.accessories;
let new_user_id = 0;

//  user_carts
var all_user_carts = new Object();

//  Sample hardcoded data
//    - Has 3 users
//    - These ID's should be STRING!
//        54136
//        42789
//        12695
//        42919

all_user_carts["54136"] = [99, 3, 44];
all_user_carts["42789"] = [88];
all_user_carts["12695"] = [];
all_user_carts["42919"] = [];

//API
//for accessories

app.get("/api/getcart/", (req, res) => {
  //  get user id
  //  check user_cart for user ID's cart
  //  return data
});

app.get("/api/addtocart/:user_id/:product_id", (req, res) => {
  //input

  //  Input parameters:
  //    user_id       : integer
  //    producrt_id   : integer

  //  Sample:
  //    <hostURL>/api/addtocart2/14/5543

  //  Output
  //    response_flag : integer

  console.log("hello"); // process
  let success_flag = 0;
  let user_id;
  let current_cart;
  //  get user id
  req.params.user_id;
  user_id = req.params.user_id;
  //  get product id
  //  add product ID to user's cart
  user_carts[user_id] = current_cart;

  //  return

  res.send(success_flag); // output
});

app.get("/api/addtocart2/", (req, res) => {
  //  Input parameters:
  //    user_id       : integer
  //    product_id    : integer

  //  Sample:
  //    <hostURL>/api/addtocart2/?user_id=14&product_id=5543

  //  Output
  //    response_flag : integer

  //===========================
  //  0.
  let success_flag = 200;

  //  1. Get parameters
  //    a. User ID
  //    b. Product ID

  const user_id = Number(req.query.user_id);
  const product_id = Number(req.query.product_id);
  let user_cart;

  if (all_user_carts[user_id] === undefined) {
    all_user_carts[new_user_id] = [];
    user_cart = all_user_carts[new_user_id];
    user_cart.push(product_id);
    new_user_id += 1;
    console.log("it used the if statement");
    console.log("user id: " + new_user_id + "product id: " + product_id);
  } else {
    user_cart = all_user_carts[user_id];
    user_cart.push(product_id);
    console.log("it used the else statement");
    console.log("user id: " + user_id + "product id: " + product_id);
  }

  console.log("user_cart", user_cart);

  /*
    [DJ]
      Learn: how to know if some thing is "undefined"
        - string comparison?
        - some
  */
  //let user_cart = [];
  // let user_cart = all_user_carts[user_id];

  // user_cart.push(product_id);

  // console.log("user id: " + user_id + "product id: " + product_id);

  //  2. Add product ID to user's cart
  //    a. Append to array?
  //      -or-
  //    b. Add to associative array?

  //  3. Return success flag

  res.send(success_flag); // output
});

app.get("/api/carts/:user_id/", (req, res) => {
  let user_id = Number(req.params.user_id);
  let product_id = Number(req.params.product_id);
  user_cart = all_user_carts[user_id];
  user_cart.push(product_id);
  console.log("user_cart: " + user_cart);
  res.send("Hello");
  console.log("this was sent?");
  //  1. get parameters
  //  2. search all_user_cart
  //  3.

  // last. return a specific cart array

  // for (let i = 0; i < lptp.length; i++) {
  //   if (lptp[i].id == Number(req.params.user_id)) {
  //     laptop = lptp[i];
  //     break;
  //   }
  // }
  // if (laptop) {
  //   res.send(laptop);
  // }
});

app.get("/api/accessory/", (req, res) => {
  res.send(accssry);
});

app.get("/api/accessory/:id", (req, res) => {
  let accessory = false;
  for (let i = 0; i < accssry.length; i++) {
    if (accssry[i].id == Number(req.params.id)) {
      accessory = accssry[i];
      break;
    }
  }
  if (accessory) {
    res.send(accessory);
  }
});

//for mobile phones
app.get("/api/mobile/", (req, res) => {
  res.send(mblphn);
});

app.get("/api/mobile/:id", (req, res) => {
  let mobile = false;
  for (let i = 0; i < mblphn.length; i++) {
    if (mblphn[i].id == Number(req.params.id)) {
      mobile = mblphn[i];
      break;
    }
  }
  if (mobile) {
    res.send(mobile);
  }
});

app.get("/api/mobile/viewCart/:id", (req, res) => {
  let mobile = false;
  for (let i = 0; i < mblphn.length; i++) {
    if (mblphn[i].id == Number(req.params.id)) {
      mobile = mblphn[i];
      break;
    }
  }
  if (mobile) {
    res.send(mobile);
  }
});

app.get("/api/mobile/product/:manufacturer", (req, res) => {
  let mobile = [];
  for (let i = 0; i < mblphn.length; i++) {
    if (mblphn[i].product.manufacturer == req.params.manufacturer) {
      mobile.push(mblphn[i]);
    }
  }
  if (mobile) {
    res.send(mobile);
  }
});

//for laptops
app.get("/api/laptops/", (req, res) => {
  res.send(lptp);
});

app.get("/api/laptops/:id", (req, res) => {
  let laptop = false;
  for (let i = 0; i < lptp.length; i++) {
    if (lptp[i].id == Number(req.params.id)) {
      laptop = lptp[i];
      break;
    }
  }
  if (laptop) {
    res.send(laptop);
  }
});

app.get("/api/laptops/viewCart/:id", (req, res) => {
  let laptop = false;
  for (let i = 0; i < lptp.length; i++) {
    if (lptp[i].id == Number(req.params.id)) {
      laptop = lptp[i];
      break;
    }
  }
  if (laptop) {
    res.send(laptop);
  }
});

app.get("/api/laptops/gpu/:term", (req, res) => {
  let laptop = [];
  for (let i = 0; i < lptp.length; i++) {
    if (lptp[i].graphicsCard.code == req.params.term) {
      laptop.push(lptp[i]);
    }
  }
  if (laptop) {
    res.send(laptop);
  }
});

let port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("[?????] Server is running on port " + port);
});

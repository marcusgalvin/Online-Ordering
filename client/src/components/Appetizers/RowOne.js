// import React from "react";
import AddToCart from "./Cart/AddToCart";

// import OrderDetails from "./Appetizers/OrderDetails";

import React, { Component } from "react";
import { render } from "react-dom";
// import "./style.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

import Products from "./Products";

//declare all menu products
const products = [
  {
    id: 1,
    name: "Fresh Rolls",
    description:
      "Rice paperwrap, shrimp, noodles,lettuce, cucumber, carrots, basil leaves, beansprouts, and,cilantro",
    img:
      "https://whiteonricecouple.com/recipe/images/how-to-roll-spring-rolls-recipes-485-1.jpg",
    price: 5.95
  },

  {
    id: 2,
    name: "Sticky Wings (8)",
    description:
      "Fried, bone-in chicken wings sautéed in sticky sweet chili sauce and topped with fresh scallions.",
    img:
      "https://www.kitchensanctuary.com/wp-content/uploads/2016/06/Crispy-Chicken-Wings-with-Sticky-Asian-Glaze-wide-FS.jpg",
    price: 8.95
  },

  {
    id: 3,
    name: "House Made Gyoza (6)",
    description:
      "Pork, Egg noodle, chicken, bamboo shoots, water chestnuts and black mushroom, crushed garlic.",
    img:
      "http://www.pbs.org/food/wp-content/blogs.dir/2/files/2015/12/chicken-mushroom-gyoza-1.jpg",
    price: 8.95
  },

  {
    id: 4,
    name: "Seared Tuna Salad",
    description:
      "Seared Atlantic tuna over a bead of fresh greens, raddishes, carrots, and tomatos topped with ginger dressing.",
    img:
      "https://kitchenconfidante.com/wp-content/uploads/2013/05/Seared-Ahi-Tuna-Salad-Kitchen-Confidante-5-EDIT-620x580.jpg",
    price: 10.95
  },

  {
    id: 5,
    name: "Crab Rangoons",
    description:
      "Six rangoons filled with cream cheese, crabmeat, green onion and cilantro.",
    img:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/ec459e2e-bd90-48b5-ba68-92c47c7afbb6/4c511dee-e6a0-4931-9675-093462e23baa/640x360/match/image.jpg",
    price: 7.95
  }
];
//function to place an order via email - not finished
function order(product) {
  console.log(products[0]);
  console.log(product.price);
}

//menu component
class RowOne extends Component {
  constructor() {
    super();
    //setting the state with one EMPTY product's object
    this.state = {
      name: "React",
      cart: [
        {
          id: "",
          name: "",
          description:
            "",
          img:
            "",
          price: "",
          units: ""

        }
      ]
    };
  }





  //handle addFunc function to recive a product into cart
  handleAddFunc(product) {
    console.log(product.price)
    //find out if selected product is already in cart
    //find index, or filter works for this
    //with filter, if there is a match we will get the entire object so filter is better

    //filter thru product and see if the id's match
    const existingProduct = this.state.cart.filter(p => p.id === product.id);

    //if this product exisits increase the units or PRICE(in progress) in cart, if lenghts is greater than 0 it already is in cart so...
    //FILTER always returns array
    if (existingProduct.length > 0) {
      //filter out all products which are not = to the exisiting product(product.id)
      //basically will get all the products besides this one
      //withoutExisitngProduct is basically = to all products inside the cart

      //filter out all products that are not equal to product.id,
      //we will get the products expect the passed in product

      const CartWithoutExistingProduct = this.state.cart.filter(
        p => p.id !== product.id
      );



      //this is what gets updated onclick
      const updatedProduct = {
        //bring in all keys of exisiting product
        ...existingProduct[0],
        //but update the units and price
        units: existingProduct[0].units + product.units,
        price: existingProduct[0].units * product.price,
        // total: existingProduct[0].price
      };

      console.log(existingProduct[0].units)
      console.log(existingProduct)
      // console.log('total', existingProduct[0].total)




      this.setState({
        cart: [...CartWithoutExistingProduct, updatedProduct]
      });
    } else {
      //if it doesnt exiist append the new product to the cart
      this.setState({
        cart: [...this.state.cart, product]
      });
    }



  }

  orderProduct(updatedProduct, existingProduct) {
    // console.log(updatedProduct[0].price)
    // for (var i = 1; i < existingProduct.length; i++) {
    //   console.log(existingProduct)
    // }
  }

  // tallyPrice(product) {
  //   var tally = product.price[0] * product.price[1];
  //   console.log(tally);
  // }

  render() {

    return (
      <main className="pa3 pa5-ns flex flex-wrap">
        <div className="finishedCart">
          {/* redner cart state in a unordered list, then map the cart state */}
          <h2>Your Cart</h2>

          <ul>
            {/* map thru cart and render specific items */}
            {this.state.cart.map(c => (
              <li>
                {c.name} | amt: {c.units} | ${c.price} | {c.total}
              </li>
            ))}
          </ul>
          <div>
            {" "}
            <Button className="cartButton" onClick={this.orderProduct.bind(this)}>Order</Button>
          </div>
        </div>

        {/* products map */}
        <div className="flexcontainer">
          {/* key is the key that is p.id, spread rest of array, this redners products */}
          {products.map(p => (
            <Products
              key={p.id}
              {...p}
              /* pass handleAddFunc into addFunc, but use this keyword, must use Bind, bind the context of THIS to whatever passes in bind() */

              addFunc={this.handleAddFunc.bind(this)}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default RowOne;

// import {
//   Card,
//   CardImg,
//   CardText,
//   CardBody,
//   CardTitle,
//   CardSubtitle,
//   Button
// } from "reactstrap";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// function addedToCart() {
//   console.log("cart");
//   console.log(freshRolls);
//   {
//     /* <AddToCart freshRoll={freshRolls} />; */
//   }
// }

// var freshRolls =
//   "Rice,paper,wrap,shrimp,noodles,lettuce,cucumber,carrots,basil,leaves,beansprouts,and,cilantro";

// const RowOne = props => {
//   return (
//     <div className="flexcontainer">
//       {/* fresh roll card */}
//       <Card className="cards" id="freshRolls">
//         <CardImg
//           top
//           width="100%"
//           className="pixles"
//           src="https://whiteonricecouple.com/recipe/images/how-to-roll-spring-rolls-recipes-485-1.jpg"
//           alt="Card image cap"
//         />
//         <CardBody>
//           <CardTitle>Fresh Rolls (2)</CardTitle>
//           <CardSubtitle>$4.95</CardSubtitle>
//           <CardText>{freshRolls}</CardText>

//           <Button onClick={addedToCart}>Order</Button>
//         </CardBody>
//       </Card>
//       {/* sticky wings card */}
//       <Card className="cards">
//         <CardImg
//           top
//           width="100%"
//           className="pixles"
//           src="https://www.kitchensanctuary.com/wp-content/uploads/2016/06/Crispy-Chicken-Wings-with-Sticky-Asian-Glaze-wide-FS.jpg"
//           alt="Card image cap"
//         />
//         <CardBody>
//           <CardTitle>Sticky Wings</CardTitle>
//           <CardSubtitle>$7.95</CardSubtitle>
//           <CardSubtitle className="special">Chef Special*</CardSubtitle>

//           <CardText>
//             Eight fried chicken wings sautéed in sticky sweet chili sauce.
//           </CardText>
//           <Button>Order</Button>
//         </CardBody>
//       </Card>
//       {/* gyoza card */}
//       <Card className="cards">
//         <CardImg
//           top
//           width="100%"
//           className="pixles"
//           src="http://www.pbs.org/food/wp-content/blogs.dir/2/files/2015/12/chicken-mushroom-gyoza-1.jpg"
//           alt="Card image cap"
//         />
//         <CardBody>
//           <CardTitle>House Made Gyoza (6)</CardTitle>
//           <CardSubtitle>$5.95</CardSubtitle>
//           <CardText>
//             Pork, Egg noodle, chicken, bamboo shoots, water chestnuts and black
//             mushroom, crushed garlic.
//           </CardText>
//           <Button>Order</Button>
//         </CardBody>
//       </Card>

//       <div>
//         <p>animals list</p>
//         <AddToCart freshRoll={freshRolls} />
//       </div>
//     </div>
//   );
// };

// export default RowOne;

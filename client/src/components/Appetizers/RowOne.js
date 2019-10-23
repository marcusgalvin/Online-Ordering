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

const products = [
  {
    id: 1,
    name: "Fresh Rolls",
    description:
      "Rice paperwrap, shrimp, noodles,lettuce, cucumber, carrots, basil leaves, beansprouts, and,cilantro",
    img:
      "https://whiteonricecouple.com/recipe/images/how-to-roll-spring-rolls-recipes-485-1.jpg",
    price: "$" + 5.95
  },

  {
    id: 2,
    name: "Sticky Wings (8)",
    description:
      "Fried, bone-in chicken wings sautéed in sticky sweet chili sauce and topped with fresh scallions.",
    img:
      "https://www.kitchensanctuary.com/wp-content/uploads/2016/06/Crispy-Chicken-Wings-with-Sticky-Asian-Glaze-wide-FS.jpg",
    price: "$" + 8.95
  },

  {
    id: 3,
    name: "House Made Gyoza (6)",
    description:
      "Pork, Egg noodle, chicken, bamboo shoots, water chestnuts and black mushroom, crushed garlic.",
    img:
      "http://www.pbs.org/food/wp-content/blogs.dir/2/files/2015/12/chicken-mushroom-gyoza-1.jpg",
    price: "$" + 8.95
  },

  {
    id: 4,
    name: "Seared Tuna Salad",
    description:
      "Seared Atlantic tuna over a bead of fresh greens, raddishes, carrots, and tomatos topped with ginger dressing.",
    img:
      "https://kitchenconfidante.com/wp-content/uploads/2013/05/Seared-Ahi-Tuna-Salad-Kitchen-Confidante-5-EDIT-620x580.jpg",
    price: "$" + 10.95
  },

  {
    id: 5,
    name: "Crab Rangoons",
    description:
      "Six rangoons filled with cream cheese, crabmeat, green onion and cilantro.",
    img:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/ec459e2e-bd90-48b5-ba68-92c47c7afbb6/4c511dee-e6a0-4931-9675-093462e23baa/640x360/match/image.jpg",
    price: "$" + 7.95
  }
];

class RowOne extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      cart: [
        {
          id: 4,
          // name: "Seared Tuna Salad",
          description:
            "Seared Atlantic tuna over a bead of fresh greens, topped with ginger dressing.",
          img:
            "https://kitchenconfidante.com/wp-content/uploads/2013/05/Seared-Ahi-Tuna-Salad-Kitchen-Confidante-5-EDIT-620x580.jpg",
          price: 100
          // units: 0
        }
      ]
    };
  }

  handleAddFunc(product) {
    const existingProduct = this.state.cart.filter(p => p.id === product.id);

    if (existingProduct.length > 0) {
      const withoutExistingProduct = this.state.cart.filter(
        p => p.id !== product.id
      );
      const updatedUnitsProduct = {
        ...existingProduct[0],
        units: existingProduct[0].units + product.units
      };

      this.setState({
        cart: [...withoutExistingProduct, updatedUnitsProduct]
      });
    } else {
      this.setState({
        cart: [...this.state.cart, product]
      });
    }
  }

  order(product) {
    console.log(this.name);
  }

  render() {
    return (
      <main className="pa3 pa5-ns flex flex-wrap">
        <div className="finishedCart">
          <h2>Your Cart</h2>
          <ul>
            {this.state.cart.map(c => (
              <li>
                {c.name} | amt: {c.units} | {c.price}
              </li>
            ))}
          </ul>
          <div>
            {" "}
            <Button>Order</Button>
          </div>
        </div>
        <div className="flexcontainer">
          {products.map(p => (
            <Products
              key={p.id}
              {...p}
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

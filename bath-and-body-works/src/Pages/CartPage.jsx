import { Alert, Center, Link, Button, Text, AlertIcon } from "@chakra-ui/react";
import "./CartPage.css";
import { CalendarIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

let styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const CartPage = () => {
  let data = useSelector((s) => s.products);
  let [state, setstate] = useState(0);
  let [coupons, setcoupons] = useState(0);
  let [total, settotal] = useState(0);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let sumProduct = () => {
    if (data.filter((e) => e.cartquantity > 0) === 0) {
      settotal(0);
    } else {
      let sum = 0;
      data
        .filter((e) => e.cartquantity > 0)
        .forEach((e) => (sum += e.price * e.cartquantity));
      settotal(sum);
    }
  };
  let handlecoupons = () => {
    setcoupons(30);
  };
  let handlecheakoutbutton = () => {
    navigate("/address");
  };

  return (
    <>
      <div className="Product-Cart-Heading">
        <h1 className="Product-Cart-header-h1">Shopping Bag</h1>
        <Alert status="info">
          <img
            src="/Image/free-Shipping.png"
            alt="Shipping_Image"
            width="40px"
          />
          &nbsp;&nbsp;&nbsp; Yay! No convenience fee on this order.
        </Alert>
        <br />
      </div>
      <div className="Product-Cart-main">
        <div className="Product-Cart-left">
          <>
            <img src="/Image/empty cart.webp" alt="" width="100%" />
            <br />
            <Center>
              <Link to="">
                <Button colorScheme="red">BACK TO PRODUCT PAGE</Button>
              </Link>
            </Center>
          </>
        </div>
        <div className="Product-Cart-right">
          <div>
            <label>Coupons</label>
            <br />
            <hr />
            <br />
            <div style={styles}>
              <CalendarIcon />
              <Text fontSize="md"> Apply Coupons</Text>
              <Button
                // disabled={coupons > 0 || total == 0}
                onClick={handlecoupons}
                size="sm"
                colorScheme="red"
              >
                {coupons > 0 ? "Applied" : "Apply"}
              </Button>
            </div>
            <br />
            {coupons > 0 ? (
              <Alert status="success">
                <AlertIcon />
                Flat -₹30 Coupon Applied !!
              </Alert>
            ) : (
              <Text color="red" textAlign="center" fontSize="md">
                Get Upto 50% OFF
              </Text>
            )}
          </div>
          <br />
          <div>
            <label>Gifting & Personalization</label>
            <br />
            <hr />
            <br />
            <img src="/Image/gift.gif" alt="gift" width="100%" />
          </div>
          <br />
          <div>
            <label>Price Details</label>
            <br />
            <hr />
            <br />
            <div style={styles}>
              <label>Total MRP</label>
              <label>₹{total.toFixed(2)}</label>
            </div>
            <div style={styles}>
              <label>Total Discount MRP</label>
              <label>-₹{(total / 10).toFixed(2)}</label>
            </div>
            <div style={styles}>
              <label>Coupos DisCount</label>
              <label>-₹{coupons}</label>
            </div>
            <div style={styles}>
              <label>
                Convenience Fee <span style={{ color: "red" }}>Know more</span>
              </label>
              <label>
                <Text as="s">₹99</Text>{" "}
                <span style={{ color: "red" }}>FREE</span>
              </label>
            </div>
            <hr />
            <div style={styles}>
              <label>Total Amount</label>
            </div>
            <br />
            <Center>
              <Button
                // disabled={total == 0}
                onClick={handlecheakoutbutton}
                colorScheme="teal"
              >
                PROCEED TO CHECKOUT
              </Button>
            </Center>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

import {
  Alert,
  Center,
  Link,
  Button,
  SimpleGrid,
  Text,
  Box,
  Image,
  AlertIcon,
  useFocusEffect,
} from "@chakra-ui/react";
import "./CartPage.css";
import { CalendarIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartSuccess } from "../Redux/CartReducer/action";
import SimpleCard from "./AdminLogin";

let styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const CartPage = () => {
  const cartPageData = useSelector((store) => store.CartReducer.carts);
  console.log("cartPageData is", cartPageData);
  let [state, setstate] = useState(0);
  let [coupons, setcoupons] = useState(0);
  // const [total, setTotal] = useState(0);
  let dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(cartSuccess());
  // }, []);
  let navigate = useNavigate();
  let total = 0;
  // let sumProduct = () => {
  //   if (cartPageData.filter((e) => e.cartquantity > 0) === 0) {
  //     setTotal(0);
  //   } else {
  //     let sum = 0;
  //     cartPageData
  //       .filter((e) => e.cartquantity > 0)
  //       .forEach((e) => (sum += e.price * e.cartquantity));
  //     setTotal(sum);
  //   }
  // };

  for (let i = 0; i < cartPageData.length; i++) {
    total += cartPageData[i].price;
  }
  let handlecoupons = () => {
    setcoupons(30);
  };
  let handlecheakoutbutton = () => {
    navigate("/address");
  };
  let handleProductbutton = () => {
    navigate("/products");
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
          {cartPageData.length == 0 && (
            <div>
              <img src="/Image/empty cart.webp" alt="" width="100%" />
              <br />
              <Center>
                <Button onClick={handleProductbutton} colorScheme="red">
                  BACK TO PRODUCT PAGE
                </Button>
              </Center>
            </div>
          )}
          {cartPageData.length > 0 && (
            <div>
              <SimpleGrid>
                {cartPageData.map((el) => (
                  <Box
                    key={el.id}
                    display="flex"
                    boxShadow="outline"
                    p="6"
                    rounded="md"
                    bg="white"
                  >
                    <Box>
                      <Image
                        w="100px"
                        src={el.image}
                        alignContent="center"
                        alignItems="center"
                        textAlign="center"
                        m="auto"
                      />
                    </Box>
                    <Box
                      alignContent="center"
                      alignItems="center"
                      textAlign="center"
                      m="auto"
                    >
                      {" "}
                      <Text
                        alignContent="center"
                        alignItems="center"
                        textAlign="center"
                        fontWeight="bold"
                      >
                        {el.name}
                      </Text>
                      <Text
                        alignContent="center"
                        alignItems="center"
                        textAlign="center"
                      >
                        {el.category}
                      </Text>
                      <Text
                        alignContent="center"
                        alignItems="center"
                        textAlign="center"
                        fontWeight="bold"
                      >
                        {`₹ ${el.price}`}
                      </Text>
                    </Box>
                  </Box>
                ))}
              </SimpleGrid>
            </div>
          )}
        </div>
        <div className="Product-Cart-right">
          <div>
            <label>
              <span style={{ color: "red" }}>Coupons</span>
            </label>
            <br />
            <hr />
            <br />
            <div style={styles}>
              <CalendarIcon />
              <Text fontSize="md"> Apply Coupons</Text>
              <Button
                disabled={coupons > 0 || total == 0}
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
            <label>
              <span style={{ color: "red" }}>Gifting & Personalization</span>
            </label>
            <br />
            <hr />
            <br />
            <img src="/Image/gift.gif" alt="gift" width="100%" />
          </div>
          <br />
          <div>
            <label>
              <span style={{ color: "red" }}>Price Details</span>
            </label>
            <br />
            <hr />
            <br />
            <div style={styles}>
              <label>Total MRP</label>
              <label>₹{total.toFixed(2)}</label>
            </div>
            <div style={styles}>
              <label>
                Total Discount <span style={{ color: "red" }}>MRP</span>
              </label>
              <label>-₹{(total / 10).toFixed(2)}</label>
            </div>
            <div style={styles}>
              <label>Coupons Discount</label>
              <label>-₹{coupons}</label>
            </div>
            <div style={styles}>
              <label>
                Convenience Fee <span style={{ color: "red" }}>Know more</span>
              </label>
              <label>
                <Text as="s">₹199</Text>{" "}
                <span style={{ color: "red" }}>FREE</span>
              </label>
            </div>
            <hr />
            <div style={styles}>
              <label>Total Amount</label>
              <label>₹{(total - total / 10 - coupons).toFixed(2)}</label>
            </div>
            <br />
            <Center>
              <Button
                disabled={total == 0}
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

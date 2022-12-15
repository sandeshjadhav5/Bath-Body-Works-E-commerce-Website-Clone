import { Heading, Text, Button, Select, Input } from "@chakra-ui/react";
import React from "react";

const Address = () => {
  let handleaddress = () => {};
  return (
    <>
      <div
        style={{
          width: "80%",
          margin: "auto",
          backgroundColor: "whitesmoke",
          padding: "20px",
        }}
      >
        <Heading>Select Our Delivery Address</Heading>
        <br />
        <Text fontSize="xs">
          Is the address you'd like to use displayed below? If so, click the
          corresponding "Deliver to this address" button. Or you can enter a new
          delivery address.
        </Text>
        <hr />
        <div style={{ textAlign: "left" }}>
          <br />
          <Text fontWeight="normal">
            <Text fontSize="md" fontWeight="bold">
              careless tiger 9091
            </Text>
            <Text fontSize="xs" fontWeight="normal">
              5th Floor,
              <br />
              SJR Primus, 20th Main Rd, next to Siddam Setty Complex, 5th Block,
              Koramangala, Bengaluru,
              <br />
              Karnataka, Pincode : 560034
              <br />
              India <br />
              Add delivery instructions
            </Text>
            <br />
            <Button
              ml={0}
              colorScheme="blue"
              onClick={handleaddress}
              size="sm"
              fontSize="sm"
            >
              Use this Address
            </Button>
          </Text>
          <br />
        </div>
        <hr />
        <div style={{ width: "60%", textAlign: "left", padding: "20px" }}>
          <Text fontSize="xl" fontWeight="bold">
            Add a new address
          </Text>
          <br />
          <div>
            <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Country/Region
            </label>
            <Select size="sm" placeholder="Select option">
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="USA">USA</option>
              <option value="Russia">Russia</option>
              <option value="japan">Japan</option>
              <option value="Dubai">Dubai</option>
              <option value="Africa">Africa</option>
            </Select>
            <br />
          </div>
          <div>
            <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Full name
            </label>
            <Input size="sm" placeholder="Enter Full Name" />
            <br />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <label style={{ fontSize: "14px", fontWeight: "bold" }}>
                Mobile number
              </label>
              <Input size="sm" placeholder="Mobile Number"/>
              <br />
            </div>
            <div>
              <label style={{ fontSize: "14px", fontWeight: "bold" }}>
                Pincode
              </label>
              <Input size="sm" placeholder="Pincode" />
              <br />
            </div>
          </div>
          <div>
            <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Full Address
            </label>
            <Input size="sm" placeholder="Full Address"/>
            <br />
          </div>
          <div>
            <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Landmark
            </label>
            <Input size="sm" placeholder="Landmark" />
            <br />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <div style={{ width: "50%" }}>
              <label style={{ fontSize: "14px", fontWeight: "bold" }}>
                Town/City
              </label>
              <Input size="sm" placeholder="City Name"/>
            </div>
            <div style={{ width: "50%" }}>
              <label style={{ fontSize: "14px", fontWeight: "bold" }}>
                State
              </label>
              <Select size="sm" w="100%" placeholder="Select Your City">
                <option value="Surat">Surat</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Chennai">Chennai</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Bengaluru">Bengaluru</option>
              </Select>
            </div>
          </div>
          <div>
            <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Landmark
            </label>
            <Select size="sm" w="100%" placeholder="Select an Address Type ">
              <option value="Home">Home (9 am — 7 pm delivery)</option>
              <option value="Office">
                Office/Commercial (10 AM - 5:30 PM delivery)
              </option>
            </Select>
            <br />
          </div>
          <div>
            <Button
              ml={0}
              colorScheme="blue"
              onClick={handleaddress}
              size="sm"
              fontSize="sm"
            >
              Use this Address
            </Button>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default Address;

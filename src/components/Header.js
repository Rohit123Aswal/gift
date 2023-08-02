import { MenuItem, Select } from "@mui/material";
import React, { useContext, useState } from "react";
import { FriendContext } from "../context/YearContext";

const Header = () => {
  const { setDescription, setImage } = useContext(FriendContext);
  const [friend, setFriend] = useState("Select");

  switch (friend) {
    case "Select":
      setDescription(
        "Happy birthday, Beautiful❤️! May your day be filled with joy, laughter, and countless wonderful memories to cherish! Check out the messages and memories shared by your friends from select toggle above😜😜"
      );
      setImage("../Images/Select.jpg");
      break;
    case "Tripti":
      setDescription(
        "Happy Birthday to my bestest friend❤️🌸Wishing you love and light always...."
      );
      setImage("../Images/Tripti.jpeg");
      break;
    case "Shonali":
      setDescription(
        " Happy birthday shivi Hmsha khush raho 🌸"
      );
      setImage("../Images/Shonali.jpeg");
      break;
  
    case "Ragini":
      setDescription(
        "Cheers to more fun, more memories and cake! .. happy birthday..... 🥳🥳🥳💓💓"
      );
      setImage("../Images/Ragini.jpeg");
      break;
    case "Asmita":
      setDescription(
        "May the god lights up your world with his brightest light.   Happy Birthday 💓"
      );
      setImage("../Images/Asmita.jpeg");
      break;
    case "Kirti":
      setDescription(
        "Happy birthday to my cute friend and the one who always has my back! Thank you for being there through thick and thin. May this year bring you abundant love, health, and prosperity.❤️❤️"
      );
      setImage("../Images/Kirti.jpeg");
      break;
    case "Rohit":
      setDescription(
        "Happiest birthday Mote On your birthday, May God blesses you with all the good things in life―health, wealth, happiness, and success. May your dreams come true and may you achieve all that you set out to do"
      );
      setImage("../Images/Rohit.jpeg");
      break;
     
  }

  return (
    <div className="container">
      <h1 className="title">Happy Birthday Leo The Lion !!</h1>

      <Select
        className="select"
        variant="outlined"
        style={{
          width: 100,
          height: 40,
          marginRight: 15,
          color: "white",
        }}
        value={friend}
        onChange={(e) => {
          setFriend(e.target.value);
        }}
      >
        <MenuItem value={"Select"}>Select</MenuItem>
        <MenuItem value={"Tripti"}>Tripti</MenuItem>
        <MenuItem value={"Ragini"}>Ragini</MenuItem>
        <MenuItem value={"Rohit"}>Rohit</MenuItem>

        <MenuItem value={"Shonali"}>Shonali</MenuItem>
        <MenuItem value={"Asmita"}>Asmita</MenuItem>
        <MenuItem value={"Kirti"}>Kirti</MenuItem>
      
        
      </Select>
    </div>
  );
};
export default Header;

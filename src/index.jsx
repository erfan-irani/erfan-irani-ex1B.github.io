import React from "react";
import ReactDOM from "react-dom/client";
import myPic from "./assets/images/joker.jpg";
import myFontStyle from "./assets/css/general.module.css";
import styled from "styled-components";

const fullName = "joker";
const Imgst = styled.img`
  width: 350px;
  border-radius: 30px;
  box-shadow: rgb(0, 0, 0) 0px 5px 15px;
  transition: all ease 300ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className={myFontStyle.container}>
    <Imgst src={myPic} alt={fullName} />
    <h1 className={myFontStyle.fullName}>{fullName}</h1>
    <p className={myFontStyle.bio}>
      {fullName} The Joker is a supervillain appearing in American comic books published by DC Comics. The character was created by Bill Finger, Bob Kane, and Jerry Robinson, and first appeared in the debut issue of the comic book Batman on April 25, 1940. Credit for the Joker's creation is disputed; Kane and Robinson claimed responsibility for the Joker's design while acknowledging Finger's writing contribution. Although the Joker was planned to be killed off during his initial appearance, he was spared by editorial intervention, allowing the character to endure as the archenemy of the superhero Batman. 
    </p>
  </div>
);

import React from "react";
import { Bars, Nav, NavBtn, NavBtnLink, NavLink, NavMenu } from "./NavStyles";

export const Navbar = () => {
  return (
    <>
      <div style={{ width: "100%", height: "5rem" }}></div>
      <Nav
        style={{
          position: "fixed",
          height: "4rem",
          top: "0",
          width: "100%",
          left: "0",
        }}
      >
        <Bars />

        <NavMenu>
          <NavLink to="/">Splash</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/teachers">Teachers</NavLink>
          <NavLink to="/students">Students</NavLink>
          <NavLink to="/subjects">Subjects</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
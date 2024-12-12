import React from "react";
import { Bars, Nav, NavBtn, NavBtnLink, NavLink, NavMenu } from "./NavStyles";

export const Navbar = ({ loggedIn, setLoggedIn }) => {
  return (
    <>
      <div style={{ width: "100%", height: "5rem" }}></div>
      <Nav
        style={{
          height: "4rem",
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
          {loggedIn ? (
            <>
              <p>{loggedIn}</p>
              <NavBtnLink
                onClick={() => {
                  sessionStorage.removeItem("sessionToken");
                  console.log("Destroyed session");
                  setLoggedIn(false);
                }}
              >
                Logout
              </NavBtnLink>
            </>
          ) : (
            <>
              <NavBtnLink to="/signup">Sign Up</NavBtnLink>
              <NavBtnLink to="/login">Log In</NavBtnLink>
            </>
          )}
        </NavBtn>
      </Nav>
    </>
  );
};

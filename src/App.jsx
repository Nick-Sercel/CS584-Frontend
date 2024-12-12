import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./NavBar";
import { Splash } from "./Splash";

import { CreateTeacher } from "./Teacher/Create";
import { DetailsTeacher } from "./Teacher/Details";
import { EditTeacher } from "./Teacher/Edit";
import { TeachersIndex } from "./Teacher/Index";

import { CreateStudent } from "./Student/Create";
import { DetailsStudent } from "./Student/Details";
import { EditStudent } from "./Student/Edit";
import { StudentsIndex } from "./Student/Index";

import { CreateSubject } from "./Subject/Create";
import { DetailsSubject } from "./Subject/Details";
import { EditSubject } from "./Subject/Edit";
import { SubjectsIndex } from "./Subject/Index";

import { CreateCourse } from "./Course/Create";
import { DetailsCourse } from "./Course/Details";
import { EditCourse } from "./Course/Edit";
import { CoursesIndex } from "./Course/Index";

import { useState } from "react";
import { ProtectedRoute } from "./ProtectedRoute";
import { Login, Signup } from "./signup";

import { loginWithSessionToken } from "./encryption";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const log = async () => {
      const state = await loginWithSessionToken();
      setLoggedIn(state);
    };
    log();
  });

  return (
    <div>
      <BrowserRouter>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/courses">
            <Route index element={<CoursesIndex loggedIn={loggedIn} />} />
            <Route
              path="edit/:id"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <EditCourse />
                </ProtectedRoute>
              }
            />
            <Route
              path="details/:id"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <DetailsCourse />
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <CreateCourse />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="/teachers">
            <Route index element={<TeachersIndex loggedIn={loggedIn} />} />
            <Route
              path="edit/:id"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <EditTeacher />
                </ProtectedRoute>
              }
            />
            <Route
              path="details/:id"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <DetailsTeacher />
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <CreateTeacher />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="/students">
            <Route index element={<StudentsIndex loggedIn={loggedIn} />} />
            <Route
              path="edit/:id"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <EditStudent />
                </ProtectedRoute>
              }
            />
            <Route
              path="details/:id"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <DetailsStudent />
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <CreateStudent />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="/subjects">
            <Route index element={<SubjectsIndex loggedIn={loggedIn} />} />
            <Route
              path="edit/:id"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <EditSubject />
                </ProtectedRoute>
              }
            />
            <Route
              path="details/:id"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <DetailsSubject />
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <CreateSubject />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route
            path="/signup"
            element={<Signup setLoggedIn={setLoggedIn} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

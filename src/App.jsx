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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/courses" element={<Splash />}></Route>
          <Route path="/teachers">
            <Route index element={<TeachersIndex />} />
            <Route path="edit/:id" element={<EditTeacher />} />
            <Route path="details/:id" element={<DetailsTeacher />} />
            <Route path="create" element={<CreateTeacher />} />
          </Route>
          <Route path="/students">
            <Route index element={<StudentsIndex />} />
            <Route path="edit/:id" element={<EditStudent />} />
            <Route path="details/:id" element={<DetailsStudent />} />
            <Route path="create" element={<CreateStudent />} />
          </Route>
          <Route path="/subjects" element={<Splash />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

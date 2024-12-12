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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/courses">
            <Route index element={<CoursesIndex />} />
            <Route path="edit/:id" element={<EditCourse />} />
            <Route path="details/:id" element={<DetailsCourse />} />
            <Route path="create" element={<CreateCourse />} />
          </Route>
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
          <Route path="/subjects">
            <Route index element={<SubjectsIndex />} />
            <Route path="edit/:id" element={<EditSubject />} />
            <Route path="details/:id" element={<DetailsSubject />} />
            <Route path="create" element={<CreateSubject />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

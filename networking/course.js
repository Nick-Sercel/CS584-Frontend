import { getStudents } from "./student";
import { getSubjects } from "./subject";
import { getTeachers } from "./teacher";

const BASE_URL = import.meta.env.VITE_SERVER_URL;

export async function getCourses() {
  const response = await fetch(`${BASE_URL}/Courses/Index`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function getEditCourse(id) {
  const course = await getCourseDetails(id);
  const subjects = await getSubjects();
  const teachers = await getTeachers();
  const students = await getStudents();

  return {
    course,
    subjects,
    teachers,
    students,
  };
}

export async function getCreateCourse() {
  const subjects = await getSubjects();
  const teachers = await getTeachers();
  const students = await getStudents();

  return {
    subjects,
    teachers,
    students,
  };
}

export async function getCourseDetails(id) {
  const courseDetailsRes = await fetch(`${BASE_URL}/Courses/Details/${id}`, {
    method: "GET",
  });
  if (!courseDetailsRes.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return courseDetailsRes.json();
}

export async function editCourse(id, course, selectedStudents) {
  const url = `${BASE_URL}/Courses/Edit/${id}`;

  const requestData = {
    Id: id,
    ...course,
    SelectedStudentIds: selectedStudents,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Response from server:", result);

    return result;
  } catch (error) {
    console.error("Error during fetch:", error);
  }
}

export async function createCourse(course, selectedStudents) {
  const url = `${BASE_URL}/Courses/Create`;

  console.log("course", course);

  const requestData = {
    ...course,
    SelectedStudentIds: selectedStudents,
  };

  console.log(requestData);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Response from server:", result);

    return result;
  } catch (error) {
    console.error("Error during fetch:", error);
  }
}

export async function deleteCourse(id) {
  const response = await fetch(`${BASE_URL}/Courses/Delete/${id}`, {
    method: "POST",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

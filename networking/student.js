const BASE_URL = import.meta.env.VITE_SERVER_URL;
import { getCourses } from "./course";
import { getSubjects } from "./subject";

export async function getStudents() {
  const response = await fetch(`${BASE_URL}/Students/Index`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function getEditStudent(id) {
  const student = await getStudentDetails(id);
  const subjects = await getSubjects();
  const courses = await getCourses();

  return {
    student,
    subjects,
    courses,
  };
}

export async function getCreateStudent() {
  const subjects = await getSubjects();
  const courses = await getCourses();

  return {
    subjects,
    courses,
  };
}

export async function getStudentDetails(id) {
  const studentDetailsRes = await fetch(`${BASE_URL}/Students/Details/${id}`, {
    method: "GET",
  });
  if (!studentDetailsRes.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return studentDetailsRes.json();
}

export async function editStudent(id, student, selectedCourses) {
  const url = `${BASE_URL}/Students/Edit/${id}`;

  const requestData = {
    Id: id,
    ...student,
    SelectedCourseIds: selectedCourses,
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

export async function createStudent(student, selectedCourses) {
  const url = `${BASE_URL}/Students/Create`;

  console.log("student", student);

  const requestData = {
    ...student,
    SelectedCourseIds: selectedCourses,
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

export async function deleteStudent(id) {
  const response = await fetch(`${BASE_URL}/Students/Delete/${id}`, {
    method: "POST",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

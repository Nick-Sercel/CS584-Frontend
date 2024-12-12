const BASE_URL = import.meta.env.VITE_SERVER_URL;
import { getCourses } from "./course";
import { getSubjects } from "./subject";

export async function getTeachers() {
  const response = await fetch(`${BASE_URL}/Teachers/Index`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function getEditTeacher(id) {
  const teacher = await getTeacherDetails(id);
  const subjects = await getSubjects();
  const courses = await getCourses();

  return {
    teacher,
    subjects,
    courses,
  };
}

export async function getCreateTeacher() {
  const subjects = await getSubjects();
  const courses = await getCourses();

  return {
    subjects,
    courses,
  };
}

export async function getTeacherDetails(id) {
  const teacherDetailsRes = await fetch(`${BASE_URL}/Teachers/Details/${id}`, {
    method: "GET",
  });
  if (!teacherDetailsRes.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return teacherDetailsRes.json();
}

export async function editTeacher(id, teacher, selectedCourses) {
  const url = `${BASE_URL}/Teachers/Edit/${id}`;

  const requestData = {
    Id: id,
    ...teacher,
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

export async function createTeacher(teacher, selectedCourses) {
  const url = `${BASE_URL}/Teachers/Create`;

  console.log("teacher", teacher);

  const requestData = {
    ...teacher,
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

export async function deleteTeacher(id) {
  const response = await fetch(`${BASE_URL}/Teachers/Delete/${id}`, {
    method: "POST",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

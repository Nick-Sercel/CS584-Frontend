const BASE_URL = import.meta.env.VITE_SERVER_URL;

export async function getSubjects() {
  const response = await fetch(`${BASE_URL}/Subjects/Index`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function getSubjectDetails(id) {
  const subjectDetailsRes = await fetch(`${BASE_URL}/Subjects/Details/${id}`, {
    method: "GET",
  });
  if (!subjectDetailsRes.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return subjectDetailsRes.json();
}

export async function editSubject(id, subject) {
  const url = `${BASE_URL}/Subjects/Edit/${id}`;

  const requestData = {
    Id: id,
    ...subject,
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

export async function createSubject(subject) {
  const url = `${BASE_URL}/Subjects/Create`;

  console.log("subject", subject);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subject),
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

export async function deleteSubject(id) {
  const response = await fetch(`${BASE_URL}/Subjects/Delete/${id}`, {
    method: "POST",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

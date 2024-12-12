const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getSubjects() {
  const response = await fetch(`Subjects/Index`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function getSubjectDetails(id) {
  const subjectDetailsRes = await fetch(`Subjects/Details/${id}`, {
    method: "GET",
  });
  if (!subjectDetailsRes.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return subjectDetailsRes.json();
}

export async function editSubject(id, subject) {
  const url = `Subjects/Edit/${id}`;

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
  const url = `Subjects/Create`;

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
  const response = await fetch(`Subjects/Delete/${id}`, {
    method: "POST",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

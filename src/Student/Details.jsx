import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getStudentDetails } from "../../networking/student";

export const DetailsStudent = () => {
  const [student, setStudent] = useState();
  const location = useLocation();
  const index = Number(location.pathname.split("/")[3]);

  useEffect(() => {
    const setStudentDetails = async () => {
      const d = await getStudentDetails(index);
      setStudent(d);
    };
    setStudentDetails();
  }, [index]);

  return (
    <div>
      <h1>Details page</h1>
      {student && (
        <div>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <p>Name</p>
            <p>{student.name}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <p>Email</p>
            <p>{student.email}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <p>Major</p>
            <p>{student.major.name}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <p>Courses</p>
            <p>
              {student.courses.length > 0
                ? student.courses.map((course) => course.name).join(", ")
                : "No courses"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

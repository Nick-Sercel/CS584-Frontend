import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getTeacherDetails } from "../../networking/teacher";

export const DetailsTeacher = () => {
  const [teacher, setTeacher] = useState();
  const location = useLocation();
  const index = Number(location.pathname.split("/")[3]);

  useEffect(() => {
    const setTeacherDetails = async () => {
      const d = await getTeacherDetails(index);
      setTeacher(d);
    };
    setTeacherDetails();
  }, [index]);

  return (
    <div>
      <h1>Details page</h1>
      {teacher && (
        <div>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <p>Name</p>
            <p>{teacher.name}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <p>Email</p>
            <p>{teacher.email}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <p>Field</p>
            <p>{teacher.field.name}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <p>Courses</p>
            <p>
              {teacher.courses.length > 0
                ? teacher.courses.map((course) => course.name).join(", ")
                : "No courses"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getCourseDetails } from "../../networking/course";

export const DetailsCourse = () => {
  const [course, setCourse] = useState();
  const location = useLocation();
  const index = Number(location.pathname.split("/")[3]);

  useEffect(() => {
    const setCourseDetails = async () => {
      const d = await getCourseDetails(index);
      setCourse(d);
    };
    setCourseDetails();
  }, [index]);

  return (
    <div>
      <h1>Details page</h1>
      {course && (
        <div>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <p>Name</p>
            <p>{course.name}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <p>Description</p>
            <p>{course.description}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <p>Teacher</p>
            <p>{course.teacher.name}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <p>Students</p>
            <p>
              {course.students.length > 0
                ? course.students.map((student) => student.name).join(", ")
                : "No students"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteCourse, getCourses } from "../../networking/course";

export const CoursesIndex = () => {
  const [courses, setCourses] = useState();
  const navigate = useNavigate();

  const removeCourse = async (id) => {
    const res = await deleteCourse(id);
    if (res.success) {
      const d = await getCourses();
      setCourses(d);
    } else {
      alert(res.message);
    }
  };

  useEffect(() => {
    const doThing = async () => {
      const d = await getCourses();
      setCourses(d);
    };
    doThing();
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      <h2
        style={{ textDecoration: "underline", cursor: "pointer" }}
        onClick={() => navigate("/courses/create")}
      >
        Create Course
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Teacher</th>
          </tr>
        </thead>
        <tbody>
          {courses &&
            courses.map((course) => {
              return (
                <tr style={{ gap: "1rem" }} key={course.id + "value"}>
                  <td>{course.name}</td>
                  <td>{course.description}</td>
                  <td>{course.teacher.name}</td>
                  <td
                    style={{
                      paddingLeft: "3rem",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    <a onClick={() => navigate(`/courses/edit/${course.id}`)}>
                      Edit
                    </a>
                  </td>
                  <td>
                    <a
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                      onClick={() => navigate(`/courses/details/${course.id}`)}
                    >
                      Details
                    </a>
                  </td>
                  <td>
                    <a
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                      onClick={(e) => {
                        e.preventDefault();
                        removeCourse(course.id);
                      }}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

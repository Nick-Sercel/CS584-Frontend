import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTeacher, getTeachers } from "../../networking/teacher";

export const TeachersIndex = () => {
  const [teachers, setTeachers] = useState();
  const navigate = useNavigate();

  const removeTeacher = async (id) => {
    const res = await deleteTeacher(id);
    if (res.success) {
      const d = await getTeachers();
      setTeachers(d);
    } else {
      alert(res.message);
    }
  };

  useEffect(() => {
    const doThing = async () => {
      const d = await getTeachers();
      setTeachers(d);
    };
    doThing();
  }, []);

  return (
    <div>
      <h1>Teachers</h1>
      <h2
        style={{ textDecoration: "underline", cursor: "pointer" }}
        onClick={() => navigate("/teachers/create")}
      >
        Create Teacher
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Field</th>
          </tr>
        </thead>
        <tbody>
          {teachers &&
            teachers.map((teacher) => {
              return (
                <tr style={{ gap: "1rem" }} key={teacher.id + "value"}>
                  <td>{teacher.name}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.field.name}</td>
                  <td style={{ paddingLeft: "3rem" }}>
                    <a href={`/teachers/edit/${teacher.id}`}>Edit</a>
                  </td>
                  <td>
                    <a href={`/teachers/details/${teacher.id}`}>Details</a>
                  </td>
                  <td>
                    <a
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                      onClick={(e) => {
                        e.preventDefault();
                        removeTeacher(teacher.id);
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

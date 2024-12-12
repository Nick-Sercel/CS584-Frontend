import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteStudent, getStudents } from "../../networking/student";

export const StudentsIndex = () => {
  const [students, setStudents] = useState();
  const navigate = useNavigate();

  const removeStudent = async (id) => {
    const res = await deleteStudent(id);
    if (res.success) {
      const d = await getStudents();
      setStudents(d);
    } else {
      alert(res.message);
    }
  };

  useEffect(() => {
    const doThing = async () => {
      const d = await getStudents();
      setStudents(d);
    };
    doThing();
  }, []);

  return (
    <div>
      <h1>Students</h1>
      <h2
        style={{ textDecoration: "underline", cursor: "pointer" }}
        onClick={() => navigate("/students/create")}
      >
        Create Student
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Major</th>
          </tr>
        </thead>
        <tbody>
          {students &&
            students.map((student) => {
              return (
                <tr style={{ gap: "1rem" }} key={student.id + "value"}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.major.name}</td>
                  <td style={{ paddingLeft: "3rem" }}>
                    <a href={`/students/edit/${student.id}`}>Edit</a>
                  </td>
                  <td>
                    <a href={`/students/details/${student.id}`}>Details</a>
                  </td>
                  <td>
                    <a
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                      onClick={(e) => {
                        e.preventDefault();
                        removeStudent(student.id);
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

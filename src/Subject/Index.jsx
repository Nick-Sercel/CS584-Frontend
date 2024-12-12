import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteSubject, getSubjects } from "../../networking/subject";

export const SubjectsIndex = ({ loggedIn }) => {
  const [subjects, setSubjects] = useState();
  const navigate = useNavigate();

  const removeSubject = async (id) => {
    if (!loggedIn) {
      navigate("/login");
      return;
    }
    const res = await deleteSubject(id);
    if (res.success) {
      const d = await getSubjects();
      setSubjects(d);
    } else {
      alert(res.message);
    }
  };

  useEffect(() => {
    const doThing = async () => {
      const d = await getSubjects();
      setSubjects(d);
    };
    doThing();
  }, []);

  return (
    <div>
      <h1>Subjects</h1>
      <h2
        style={{ textDecoration: "underline", cursor: "pointer" }}
        onClick={() => navigate("/subjects/create")}
      >
        Create Subject
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {subjects &&
            subjects.map((subject) => {
              return (
                <tr style={{ gap: "1rem" }} key={subject.id + "value"}>
                  <td>{subject.name}</td>
                  <td style={{ paddingLeft: "3rem" }}>
                    <a
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                      onClick={() => navigate(`/subjects/edit/${subject.id}`)}
                    >
                      Edit
                    </a>
                  </td>
                  <td>
                    <a
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                      onClick={() =>
                        navigate(`/subjects/details/${subject.id}`)
                      }
                    >
                      Details
                    </a>
                  </td>
                  <td>
                    <a
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                      onClick={(e) => {
                        e.preventDefault();
                        removeSubject(subject.id);
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

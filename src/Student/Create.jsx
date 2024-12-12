import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createStudent, getCreateStudent } from "../../networking/student";
import { CreateForm } from "./CreateForm";

export const CreateStudent = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();

  const action = async (student, selectedCourses) => {
    const res = await createStudent(student, selectedCourses);
    if (res.success === true) {
      navigate("/students");
    } else {
      alert(res.message);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const d = await getCreateStudent();
      setData(d);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Create page</h1>
      {data && (
        <CreateForm
          subjects={data.subjects}
          courses={data.courses}
          action={({ student, SelectedCourses }) =>
            action(student, SelectedCourses)
          }
        />
      )}
    </div>
  );
};

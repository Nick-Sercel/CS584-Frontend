import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTeacher, getCreateTeacher } from "../../networking/teacher";
import { CreateForm } from "./CreateForm";

export const CreateTeacher = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();

  const action = async (teacher, selectedCourses) => {
    const res = await createTeacher(teacher, selectedCourses);
    if (res.success === true) {
      navigate("/teachers");
    } else {
      alert(res.message);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const d = await getCreateTeacher();
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
          action={({ teacher, SelectedCourses }) =>
            action(teacher, SelectedCourses)
          }
        />
      )}
    </div>
  );
};

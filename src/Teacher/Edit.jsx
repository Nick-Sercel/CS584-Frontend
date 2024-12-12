import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { editTeacher, getEditTeacher } from "../../networking/teacher";
import { CreateForm } from "./CreateForm";

export const EditTeacher = () => {
  const [data, setData] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const index = Number(location.pathname.split("/")[3]);

  const action = async (id, teacher, selectedCourses) => {
    const res = await editTeacher(id, teacher, selectedCourses);
    if (res.success === true) {
      navigate("/teachers");
    } else {
      alert(res.message);
    }
  };

  useEffect(() => {
    const getEditData = async () => {
      const d = await getEditTeacher(index);
      setData(d);
    };
    getEditData();
  }, [index]);

  return (
    <div>
      <h1>Edit page</h1>
      {data && data.teacher && (
        <CreateForm
          teacher={data.teacher}
          subjects={data.subjects}
          courses={data.courses}
          action={({ teacher, SelectedCourses }) =>
            action(index, teacher, SelectedCourses)
          }
        />
      )}
    </div>
  );
};

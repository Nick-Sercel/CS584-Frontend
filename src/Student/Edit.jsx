import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { editStudent, getEditStudent } from "../../networking/student";
import { CreateForm } from "./CreateForm";

export const EditStudent = () => {
  const [data, setData] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const index = Number(location.pathname.split("/")[3]);

  const action = async (id, student, selectedCourses) => {
    const res = await editStudent(id, student, selectedCourses);
    if (res.success === true) {
      navigate("/students");
    } else {
      alert(res.message);
    }
  };

  useEffect(() => {
    const getEditData = async () => {
      const d = await getEditStudent(index);
      setData(d);
    };
    getEditData();
  }, [index]);

  return (
    <div>
      <h1>Edit page</h1>
      {data && data.student && (
        <CreateForm
          student={data.student}
          subjects={data.subjects}
          courses={data.courses}
          action={({ student, SelectedCourses }) =>
            action(index, student, SelectedCourses)
          }
        />
      )}
    </div>
  );
};

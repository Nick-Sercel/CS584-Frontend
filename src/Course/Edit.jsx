import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { editCourse, getEditCourse } from "../../networking/course";
import { CreateForm } from "./CreateForm";

export const EditCourse = () => {
  const [data, setData] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const index = Number(location.pathname.split("/")[3]);

  const action = async (id, course, selectedStudents) => {
    const res = await editCourse(id, course, selectedStudents);
    if (res.success === true) {
      navigate("/courses");
    } else {
      alert(res.message);
    }
  };

  useEffect(() => {
    const getEditData = async () => {
      const d = await getEditCourse(index);
      setData(d);
    };
    getEditData();
  }, [index]);

  return (
    <div>
      <h1>Edit page</h1>
      {data && data.course && (
        <CreateForm
          course={data.course}
          subjects={data.subjects}
          students={data.students}
          teachers={data.teachers}
          action={({ course, SelectedStudents }) =>
            action(index, course, SelectedStudents)
          }
        />
      )}
    </div>
  );
};

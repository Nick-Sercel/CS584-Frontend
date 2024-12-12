import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCourse, getCreateCourse } from "../../networking/course";
import { CreateForm } from "./CreateForm";

export const CreateCourse = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();

  const action = async (course, selectedStudents) => {
    const res = await createCourse(course, selectedStudents);
    if (res.success === true) {
      navigate("/courses");
    } else {
      alert(res.message);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const d = await getCreateCourse();
      setData(d);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Create page</h1>
      {data && (
        <CreateForm
          course={data.course}
          subjects={data.subjects}
          students={data.students}
          teachers={data.teachers}
          action={({ course, SelectedStudents }) =>
            action(course, SelectedStudents)
          }
        />
      )}
    </div>
  );
};

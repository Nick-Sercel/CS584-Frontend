import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { editSubject, getSubjectDetails } from "../../networking/subject";
import { CreateForm } from "./CreateForm";

export const EditSubject = () => {
  const [data, setData] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const index = Number(location.pathname.split("/")[3]);

  const action = async (id, subject) => {
    const res = await editSubject(id, subject);
    if (res.success === true) {
      navigate("/subjects");
    } else {
      alert(res.message);
    }
  };

  useEffect(() => {
    const getEditData = async () => {
      const d = await getSubjectDetails(index);
      setData(d);
    };
    getEditData();
  }, [index]);

  return (
    <div>
      <h1>Edit page</h1>
      {data && (
        <CreateForm
          subject={data}
          action={(subject) => action(index, subject)}
        />
      )}
    </div>
  );
};

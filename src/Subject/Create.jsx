import { useNavigate } from "react-router-dom";
import { createSubject } from "../../networking/subject";
import { CreateForm } from "./CreateForm";

export const CreateSubject = () => {
  const navigate = useNavigate();

  const action = async (subject) => {
    const res = await createSubject(subject);
    if (res.success === true) {
      navigate("/subjects");
    } else {
      alert(res.message);
    }
  };

  return (
    <div>
      <h1>Create page</h1>
      <CreateForm action={(subject) => action(subject)} />
    </div>
  );
};

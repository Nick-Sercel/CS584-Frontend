import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getSubjectDetails } from "../../networking/subject";

export const DetailsSubject = () => {
  const [subject, setSubject] = useState();
  const location = useLocation();
  const index = Number(location.pathname.split("/")[3]);

  useEffect(() => {
    const setSubjectDetails = async () => {
      const d = await getSubjectDetails(index);
      setSubject(d);
    };
    setSubjectDetails();
  }, [index]);

  return (
    <div>
      <h1>Details page</h1>
      {subject && (
        <div>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <p>Name</p>
            <p>{subject.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

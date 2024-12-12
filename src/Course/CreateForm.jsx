export const CreateForm = ({
  subjects,
  teachers,
  students,
  action,
  course,
}) => {
  const getData = () => {
    const Name = document.getElementById("name").value;
    const Description = document.getElementById("description").value;
    const Teacher = Number(document.getElementById("teacher").value);
    const Subject = Number(document.getElementById("subject").value);
    const SelectedStudents = [];
    students.forEach((student) => {
      const studentValue = document.getElementById(
        `student${student.id}`
      ).checked;
      if (studentValue === true) {
        SelectedStudents.push(Number(student.id));
      }
    });
    return {
      course: {
        Name,
        Description,
        TeacherId: Teacher,
        SubjectId: Subject,
      },
      SelectedStudents,
    };
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" defaultValue={course?.name}></input>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input id="description" defaultValue={course?.description}></input>
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <select id="subject" defaultValue={course?.subject.id}>
            {subjects.map((subject, idx) => (
              <option key={subject + idx} value={subject.id}>
                {subject.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="teacher">Teacher</label>
          <select id="teacher" defaultValue={course?.teacher.id}>
            {teachers.map((teacher, idx) => (
              <option key={teacher + idx} value={teacher.id}>
                {teacher.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Students</label>
          {students.map((student) => {
            const studentMap = course
              ? course.students.map((student) => student.id)
              : [];
            return (
              <div key={`student${student.id}`}>
                <input
                  defaultChecked={studentMap.includes(student.id)}
                  type="checkbox"
                  id={`student${student.id}`}
                />
                <label htmlFor={`student${student.id}`}>{student.name}</label>
              </div>
            );
          })}
        </div>
        <div>
          <input
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              action(getData());
            }}
          />
        </div>
      </form>
    </>
  );
};

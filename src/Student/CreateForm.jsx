export const CreateForm = ({ subjects, courses, action, student }) => {
  const getData = () => {
    const Name = document.getElementById("name").value;
    const Email = document.getElementById("email").value;
    const Major = Number(document.getElementById("major").value);
    const SelectedCourses = [];
    courses.forEach((course) => {
      const courseValue = document.getElementById(`course${course.id}`).checked;
      if (courseValue === true) {
        SelectedCourses.push(Number(course.id));
      }
    });
    return {
      student: {
        Name,
        Email,
        SubjectId: Major,
      },
      SelectedCourses,
    };
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" defaultValue={student?.name}></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" defaultValue={student?.email}></input>
        </div>
        <div>
          <label htmlFor="major">Major</label>
          <select id="major" defaultValue={student?.major.id}>
            {subjects.map((subject, idx) => (
              <option key={subject + idx} value={subject.id}>
                {subject.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Courses</label>
          {courses.map((course) => {
            const courseMap = student
              ? student.courses.map((course) => course.id)
              : [];
            return (
              <div key={`course${course.id}`}>
                <input
                  defaultChecked={courseMap.includes(course.id)}
                  type="checkbox"
                  id={`course${course.id}`}
                />
                <label htmlFor={`course${course.id}`}>{course.name}</label>
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

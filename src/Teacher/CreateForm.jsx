export const CreateForm = ({ subjects, courses, action, teacher }) => {
  const getData = () => {
    const Name = document.getElementById("name").value;
    const Email = document.getElementById("email").value;
    const Field = Number(document.getElementById("field").value);
    const SelectedCourses = [];
    courses.forEach((course) => {
      const courseValue = document.getElementById(`course${course.id}`).checked;
      if (courseValue === true) {
        SelectedCourses.push(Number(course.id));
      }
    });
    return {
      teacher: {
        Name,
        Email,
        SubjectId: Field,
      },
      SelectedCourses,
    };
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" defaultValue={teacher?.name}></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" defaultValue={teacher?.email}></input>
        </div>
        <div>
          <label htmlFor="field">Field</label>
          <select id="field" defaultValue={teacher?.field.id}>
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
            const courseMap = teacher
              ? teacher.courses.map((course) => course.id)
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

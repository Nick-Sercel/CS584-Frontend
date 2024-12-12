export const Splash = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <h2>This app is a representation of a school</h2>
      <p>The following are the models used</p>
      <ul>
        <li>Subject (id, name)</li>
        <li>
          Student (id, name, email, Major, Courses) - has many Courses, has one
          Subject
        </li>
        <li>
          Teacher (id, name, email, Field, Courses) - has many Courses, has one
          Subject
        </li>
        <li>
          Course (id, name, Subject, Teacher, Students) - has many Students, has
          one Subject, has one Teacher
        </li>
      </ul>
      <p>
        The relationships work as expected. For example, deleting a course which
        George is a teacher and Tim is a student will remove the Course from
        both George's and Tim's Course lists and you are not able to delete a
        Teacher who is set as teaching a Course.
      </p>
      <p>The application allows viewing of the models without authorization</p>
      <p>However, authorization is required to make any changes</p>
      <p>
        External email authentication is not set up as it costs money to do so
      </p>
      <p>
        However, a valid email is still required to sign up as it simulates the
        process
      </p>
    </div>
  );
};

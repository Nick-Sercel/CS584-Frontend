export const CreateForm = ({ action, subject }) => {
  const getData = () => {
    const Name = document.getElementById("name").value;
    return { Name };
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" defaultValue={subject?.name}></input>
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

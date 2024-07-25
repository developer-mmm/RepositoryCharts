import { useRef } from "react";
function Form({ getData }) {
  const inputText = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    getData(inputText.current.value);
  };
  return (
    <div>
      <form className="flex items-end gap-4 mb-10 " onSubmit={handleSubmit}>
        <label className="form-control w-full max-w-xs ">
          <div className="label">
            <span className="label-text">User Name:</span>
          </div>
          <input
            type="text"
            placeholder="Enter Github Username..."
            className="input input-bordered input-primary w-full max-w-xs"
            ref={inputText}
          />
        </label>
        <button className="btn btn-secondary">Submit</button>
      </form>
    </div>
  );
}

export default Form;

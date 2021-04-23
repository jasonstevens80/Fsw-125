import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const initInputs = {
    capital: props.capital || "",
    active: props.active || "",
    drafted: props.drafted || "",
    position: props.position || "",
  };
  const [inputs, setInputs] = useState(initInputs);

  // to pass data through the inputs to state
  const handleChange = (e) => {
    const { name, value } = e.target; // what value is typed in to the input
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };
  // to submit data
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    props.submit(inputs, props._id); // post request and passing id to let know which to update/ prop is called submit to make easier to pass any function down
    setInputs(initInputs);
  };

  return (
      <div className={props.setEditToggle ? "container-b" : "container-a"}>
        <form
          onSubmit={(e) => handleSubmit(e)}
          id={props.setEditToggle ? "form-b" : "form-a"}
        >
          <div className={props.setEditToggle ? "small-box" : "user-box"}>
            <input
              id={props.setEditToggle ? "inputs-b" : "inputs-a"}
              className="inputs"
              placeholder="Capital"
              type="text"
              name="capital"
              value={inputs.capital}
              onChange={handleChange}
            />
          </div>
          <div className={props.setEditToggle ? "small-box" : "user-box"}>
            <input
              id={props.setEditToggle ? "inputs-b" : "inputs-a"}
              className="inputs"
              placeholder="Is active?"
              type="text"
              name="active"
              value={inputs.active}
              onChange={handleChange}
            />
          </div>
          <div className={props.setEditToggle ? "small-box" : "user-box"}>
            <input
              id={props.setEditToggle ? "inputs-b" : "inputs-a"}
              className="inputs"
              placeholder="Drafted"
              type="text"
              name="drafted"
              value={inputs.drafted}
              onChange={handleChange}
            />
          </div>
          <div className={props.setEditToggle ? "small-box" : "user-box"}>
            <input
              id={props.setEditToggle ? "inputs-b" : "inputs-a"}
              className="inputs"
              placeholder="position"
              type="text"
              name="position"
              value={inputs.position}
              onChange={handleChange}
            />
          </div>
          <div
            style={{
              display: props.btnText !== "Submit" ? "inline-block" : "block",
            }}
          >
            {props.btnText !== "Submit" ? (
              <button id="submit">{props.btnText}</button>
            ) : (
              <button id="edit-btn">{props.btnText}</button>
            )}
            {props.btnText === "Submit" ? (
              <button
                id="btn-close-submit"
                onClick={() => props.setEditToggle((prevToggle) => !prevToggle)}
              >
                Close
              </button>
            ) : (
              <></>
            )}
          </div>
        </form>
      </div>
  );
};
export default Form;
import React, { useState } from "react";
import Form from "../Form/Form";
import "./Content.css";
import "../Form/Form.css";

const Content = (props) => {
  const { capital, active, drafted, position, _id } = props;
  const [editToggle, setEditToggle] = useState(false);
  return (
    <div className="grid-container">
      <div className="capitals">
        {!editToggle ? (
          <>
            <div className="card">
              <p>capital: {capital}</p>
              <p>Active: {active}</p>
              <p>Drafted: {drafted}</p>
              <p>Position: {position}</p>
              <button
                className="delete-btn"
                onClick={() => props.deleteCapital(_id)}
              >
                Delete
              </button>
              <button
                className="edit-btn"
                onClick={() => setEditToggle((prevToggle) => !prevToggle)}
              >
                Edit
              </button>
            </div>
          </>
        ) : (
          <>
            <Form // using same form to update data as posting data
              capital={capital}
              active={active}
              drafted={drafted}
              position={position}
              _id={_id}
              btnText="Submit"
              setEditToggle={setEditToggle}
              submit={props.updateCapital}
            />
          </>
        )}
      </div>
    </div>
  );
};
export default Content;
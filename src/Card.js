import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div className="card">
      <img src={"todolist.png"} alt="todolist" />
      <div>
        <h1>To do list</h1>
        <p>
          To-Do App that build will allow a user to add a task to a list of
          to-do items. Once the task is added, the user will be able to delete
          it as completed once it has done.
        </p>
        <button>view</button>
      </div>
    </div>
  );
};

export default Card;

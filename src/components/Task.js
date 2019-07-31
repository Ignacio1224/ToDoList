import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";


class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false
    };
  }

  completeTask = () => {
    this.setState({ completed: true });
  };

  getColor = () => {
    const { completed } = this.state;

    return completed ? "primary" : "warning";
  };

  render() {
    const { description, remove, id } = this.props;
    const { completed } = this.state;

    return (
      <div className="row">
        <div className="col">
          <div className={`alert alert-${this.getColor()}`} role="alert">
            {description}
            {!completed && (
              <button
                type="button"
                className="close"
                style={{ outline: "none" }}
                aria-label="Close"
                onClick={this.completeTask}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            )}
          </div>
        </div>
        <div className="col-sm-1">
          <button type="button" className="btn btn-danger" id={id} onClick={remove}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </div>
    );
  }
}

export default Task;

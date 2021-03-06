import React, { Component } from "react";
import { createUser, updateUser, getUser } from "../service/UserService";
import {
  createCalendar,
  updateCalendar,
  getCalendar,
} from "../service/CalendarService";
import { Redirect } from "react-router-dom";
import { trimSequilzeDatesAndID } from "../util/ModelUtil";
import "./AddEditModel.css";

/** 
    Props:

    `reference` object should be a simple
    object representing the data model
    of a database model.

    For example, for a User, the reference
    prop would be set to this:
    reference: {
        username: {
            label: "Username",
            defaultValue: "",
            inputType: "text"
        },
        password: {
            label: "Password",
            defaultValue: "",
            inputType: "text"
        },
        timezone: {
            label: "Timezone",
            defaultValue: "",
            inputType: "text"
        }
    }

    **NOTE**: Doesn't currently support all inputTypes. Will upgrade in the future when necessary.

    `label` is just the user-friendly name for
    this model type. For example,

    `method` is the HTTP method we'd like to invoke for this model.
    Options are `POST`, and `PUT` as we are only dealing with adding and editing a model.

    `redirectURL` is where the user will be
    redirected if the submission was successful

    
*/
class AddEditModel extends Component {
  // Stores information about the model
  // defaultValue, inputType...
  modelMapCache = new Map(); //TODO: Remove new map initializaiton after development. Sepcified here to allow IntelliJ to autocomplete
  state = {};

  constructor(props) {
    super(props);

    const reference = this.props.location.state.reference;

    this.modelMapCache = new Map(
      Object.entries(this.props.location.state.reference)
    ); // Converts the object to a map for reference.

    const stateObject = {};

    for (const key in reference) {
      stateObject[key] = reference[key].defaultValue;
    }

    stateObject.submitted = false;

    if (this.props.location.state.method.toUpperCase() === "PUT") {
      stateObject.retrievedObject = false;
    }

    this.state = stateObject;

    //bind methods
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
    this.handleRetrieveModel = this.handleRetrieveModel.bind(this);
  }

  componentDidMount() {
    if (this.props.location.state.method.toUpperCase() === "PUT") {
      this.handleRetrieveModel();
    }
  }

  handleRetrieveModel() {
    //TODO: avoid repeating code and perhaps create a static map reference between label and a list of update and create methods

    const { id } = this.props.match.params.id;

    let requestPromise;
    switch (this.props.location.state.label) {
      case "User":
        requestPromise = getUser(id);
        break;
      case "Calendar":
        requestPromise = getCalendar(id);
        break;
      case "Event":
        break;
      default:
        console.error(
          `Given model label doesn't match any expected labels: ${this.props.location.state.label}`
        );
        break;
    }
    let thisReference = this;
    requestPromise
      .then((response) => {
        let model = response.data;

        model = trimSequilzeDatesAndID(model);

        thisReference.setState(model);
        thisReference.setState({
          retrievedObject: true,
        });
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  }

  handleSubmit(event) {
    event.preventDefault();

    let modelObject = {};

    // Populates the model object,
    // but ignores any non-model state
    for (const prop in this.state) {
      if (prop === "submitted" || prop === "retrievedObject") {
        continue;
      }

      modelObject[prop] = this.state[prop];
    }

    if (this.props.location.state.method.toUpperCase() === "POST") {
      // CREATING
      this.handleRequest(modelObject, true);
    } else if (this.props.location.state.method.toUpperCase() === "PUT")
      // EDITING
      this.handleRequest(modelObject, false);
  }

  handleRequest(modelObject, creating) {
    let requestPromise;
    let id;
    if (!creating) {
      id = this.props.match.params.id;
    }
    switch (this.props.location.state.label) {
      case "User":
        requestPromise = creating
          ? createUser(modelObject)
          : updateUser(id, modelObject);
        break;
      case "Calendar":
        requestPromise = creating
          ? createCalendar(modelObject)
          : updateCalendar(id, modelObject);
        break;
      case "Event":
        break;
      default:
        console.error(
          `Given model label doesn't match any expected labels: ${this.props.location.state.label}`
        );
        break;
    }

    requestPromise
      .then(() => {
        alert(
          `Successfully ${creating ? "created" : "edited"} ${
            this.props.location.state.label
          }!`
        );
        this.setState({ submitted: true });
      })
      .catch((error) => {
        alert(`An error has occured: ${error}`);
      });
  }

  render() {
    return (
      <>
        <h1>
          Welcome to the{" "}
          {this.props.location.state.method.toUpperCase() === "POST"
            ? "Add"
            : "Edit"}{" "}
          {this.props.location.state.label} Page!
        </h1>
        <form className="add-edit-form" onSubmit={(e) => this.handleSubmit(e)}>
          {[...this.modelMapCache.keys()].map((key) => {
            return (
              <label key={key}>
                {this.modelMapCache.get(key).label}:
                <input
                  value={this.state[key]}
                  type={this.modelMapCache.get(key).inputType}
                  onChange={(e) =>
                    this.setState({
                      [key]: e.target.value,
                    })
                  }
                />
              </label>
            );
          })}

          <button type="submit">Submit</button>
        </form>
        {this.state.submitted && (
          <Redirect to={this.props.location.state.redirectURL} />
        )}
      </>
    );
  }
}

export default AddEditModel;

import React, { Component } from "react";
import { createUser, updateUser } from "../UserService";
import { Redirect } from "react-router-dom";

/* 
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

    `id` is the id of a target model if specified. Used for editing

    `redirectURL` is where the user will be
    redirected if the submission was successful

    
*/
class AddEditModel extends Component {
  // Stores information about the model
  // defaultValue, inputType...
  modelMapCache = new Map(); //TODO: Remove new map initializaiton after development. Sepcified here to allow IntelliJ to autocomplete
  state = {
    username: {
      label: "Username",
      defaultValue: "",
      inputType: "text",
    },
    password: {
      label: "Password",
      defaultValue: "",
      inputType: "text",
    },
    timezone: {
      label: "Timezone",
      defaultValue: "",
      inputType: "text",
    },
  };

  constructor(props) {
    super(props);

    const { reference } = this.props;

    this.modelMapCache = new Map(Object.entries(reference)); // Converts the object to a map for reference.

    const stateObject = {};

    for (const key in reference) {
      stateObject[key] = reference[key].defaultValue;
    }

    stateObject.submitted = false;

    this.state = stateObject;

    //bind methods
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let modelObject = {};

    // Populates the model object,
    // but ignores any non-model state
    for (const prop in this.state) {
      if (prop === "submitted") {
        continue;
      }

      modelObject[prop] = this.state[prop];
    }

    console.log(`method is string: ${typeof this.props.method === "string"}`);

    if (this.props.method.toUpperCase() === "POST") {
      // CREATING
      this.handleRequest(modelObject, true);
    } else if (this.props.method.toUpperCase() === "PUT")
      // EDITING
      this.handleRequest(modelObject, false);
  }

  handleRequest(modelObject, creating) {
    let requestPromise;
    switch (this.props.label) {
      case "User":
        requestPromise = creating
          ? createUser(modelObject)
          : updateUser(this.props.id, modelObject);
        break;
      case "Calendar":
        break;
      case "Event":
        break;
      default:
        console.error(
          `Given model label doesn't match any expected labels: ${this.props.label}`
        );
        break;
    }

    requestPromise
      .then(() => {
        alert(
          `Successfully ${creating ? "created" : "edited"} ${this.props.label}!`
        );
        this.setState({ submitted: true });
      })
      .catch((error) => {
        alert(`An error has occured: ${error}`);
      });
  }

  handleOnClick(e) {
    console.log("Printing modelMapCache...");
    [...this.modelMapCache.keys()].forEach((key) => {
      console.log(`key: ${key} value: ${this.modelMapCache.get(key)}`);
    });
    console.log("Finished printing modelMapCache");
  }

  render() {
    return (
      <>
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
        <button onClick={this.handleOnClick}>Test</button>
        {this.submitted && <Redirect to={this.props.redirectURL} />}
      </>
    );
  }
}

export default AddEditModel;

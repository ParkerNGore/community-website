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
  state = {};

  componentDidMount() {
    const { reference } = this.props;

    this.modelMapCache = new Map(Object.entries(reference)); // Converts the object to a map for reference.

    const stateObject = {};

    console.log("Iterating through reference keys...");
    for (const key in reference) {
      console.log(`handling key: ${key}`);
      stateObject[key] = reference[key].defaultValue;
    }
    console.log("finished iterating through reference keys");

    stateObject.submitted = false;

    console.log("StateObject:");
    console.dir(stateObject);

    this.setState(stateObject, () => {
      // Debugging Purposes
      console.log("Showing state...");
      console.dir(this.state);
    });
  }

  handleSubmit(event) {
    console.dir(event);
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

    if (this.props.method.equalsIgnoreCase("POST")) {
      // CREATING
      this.handleCreation(modelObject, true);
    } else if (this.props.method.equalsIgnoreCase("PUT"))
      // EDITING
      this.handleCreation(modelObject, false);
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

  render() {
    return (
      <>
        <form className="add-edit-form" onSubmit={(e) => this.handleSubmit(e)}>
          {Array.from(this.modelMapCache, (key, valueObject) => {
            return (
              <label key={key}>
                ${valueObject.label}:
                <input
                  value={this.state[key]}
                  type={valueObject.inputType}
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
        {this.submitted && <Redirect to={this.props.redirectURL} />}
      </>
    );
  }
}

export default AddEditModel;

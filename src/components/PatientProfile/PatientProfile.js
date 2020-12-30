import React, { Component } from "react";
import format from "date-fns/format";

import differenceInDays from "date-fns/differenceInDays";
import userImage from "./../../assets/user.svg";
import backIcon from "./../../assets/svg/arrow-left.svg";
import ActivitySchedule from "../ActivitySchedule/ActivitySchedule";
import "./PatientProfile.css";

let ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ratingOptions = ratings.map((rating) => (
  <option key={rating} value={rating}>
    {rating}
  </option>
));

class PatientProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home",
      guides: this.props.guides,
      cough: false,
      coughRate: "",
      fever: false,
      feverRate: "",
      fatigue: false,
      fatigueRate: "",
      resp: false,
      respRate: "",
      other: false,
      otherName: "",
      otherRate: "",
      temp: "",
      openUploader: false,
      isAddingSymptoms: false,
      addingSymptomsStatus: "",
    };
  }

  async onButtonClick(page, submit) {
    this.setState({ page }, () => {
      console.log(this.state.page);
    });
  }

  handleRateChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    this.setState({ [name]: checked });
  };

  showUploader = () => {
    this.setState({ openUploader: !this.state.openUploader });
  };

  getSignUpDate = () => {
    return new Date(Date.parse(this.props.signUpDate));
  };

  getRemainingDays = () => {
    const remainingDays =
      14 - differenceInDays(new Date(), this.getSignUpDate());
    return remainingDays >= 0 ? remainingDays : 0;
  };

  setDisplay() {
    const { imageUrl } = this.props;

    if (this.state.isAddingSymptoms) {
      return (
        <div className="patient-profile-container">
          <div className="loading">
            <img src={require("../../assets/loading.gif")} alt="loader" />
          </div>
        </div>
      );
    }

    if (this.state.page === "home") {
      return (
        <>
          {this.state.addingSymptomsStatus === "SUCCESS"
            ? this.notificationModal(this.state.addingSymptomsStatus)
            : this.state.addingSymptomsStatus === "FAILURE" &&
              this.notificationModal(this.state.addingSymptomsStatus)}
          <div className="patient-profile-container">
            <h1>My Account</h1>
            <div className="patient-info">
              <img
                src={imageUrl || userImage}
                alt="patient"
                className="patient-profile-picture"
                onClick={this.showUploader}
              />
              <em>{this.props.firstName + " " + this.props.lastName}</em>
            </div>

            <div className="quarantine">
              <div className="objective">
                <span>Quarantine</span>
                <span>Track your stay at home.</span>
              </div>
              <div className="countdown">
                <span>{this.getRemainingDays()}</span>
                <span>Days</span>
              </div>
            </div>
            <em className="date">
              {"Started " + format(this.getSignUpDate(), "MMMM dd") + "."}
            </em>
            <button
              className="update-records-btn"
              onClick={() => {
                this.onButtonClick("symptom");
              }}
            >
              {" "}
              + Update Records{" "}
            </button>
            <ActivitySchedule
              guides={this.props.guides}
              setUserGuides={this.props.setUserGuides}
            />
          </div>
        </>
      );
    } else {
      return (
        <div className="patient-symptom-container">
          <img
            onClick={() => {
              this.onButtonClick("home");
            }}
            src={backIcon}
            alt="back-icon"
          />
          <h1>Add Symptoms</h1>
          <div className="select-boxes">
            <div className="select-box">
              <label htmlFor="cough">
                Cough
                <input
                  type="checkbox"
                  onClick={this.handleCheckboxChange}
                  id="cough"
                  name="cough"
                  value={this.state.cough}
                />
                <span className="check"></span>
              </label>
              {this.state.cough ? (
                <div className="rating">
                  <em>On a scale of 1-10, how serious is it ?</em>
                  <select
                    name="coughRate"
                    value={this.state.coughRate}
                    onChange={this.handleRateChange}
                    id="rating"
                  >
                    {ratingOptions}
                  </select>
                </div>
              ) : (
                console.log()
              )}
            </div>

            <div className="select-box">
              <label htmlFor="fever">
                Fever
                <input
                  type="checkbox"
                  onChange={this.handleCheckboxChange}
                  id="fever"
                  name="fever"
                  value={this.state.fever}
                />
                <span className="check"></span>
              </label>
              {this.state.fever ? (
                <div className="rating">
                  <em>Body Temperature</em>
                  <input
                    type="number"
                    name="feverRate"
                    value={this.state.feverRate}
                    onChange={this.handleRateChange}
                    id="rating"
                  />
                </div>
              ) : (
                console.log()
              )}
            </div>
            <div className="select-box">
              <label htmlFor="fatigue">
                Fatigue
                <input
                  type="checkbox"
                  name="fatigue"
                  value={this.state.fatigue}
                  onChange={this.handleCheckboxChange}
                  id="fatigue"
                />
                <span className="check"></span>
              </label>
              {this.state.fatigue ? (
                <div className="rating">
                  <em>On a scale of 1-10, how serious is it ?</em>
                  <select
                    name="fatigueRate"
                    value={this.state.fatigueRate}
                    onChange={this.handleRateChange}
                    id="rating"
                  >
                    {ratingOptions}
                  </select>
                </div>
              ) : (
                console.log()
              )}
            </div>

            <div className="select-box">
              <label htmlFor="resp">
                Respiratory Problems
                <input
                  type="checkbox"
                  name="resp"
                  value={this.state.resp}
                  onChange={this.handleCheckboxChange}
                  id="resp"
                />
                <span className="check"></span>
              </label>
              {this.state.resp ? (
                <div className="rating">
                  <em>On a scale of 1-10, how serious is it ?</em>
                  <select
                    name="respRate"
                    value={this.state.respRate}
                    onChange={this.handleRateChange}
                    id="rating"
                  >
                    {ratingOptions}
                  </select>
                </div>
              ) : (
                console.log()
              )}
            </div>

            <div className="select-box">
              <label htmlFor="other">
                Others
                <input
                  type="checkbox"
                  onClick={this.handleCheckboxChange}
                  id="other"
                  name="other"
                  value={this.state.other}
                />
                <span className="check"></span>
              </label>
              {this.state.other ? (
                <div className="rating">
                  <input
                    type="text"
                    name="otherName"
                    value={this.state.otherName}
                    onChange={this.handleRateChange}
                    placeholder="What symptoms are you showing"
                  />
                  <em>On a scale of 1-10, how serious is it ?</em>
                  <select
                    name="otherRate"
                    value={this.state.otherRate}
                    onChange={this.handleRateChange}
                    id="rating"
                  >
                    {ratingOptions}
                  </select>
                </div>
              ) : (
                console.log()
              )}
            </div>

            <button
              onClick={() => {
                this.onButtonClick("home", "submit");
              }}
            >
              {" "}
              Submit{" "}
            </button>
          </div>
        </div>
      );
    }
  }

  render() {
    return this.setDisplay();
  }
}

export default PatientProfile;

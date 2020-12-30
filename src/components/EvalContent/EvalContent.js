import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import countries from "./countries.js";
import "./EvalContent.css";

let countryOptions = countries.map((country) => (
  <option key={country} value={country}>
    {country}
  </option>
));

class EvalContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      signUpMethod: "",
      email: "",
      tel: "",
      address: "",
      image_url: "",
      visitedCountry: false,
      state: "",
      Age: "",
      countryVisited: "",
      country: "",
      yesBtnActive: false,
      pageNo: 1,
      showTermsOfService: true,
      isSigningUp: false,
      signUpStatus: "",
    };
  }

  handleChange = (event, type) => {
    let name = event.target.name;
    let value;
    if (type) {
      value = event.target.checked;
    } else {
      event.preventDefault();
      value = event.target.value;
    }

    this.setState({ [name]: value });
  };

  switchPage = (e) => {
    if (e) e.preventDefault();
    this.setState((prevState) => {
      return { pageNo: prevState.pageNo + 1 };
    });
  };

  onSubmit = (data) => {
    const { errors } = this.props;

    if (Object.keys(errors).length > 0) return;

    this.setState({ ...data });

    if (this.state.pageNo === 5) {
      this.setState({ isSigningUp: true });
      this.completeSignUp();
      return;
    }

    this.switchPage();
  };

  renderComp = () => {
    const { pageNo } = this.state;

    switch (pageNo) {
      case 1:
        return (
          <>
            <em>First, tell us a few things about you</em>
            <button className="eval-continue-btn" onClick={this.switchPage}>
              Continue
            </button>
          </>
        );
      case 2:
        return (
          <>
            <em> What is your name ? </em>
            <input
              className="eval-first-name-input"
              type="text"
              name="firstName"
              placeholder="First Name"
              key="firstName"
            />

            <input
              className="eval-last-name-input"
              type="text"
              name="lastName"
              placeholder="Last Name"
              key="lastName"
            />

            <em> How old are you ? </em>
            <input
              className="eval-first-name-input"
              type="number"
              name="Age"
              placeholder="Your Age"
              key="Age"
            />
          </>
        );
      case 3:
        return (
          <>
            <em>Contact Info</em>
            <input
              className="eval-first-name-input"
              type="text"
              name="tel"
              placeholder="Phone Number"
              key="tel"
            />

            <input
              className="eval-last-name-input"
              type="text"
              name="email"
              placeholder="Email"
              key="email"
            />
          </>
        );
      case 4:
        return (
          <>
            <select id="countries" name="ownCountry" key={"ownCountry"}>
              <option value="Select home country" defaultValue hidden>
                Select home country
              </option>
              {countryOptions}
            </select>

            <input
              className="eval-state-input"
              type="text"
              name="state"
              placeholder="State"
              key={"state"}
            />

            <input
              className="eval-address-input"
              type="text"
              name="address"
              placeholder="Address"
              key={"address"}
            />
          </>
        );
      case 5:
        return (
          <div>
            <em>In the last 14 days, have you traveled to any country? </em>
            <div className="yes-no-btn">
              <button className="yes inactive" onClick={this.yesButtonClick}>
                Yes
              </button>
              <button className="inactive no" onClick={this.noButtonClick}>
                No
              </button>
            </div>

            {this.state.yesBtnActive && (
              <>
                <select
                  id="countries"
                  name="countryVisited"
                  key={"phone_number"}
                >
                  <option value="select country" hidden defaultValue>
                    Select the country
                  </option>
                  {countryOptions}
                </select>
              </>
            )}
            <div className="terms-container">
              <input
                className="terms"
                id="terms"
                type="checkbox"
                name="terms"
              />
              <label for="terms">
                I have read and agree with the{" "}
                <span className="show-terms" onClick={this.handleTermsChange}>
                  Terms of Service
                </span>
              </label>
            </div>
          </div>
        );
      default:
        return <em> The end </em>;
    }
  };

  handleTermsChange = (event) => {
    event.preventDefault();
    this.setState({ showTermsOfService: true });
  };

  yesButtonClick = (event) => {
    event.preventDefault();
    try {
      document.querySelector(".active").classList.remove("active");
    } catch (err) {}

    event.target.classList.remove("inactive");
    event.target.classList.add("active");
    this.setState({ yesBtnActive: true, visitedCountry: true });
  };

  noButtonClick = (event) => {
    event.preventDefault();
    try {
      document.querySelector(".active").classList.remove("active");
    } catch (err) {}
    event.target.classList.remove("inactive");
    event.target.classList.add("active");
    this.setState({ yesBtnActive: false, visitedCountry: false });
  };

  displayContinueBtn = () => {
    if (this.state.pageNo > 1 && this.state.pageNo < 5) {
      return (
        <input
          type="submit"
          className="eval-next-btn"
          onClick={this.switchPage}
          value="Next"
        />
      );
    } else if (this.state.pageNo === 5) {
      return (
        <Link to="/Patient" className="eval-next-btn">
          Submit
        </Link>
      );
    }
  };

  setAge = () => {
    if (this.state.Age) {
      const age = parseInt(this.state.Age);
      if (age === 0) return 1;
      return age;
    }
    return 1;
  };

  render() {
    const { currentUser } = this.props;

    if (currentUser === null) {
      return <Redirect to="/signup" />;
    }

    return (
      <div className="eval-content-container">
        {this.state.signUpStatus === "FAIL" ? (
          <p className="signup-update">
            Sorry, something went wrong during signup.
          </p>
        ) : this.state.signUpStatus === "SUCCESS" ? (
          <p className="signup-update">Signup complete.</p>
        ) : this.state.isSigningUp ? (
          <div className="loading">
            <img src={require("../../assets/loading.gif")} alt="loader" />
          </div>
        ) : (
          <form>
            {this.renderComp()}

            {this.displayContinueBtn()}
          </form>
        )}
      </div>
    );
  }
}

export default EvalContent;

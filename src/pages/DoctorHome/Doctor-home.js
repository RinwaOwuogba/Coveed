import React from "react";

import Report from "../../components/DoctorHomeReports/DoctorHomeReports";
import ProfilePic from "../../assets/svg/avatar.svg";
import "./Doctor-home.css";

class doctorHome extends React.Component {
  constructor() {
    super();
    this.state = {
      patients: [],
    };
  }

  setSymptoms = (symptoms) => {
    let finalSymptoms = [];
    if (symptoms[symptoms.length - 1]) {
      symptoms = symptoms[symptoms.length - 1];
      if (symptoms.cough) finalSymptoms.push("Cough");
      if (symptoms.fever) finalSymptoms.push("Fever");
      if (symptoms.fatigue) finalSymptoms.push("Fatigue");
      if (symptoms.resp) finalSymptoms.push("Respiratory Problems");
      if (symptoms.other) finalSymptoms.push(`${symptoms.other}`);
      return finalSymptoms.join(", ");
    }
    return null;
  };

  getReportComponents = (user, index) => (
    <Report
      name={`${user.first_name} ${user.last_name}`}
      profileImg={ProfilePic}
      symptom={this.setSymptoms(user.symptoms)}
      key={index}
      patient={user}
    />
  );

  componentDidMount() {
    const result = [
      {
        med_state: "Mild",
        remarks: [
          {
            doctor_id: 1,
            date_created: "2020-11-14T11:48:54.736591",
            id: 5,
            content:
              "Your symptoms indicate an increase in your hoodlum vibes make a change please!",
            user_id: 5,
          },
          {
            doctor_id: 1,
            date_created: "2020-11-14T11:49:37.788286",
            id: 6,
            content:
              "Be sure to Soro Soke while you complete your activity schedule",
            user_id: 5,
          },
        ],
        country: "Nigeria",
        age: 20,
        symptoms: [
          {
            date_added: "2020-09-30T01:48:50.867814",
            specifics: {
              cough_degree: "5",
              fever_degree: "38",
              id: 4,
              other_degree: "",
              fatigue_degree: "4",
              symptom_id: 4,
            },
            fever: true,
            id: 4,
            cough: true,
            user_id: 5,
            fatigue: true,
            resp: false,
            other: "",
          },
        ],
        state: "Ogun",
        email: "paulcurious7@gmail.com",
        user_id: "OSskqlAQNZQdy6SBnBx15wA7Vdj1",
        address: "#19,Alhaji Alayaki Street,Enilolo b/stop",
        last_name: "Curious",
        first_name: "Paul",
        profile_pic:
          "https://lh3.googleusercontent.com/a-/AOh14GiQPvUhJSZARfPVSIoiGE0dgtNolNDgzu2YI_sD",
        guides: [
          {
            name: "Pain Medication",
            done: false,
            info: "Acetaminophen (Tylenol)",
            time_lapse: "hours=4",
          },
          {
            name: "Zinc Supplement",
            done: false,
            info: "Cold-Eeze lozenges",
            time_lapse: "hours=4",
          },
          {
            name: "Vitamin C",
            done: false,
            info: "Vitamin-C",
            time_lapse: "days=1",
          },
        ],
        id: 5,
        travel_history: false,
        sign_up_date: "2020-09-30T01:48:15.208964",
        tel: "08135694596",
        days_left: 0,
      },
      {
        med_state: "Mild",
        remarks: [
          {
            doctor_id: 1,
            date_created: "2020-11-14T11:48:54.736591",
            id: 5,
            content:
              "Your symptoms indicate an increase in your hoodlum vibes make a change please!",
            user_id: 5,
          },
          {
            doctor_id: 1,
            date_created: "2020-11-14T11:49:37.788286",
            id: 6,
            content:
              "Be sure to Soro Soke while you complete your activity schedule",
            user_id: 5,
          },
        ],
        country: "Nigeria",
        age: 20,
        symptoms: [
          {
            date_added: "2020-09-30T01:48:50.867814",
            specifics: {
              cough_degree: "5",
              fever_degree: "38",
              id: 4,
              other_degree: "",
              fatigue_degree: "4",
              symptom_id: 4,
            },
            fever: true,
            id: 4,
            cough: true,
            user_id: 5,
            fatigue: true,
            resp: false,
            other: "",
          },
        ],
        state: "Ogun",
        email: "paulcurious7@gmail.com",
        user_id: "OSskqlAQNZQdy6SBnBx15wA7Vdj1",
        address: "#19,Alhaji Alayaki Street,Enilolo b/stop",
        last_name: "Curious",
        first_name: "Paul",
        profile_pic:
          "https://lh3.googleusercontent.com/a-/AOh14GiQPvUhJSZARfPVSIoiGE0dgtNolNDgzu2YI_sD",
        guides: [
          {
            name: "Pain Medication",
            done: false,
            info: "Acetaminophen (Tylenol)",
            time_lapse: "hours=4",
          },
          {
            name: "Zinc Supplement",
            done: false,
            info: "Cold-Eeze lozenges",
            time_lapse: "hours=4",
          },
          {
            name: "Vitamin C",
            done: false,
            info: "Vitamin-C",
            time_lapse: "days=1",
          },
        ],
        id: 5,
        travel_history: false,
        sign_up_date: "2020-09-30T01:48:15.208964",
        tel: "08135694596",
        days_left: 0,
      },
      {
        med_state: "Mild",
        remarks: [
          {
            doctor_id: 1,
            date_created: "2020-11-14T11:48:54.736591",
            id: 5,
            content:
              "Your symptoms indicate an increase in your hoodlum vibes make a change please!",
            user_id: 5,
          },
          {
            doctor_id: 1,
            date_created: "2020-11-14T11:49:37.788286",
            id: 6,
            content:
              "Be sure to Soro Soke while you complete your activity schedule",
            user_id: 5,
          },
        ],
        country: "Nigeria",
        age: 20,
        symptoms: [
          {
            date_added: "2020-09-30T01:48:50.867814",
            specifics: {
              cough_degree: "5",
              fever_degree: "38",
              id: 4,
              other_degree: "",
              fatigue_degree: "4",
              symptom_id: 4,
            },
            fever: true,
            id: 4,
            cough: true,
            user_id: 5,
            fatigue: true,
            resp: false,
            other: "",
          },
        ],
        state: "Ogun",
        email: "paulcurious7@gmail.com",
        user_id: "OSskqlAQNZQdy6SBnBx15wA7Vdj1",
        address: "#19,Alhaji Alayaki Street,Enilolo b/stop",
        last_name: "Curious",
        first_name: "Paul",
        profile_pic:
          "https://lh3.googleusercontent.com/a-/AOh14GiQPvUhJSZARfPVSIoiGE0dgtNolNDgzu2YI_sD",
        guides: [
          {
            name: "Pain Medication",
            done: false,
            info: "Acetaminophen (Tylenol)",
            time_lapse: "hours=4",
          },
          {
            name: "Zinc Supplement",
            done: false,
            info: "Cold-Eeze lozenges",
            time_lapse: "hours=4",
          },
          {
            name: "Vitamin C",
            done: false,
            info: "Vitamin-C",
            time_lapse: "days=1",
          },
        ],
        id: 5,
        travel_history: false,
        sign_up_date: "2020-09-30T01:48:15.208964",
        tel: "08135694596",
        days_left: 0,
      },
      {
        med_state: "Mild",
        remarks: [
          {
            doctor_id: 1,
            date_created: "2020-11-14T11:48:54.736591",
            id: 5,
            content:
              "Your symptoms indicate an increase in your hoodlum vibes make a change please!",
            user_id: 5,
          },
          {
            doctor_id: 1,
            date_created: "2020-11-14T11:49:37.788286",
            id: 6,
            content:
              "Be sure to Soro Soke while you complete your activity schedule",
            user_id: 5,
          },
        ],
        country: "Nigeria",
        age: 20,
        symptoms: [
          {
            date_added: "2020-09-30T01:48:50.867814",
            specifics: {
              cough_degree: "5",
              fever_degree: "38",
              id: 4,
              other_degree: "",
              fatigue_degree: "4",
              symptom_id: 4,
            },
            fever: true,
            id: 4,
            cough: true,
            user_id: 5,
            fatigue: true,
            resp: false,
            other: "",
          },
        ],
        state: "Ogun",
        email: "paulcurious7@gmail.com",
        user_id: "OSskqlAQNZQdy6SBnBx15wA7Vdj1",
        address: "#19,Alhaji Alayaki Street,Enilolo b/stop",
        last_name: "Curious",
        first_name: "Paul",
        profile_pic:
          "https://lh3.googleusercontent.com/a-/AOh14GiQPvUhJSZARfPVSIoiGE0dgtNolNDgzu2YI_sD",
        guides: [
          {
            name: "Pain Medication",
            done: false,
            info: "Acetaminophen (Tylenol)",
            time_lapse: "hours=4",
          },
          {
            name: "Zinc Supplement",
            done: false,
            info: "Cold-Eeze lozenges",
            time_lapse: "hours=4",
          },
          {
            name: "Vitamin C",
            done: false,
            info: "Vitamin-C",
            time_lapse: "days=1",
          },
        ],
        id: 5,
        travel_history: false,
        sign_up_date: "2020-09-30T01:48:15.208964",
        tel: "08135694596",
        days_left: 0,
      },
      {
        med_state: "Mild",
        remarks: [
          {
            doctor_id: 1,
            date_created: "2020-11-14T11:48:54.736591",
            id: 5,
            content:
              "Your symptoms indicate an increase in your hoodlum vibes make a change please!",
            user_id: 5,
          },
          {
            doctor_id: 1,
            date_created: "2020-11-14T11:49:37.788286",
            id: 6,
            content:
              "Be sure to Soro Soke while you complete your activity schedule",
            user_id: 5,
          },
        ],
        country: "Nigeria",
        age: 20,
        symptoms: [
          {
            date_added: "2020-09-30T01:48:50.867814",
            specifics: {
              cough_degree: "5",
              fever_degree: "38",
              id: 4,
              other_degree: "",
              fatigue_degree: "4",
              symptom_id: 4,
            },
            fever: true,
            id: 4,
            cough: true,
            user_id: 5,
            fatigue: true,
            resp: false,
            other: "",
          },
        ],
        state: "Ogun",
        email: "paulcurious7@gmail.com",
        user_id: "OSskqlAQNZQdy6SBnBx15wA7Vdj1",
        address: "#19,Alhaji Alayaki Street,Enilolo b/stop",
        last_name: "Curious",
        first_name: "Paul",
        profile_pic:
          "https://lh3.googleusercontent.com/a-/AOh14GiQPvUhJSZARfPVSIoiGE0dgtNolNDgzu2YI_sD",
        guides: [
          {
            name: "Pain Medication",
            done: false,
            info: "Acetaminophen (Tylenol)",
            time_lapse: "hours=4",
          },
          {
            name: "Zinc Supplement",
            done: false,
            info: "Cold-Eeze lozenges",
            time_lapse: "hours=4",
          },
          {
            name: "Vitamin C",
            done: false,
            info: "Vitamin-C",
            time_lapse: "days=1",
          },
        ],
        id: 5,
        travel_history: false,
        sign_up_date: "2020-09-30T01:48:15.208964",
        tel: "08135694596",
        days_left: 0,
      },
    ];
    if (result) {
      const patients = result.map((patient, index) =>
        this.getReportComponents(patient, index)
      );
      this.setState({ patients });
    }
  }

  render() {
    return (
      <>
        <div className="dhomeContainer">
          <div className="dhomeHeader">
            <div className="dh-container">
              <h1>Welcome Dr Emmanuel</h1>
              <p>
                We appreciate your efforts in fighting covid-19
                <br />
                Please check for recently sent reports
              </p>
            </div>
          </div>
          <input name="search-home" className="search" />
          {this.state.patients.length ? (
            <div className="reports">{this.state.patients}</div>
          ) : (
            <h2>Loading patients...</h2>
          )}
        </div>
      </>
    );
  }
}

export default doctorHome;

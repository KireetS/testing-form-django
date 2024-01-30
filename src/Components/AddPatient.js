import React, { useState } from "react";
import axios from "axios";
const AddPatient = () => {
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [nationalID, setNationID] = useState("");
  const [passportID, setPassportID] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDOB] = useState();
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [btype, setBtype] = useState("");

  const inputdata = {
    patient_name: name,
    nationality: nationality,
    national_id: nationalID,
    p_email: email,
    phone_number: phone,
    Gender: gender,
    date_of_birth: dob,
    p_age: age,
    address: address,
    age_type: btype,
  };
  const submit = async (e) => {
    e.preventDefault();
    try {
      axios.post("localhost:8000/add", inputdata);
    } catch (e) {
      console.log("error occured");
    }
  };

  return (
    <form action="POST" name="patient" onSubmit={submit}>
      <div>
        <label htmlFor="">Patient Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="">Nationality</label>
        <input
          type="text"
          value={nationality}
          onChange={(e) => {
            setNationality(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="">Naitonal ID</label>
        <input
          type="text"
          value={nationalID}
          onChange={(e) => {
            setNationID(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="">Passport ID</label>
        <input
          type="text"
          value={passportID}
          onChange={(e) => {
            setPassportID(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="">Phone Number</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor=""> Gender </label>
        <input
          type="text"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="">Date Of birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => {
            setDOB(e.target.value);
            console.log(dob);
          }}
        />
        <div>
          <select
            value={btype}
            onChange={(e) => {
              setBtype(e.target.value);
            }}
          >
            <option>Years</option>

            <option>Months</option>

            <option>Days</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="">Age</label>
        <input
          type="Number"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="">address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
      </div>
      <div>
        <input type="submit" name="" id="" />
      </div>
    </form>
  );
};

export default AddPatient;

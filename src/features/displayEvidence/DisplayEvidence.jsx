import React, { useState } from "react";
import { ethers } from "ethers";
import styles from "../../index.module.css";
import smartContract from "../../services";

export function DisplayEvidence() {
  const [userInputs, setUserInputs] = useState({});
  const [caseToDisplay, setCaseToDisplay] = useState("");

  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    setUserInputs({ ...userInputs, [name]: value });
  };

  const handleDisplayCase = () => {
    smartContract.GetEvidence(userInputs.caseId).then(function (result) {
      console.log(result);
      setCaseToDisplay(result);
    });
  };
  return (
    <div className={styles.upload_container}>
      <h1>View Case</h1>
      <div
        className={styles.input_group_container}
        style={{ marginBottom: "40px" }}
      >
        <div className={styles.input_label_container}>
          <label htmlFor="caseTitle">Case ID:</label>
          <input
            className={styles.styled_input}
            placeholder="ID of the case"
            type="text"
            name="caseId"
            onChange={handleInputChanges}
          />
        </div>
        <button className={styles.submit_button} onClick={handleDisplayCase}>
          Submit
        </button>
      </div>
      {caseToDisplay ? (
        <div>
          <hr />
          <div>
            <h2>{caseToDisplay?._caseTitle}</h2>
            <div className={styles.input_group_container}>
              <div>{`Case ID: ${caseToDisplay?._caseId.toNumber()}`}</div>
              <div>{`Case Category: ${caseToDisplay?._catogory}`}</div>
              <div>{`Case Handled By: ${caseToDisplay?._caseHandledBy}`}</div>
              <div>
                {`Date and Time: ${caseToDisplay?._date}  ${caseToDisplay?._time}`}{" "}
              </div>
              <div>{`Place: ${caseToDisplay?._place}`}</div>
              <div>Evidences: </div>
            </div>
            <div className={styles.evidence_list_container}>
              {caseToDisplay?._evidence.map((link, i) => {
                return (
                  <a target="_blank" href={link} rel="noreferrer">{`Evidence ${
                    i + 1
                  }`}</a>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

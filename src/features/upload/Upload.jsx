import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { create } from "ipfs-http-client";

import styles from "../../index.module.css";

import smartContract from "../../services";

export function Upload() {
  const client = create("https://ipfs.infura.io:5001/api/v0");

  const [userInputs, setUserInputs] = useState({
    caseCategory: "civil",
    evidences: [],
  });
  const [filesCount, setFilesCount] = useState(1);

  const [filesUploaded, setFilesUploaded] = useState([]);
  const [ipfsHashes, setIpfsHashes] = useState([]);

  const onFileChange = async (event) => {
    setFilesUploaded([...filesUploaded, event.target.files[0]]);

    try {
      const added = await client.add(event.target.files[0]);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setIpfsHashes([...ipfsHashes, url]);

      setUserInputs({
        ...userInputs,
        evidences: [...userInputs.evidences, url],
      });
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  const handleAddMoreFiles = () => {
    setFilesCount(filesCount + 1);
  };

  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    setUserInputs({ ...userInputs, [name]: value });
  };

  const handleCaseRegister = () => {
    // setUserInputs({ ...userInputs, evidences: ipfsHashes });

    smartContract
      .CreateEvidence(
        userInputs.caseId,
        userInputs.caseTitle,
        userInputs.caseCategory,
        userInputs.caseHandledBy,
        userInputs.caseDate,
        userInputs.caseTime,
        userInputs.place,
        userInputs.evidences
      )
      .then(function (result) {
        console.log(result);
      });
  };

  useEffect(() => {
    console.log("file: Upload.jsx ~ line 23 ~ userInputs", userInputs);
  }, [userInputs]);

  return (
    <div className={styles.upload_container}>
      <h1>Register Case</h1>
      <div style={{ display: "flex", columnGap: "30px" }}>
        <div className={styles.input_group_container}>
          <div className={styles.input_label_container}>
            <label htmlFor="caseTitle">Case Title:</label>
            <input
              className={styles.styled_input}
              type="text"
              name="caseTitle"
              onChange={handleInputChanges}
            />
          </div>
          <div className={styles.input_label_container}>
            <label htmlFor="caseId">Case ID:</label>

            <input
              className={styles.styled_input}
              onChange={handleInputChanges}
              type="text"
              name="caseId"
            />
          </div>
          <div className={styles.input_label_container}>
            <label htmlFor="caseCategory">Case Category:</label>
            <select
              className={styles.styled_select}
              name="caseCategory"
              id="caseCategory"
              onChange={handleInputChanges}
            >
              <option className={styles.styled_option} value="civil">
                Civil
              </option>
              <option className={styles.styled_option} value="criminal">
                Criminal
              </option>
            </select>
          </div>
          <div className={styles.input_label_container}>
            <label htmlFor="caseHandledBy">Case Handled By:</label>
            <input
              className={styles.styled_input}
              type="text"
              name="caseHandledBy"
              onChange={handleInputChanges}
            />
          </div>

          <div className={styles.input_label_container}>
            <label htmlFor="caseDate">Date:</label>
            <input
              className={styles.styled_input}
              type="date"
              name="caseDate"
              onChange={handleInputChanges}
            />
          </div>
          <div className={styles.input_label_container}>
            <label htmlFor="caseTime">Time:</label>
            <input
              className={styles.styled_input}
              type="time"
              name="caseTime"
              onChange={handleInputChanges}
            />
          </div>
          <div className={styles.input_label_container}>
            <label htmlFor="place">Place:</label>
            <input
              className={styles.styled_input}
              type="text"
              name="place"
              onChange={handleInputChanges}
            />
          </div>
          <button className={styles.submit_button} onClick={handleCaseRegister}>
            Register
          </button>
        </div>
        <div className={styles.input_group_container}>
          {[...Array(filesCount)].map(() => {
            return (
              <div className={styles.input_label_container}>
                <label htmlFor="evidence">Upload Evidence:</label>
                <input
                  className={styles.styled_input}
                  type="file"
                  name="evidence"
                  onChange={onFileChange}
                />
              </div>
            );
          })}
          <button className={styles.add_button} onClick={handleAddMoreFiles}>
            Add More
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { ethers } from "ethers";
import styles from "../../index.module.css";
import smartContract from "../../services";

export function GrandAccess() {
  const [userInputs, setUserInputs] = useState({});

  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    setUserInputs({ ...userInputs, [name]: value });
  };

  const handleGrandAccess = async() => {
    console.log(userInputs);
    let result = await smartContract
    .grandAccess(userInputs.caseId, userInputs.address);
           console.log(result);
           if(result){
             smartContract.on("GrandAccess",(newaddress, event)=>{
              console.log("newOwner", newaddress);
              console.log("newOwnerevent", event)
             })
           }
   
  };

  return (
    <div className={styles.upload_container}>
      <h1>Grand Access</h1>
      <div className={styles.input_group_container}>
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

        <div className={styles.input_label_container}>
          <label htmlFor="caseTitle">Wallet Address:</label>
          <input
            className={styles.styled_input}
            placeholder="Wallet address of user to grant access to"
            type="text"
            name="address"
            onChange={handleInputChanges}
          />
        </div>
        <button className={styles.submit_button} onClick={handleGrandAccess}>
          Submit
        </button>
      </div>
    </div>
  );
}

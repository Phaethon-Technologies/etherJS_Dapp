import React, { useState } from "react";
import { ethers } from "ethers";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "./loginSlice";
import styles from "./Login.module.css";

export function Login() {
  const dispatch = useDispatch();
  //   const [incrementAmount, setIncrementAmount] = useState("2");

  //   const incrementValue = Number(incrementAmount) || 0;
  const authenticate = () => {
    window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
      console.log(res);

      // validate eth address=
      if (/^(0x){1}[0-9a-fA-F]{40}$/i.test(res)) {
        window.ethereum
          .request({
            method: "eth_getBalance",
            params: [res[0], "latest"],
          })
          .then((balance) => {
            console.log(balance);
            
            dispatch(signIn());
          });
      }
    });
  };

  return (
    <div>
      <div className={styles.container}>
        {/* <h1>Evidence Management</h1>
        <div className={styles.login_form_container}>
          <input className={styles.login_inputs} placeholder="Username" />
          <input className={styles.login_inputs} placeholder="Password" />
          <button
            className={styles.login_button}
            onClick={() => authenticate()}
          >
            Login
          </button>
          <a href="#">Or Register here</a>
        </div> */}
        <h1>Evidence Management</h1>
        <button className={styles.login_button} onClick={() => authenticate()}>
          Login With MetaMask
        </button>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { Upload } from "../../features/upload/Upload";
import { GrandAccess } from "../../features/grandAccess/GrandAccess";
import { DisplayEvidence } from "../../features/displayEvidence/DisplayEvidence";
import styles from "./MainPage.module.css";

import smartContract from "../../services";

export function MainPage() {
  let navigate = useNavigate();
  const [loginAccount, setLoginAccount] = useState([]);

  return (
    <div>
      <div className={styles.main_layout}>
        <div className={styles.header}>
          <div
            className={styles.logout_button}
            style={{ float: "right", position: "relative", top: "10%" }}
          >
            Logout
          </div>
        </div>
        <div className={styles.sidebar}>
          <div
            className={styles.sidebarItems}
            onClick={() => {
              navigate(`/`);
            }}
          >
            Upload Evidence
          </div>
          <div
            className={styles.sidebarItems}
            onClick={() => {
              navigate(`/access`);
            }}
          >
            Grant Access
          </div>
          <div
            className={styles.sidebarItems}
            onClick={() => {
              navigate(`/display`);
            }}
          >
            Display Evidence
          </div>
        </div>

        {/* content will switch with the help of react router */}
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Upload />} />
            <Route path="/display" element={<DisplayEvidence />} />
            <Route path="/access" element={<GrandAccess />} />
          </Routes>
        </div>
        {/* ------------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------------- */}
      </div>
    </div>
  );
}

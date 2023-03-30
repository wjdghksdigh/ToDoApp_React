import React from "react";
import PageTitle from "./Components/PageTitle";
import AppHeader from "./Components/AppHeaders";
import styles from "./styles/modules/app.module.scss";

function App() {
  return (
      <>
        <div className="container">
          <PageTitle> HWANToDo </PageTitle>
          <div className={styles.app__wrapper}>
          <AppHeader />
        </div>
        </div>
      </>
  );
}

export default App;

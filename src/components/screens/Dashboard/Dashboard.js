import Task from "components/Task";

import styles from "./dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <h1>Dashboard</h1>
      <Task />
    </div>
  );
};

export default Dashboard;

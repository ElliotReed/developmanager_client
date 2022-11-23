import * as React from 'react';
import { Link } from 'react-router-dom';

import TaskService from "services/TaskService";

import DateDisplay from 'components/common/datetime/DateDisplay';
import { ScreenHeading } from 'components/common/Heading';

import styles from "./dashboard.module.scss";
export default function Dashboard() {
  const [projectTasks, setProjectTasks] = React.useState([])

  React.useEffect(() => {
    TaskService.getTasks('/project')
      .then(data => { setProjectTasks(data) })
  }, [])

  return (
    <div className={styles.Dashboard}>
      <ScreenHeading>Dashboard</ScreenHeading>
      <ProjectTasks projectTasks={projectTasks} />
    </div>
  );
}

function ProjectTasks({ projectTasks }) {
  return (
    <section className={styles.projectTasks}>
      <h2>Project task list</h2>
      <ul className={styles.listWrapper}>
        {projectTasks.map(task => {
          return (
            <ProjectTaskListItem task={task} />
          );
        }
        )}
      </ul>
    </section>
  )
}

function ProjectTaskListItem({ task }) {
  return (
    <li className={styles.projectTaskListItem} key={task.id}>
      <Link to={`/projects/${task.project.id}`}>{task.project.name}</Link>
      <br />
      <div>
        {task.task}
        <span>
          <DateDisplay date={task.dtStart} />
        </span>
      </div>
    </li>
  );
}
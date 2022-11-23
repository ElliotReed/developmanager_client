import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

import useTask from "./useTask";

import AddEditTask from "./AddEditTask";
import Modal from "components/common/Modal";
import TaskList from "./TaskList";
import Toolbar from "components/common/Toolbar";
import ToolbarButton from "components/common/Button/ToolbarButton";

import styles from "./task.module.scss";

function TaskHeader({ modal, setShowFutureTasks, showFutureTasks }) {
  return (
    <header>
      <h3>Tasks</h3>

      <Toolbar>
        <ToolbarButton
          onClick={() => modal.current.open()}
          title="Add task"
        >
          <FontAwesomeIcon icon={["fas", "plus"]} />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => setShowFutureTasks(!showFutureTasks)}
          title="Toggle task view"
        >
          <FontAwesomeIcon icon={["fas", "sort"]} />
          <span className={styles.taskViewTextContainer}>
            {showFutureTasks ? "upcoming tasks" : "current tasks"}
          </span>

        </ToolbarButton>
      </Toolbar>
    </header>
  );
}
export default function Task({ foreignId }) {
  const [showFutureTasks, setShowFutureTasks] = React.useState(false);
  const { tasks, addTask, futureTasks, handleCheckCompleted, updateTasks, updateTask } =
    useTask(foreignId, showFutureTasks && "future=true");
  const modal = React.useRef(null);

  return (
    <div className={styles.task}>
      <TaskHeader modal={modal}
        showFutureTasks={showFutureTasks}
        setShowFutureTasks={setShowFutureTasks}

      />

      <TaskList
        tasks={tasks}
        futureTasks={futureTasks}
        showFutureTasks={showFutureTasks}
        updateTasks={updateTasks}
        updateTask={updateTask}
        handleCheckCompleted={handleCheckCompleted}
      />
      <Modal ref={modal} fade={true}>
        <AddEditTask
          foreignId={foreignId}
          closeModal={() => modal.current.close()}
          addTask={addTask}
        />
      </Modal>
    </div>
  );
}

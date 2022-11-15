import Selector from "./Selector";
import Project from "./Project";
import { ScreenHeading } from 'components/common/Heading';

import useProjects from "./useProjects";

import styles from "./Projects.module.scss";

export default function Projects({ match }) {
  const { projects, addToProjects, updateProjects, deleteProject, loading } =
    useProjects();

  return (
    <div className={styles.manager}>
      <ScreenHeading>Projects</ScreenHeading>

      <Selector
        projects={projects}
        loading={loading}
        addToProjects={addToProjects}
      />

      <Project
        match={match}
        projects={projects}
        updateProjects={updateProjects}
        deleteProject={deleteProject}
      />
    </div>
  );
}

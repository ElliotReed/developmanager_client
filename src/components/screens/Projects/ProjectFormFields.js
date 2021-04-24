import React from "react";

export default function Fields(project, handleChange) {
  return (
    <>
      <label>
        project name
        <input
          name="name"
          type="text"
          value={project.name}
          onChange={handleChange}
        />
      </label>
      <label>
        archive
        <input
          name="archive"
          type="checkbox"
          checked={project.archive}
          onChange={handleChange}
        />
      </label>
    </>
  );
}

import React from "react"

import style from "./message-block.module.scss"

export default function MessageBlock({ type, message }) {
  let classAttributes

  switch (type) {
    case "error":
      classAttributes = `${style.message} ${style.error}`
      break
    case "warning":
      classAttributes = `${style.message} ${style.warning}`
      break
    case "success":
      classAttributes = `${style.message} ${style.success}`
      break
    default:
      classAttributes = `${style.message} ${style.success}`
      break
  }

  return <div className={classAttributes}>{message}</div>
}

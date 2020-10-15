import React from "react"

import MaxWidthContainer from "./MaxWidthContainer"
import style from "./item-block.module.scss"

export default function ItemBlock({ children, color = "secondary" }) {
  let backgroundColorStyle = style.secondary
  if (color === "primary") {
    backgroundColorStyle = style.primary
  }
  console.log(color)
  return (
    <div className={backgroundColorStyle}>
      <MaxWidthContainer>
        <div className={style.paddedContainer}>{children}</div>
      </MaxWidthContainer>
    </div>
  )
}

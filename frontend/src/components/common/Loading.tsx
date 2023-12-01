import { Fragment } from "react"

import styles from "../../styles/common/loading.module.css"

interface Props {
  commend?: string  
}

const Loading = ({commend}: Props) => {
  return (
    <Fragment>
      <div className={styles.loading}>
        <h2>{commend}</h2>
        <div className={styles.loader}></div>
      </div>
    </Fragment>
  )
}

export default Loading
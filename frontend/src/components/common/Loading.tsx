import { Fragment } from "react"

import styles from "../../styles/common/loading.module.css"

const Loading = () => {
  return (
    <Fragment>
      <div className={styles.loading}>
        <div className={styles.loader}></div>
      </div>
    </Fragment>
  )
}

export default Loading
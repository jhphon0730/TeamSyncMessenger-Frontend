import { Fragment, useEffect } from "react"

import Loading from "../components/common/Loading"

import { RunClient } from "../../wailsjs/go/client/Client"

const ConnectionCheckPage = () => {
  useEffect(() => {
    RunClient()
  }, [])

  return (
    <Fragment>
      <Loading />
    </Fragment>
  )
}

export default ConnectionCheckPage
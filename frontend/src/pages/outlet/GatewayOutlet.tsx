import { Fragment, useEffect } from "react"
import { Outlet } from "react-router-dom"

const GatewayOutlet = () => {
  useEffect(() => {
  }, [])

  return (
    <Fragment>
      <Outlet />
    </Fragment>
  )
}

export default GatewayOutlet
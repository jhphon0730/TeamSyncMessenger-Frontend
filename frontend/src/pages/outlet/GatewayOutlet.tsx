import { Fragment, useEffect } from "react"
import { useCookies } from "react-cookie";
import { Outlet, useNavigate } from "react-router-dom"

import { RemoveUserCookie, SetUserCookie } from "../../cookie/cookie";

const GatewayOutlet = () => {
  const navigate = useNavigate()
  const [ cookies ] = useCookies(['id', 'username', 'token']);

  useEffect(() => {
    if (cookies.id && cookies.token && cookies.username) {
      alert("접근이 불가능합니다.")
      navigate("/app")
    } else {
      RemoveUserCookie()
    }
  }, [cookies])

  return (
    <Fragment>
      <Outlet />
    </Fragment>
  )
}

export default GatewayOutlet
import React from "react"
import { useCookies } from "react-cookie";
import { Outlet, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';

import { InitialGatewayPage } from "../../../wailsjs/go/initial/Initial";

import { RemoveUserCookie } from "../../cookie/cookie";

import { updateServerStatus } from "../../slices/serverStatusSlice";
import { OfflineServerState } from "../../actions/serverStateAction";
import { RootState } from "../../store";

const GatewayOutlet = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const serverStatus = useSelector((state: RootState) => state.serverStatus.status);

  const [ cookies ] = useCookies(['id', 'username', 'token']);

  React.useEffect(() => {
    InitialGatewayPage()
  }, [])

  // 로그인 상태가 아니면 
  React.useEffect(() => {
    if (cookies.id && cookies.token && cookies.username) {
      alert("접근이 불가능합니다.")
      navigate("/app")
    } else {
      RemoveUserCookie()
      dispatch(updateServerStatus(OfflineServerState))
      navigate("/")
    }
  }, [cookies])

  // 서버가 오프라인 메시지를 받는다면 -> Runtime Event
  // React.useEffect(() => {
  //   if (serverStatus == OfflineServerState) {
  //     navigate("/")
  //   } 
  // }, [serverStatus])

  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  )
}

export default GatewayOutlet
import React from "react"
import { useCookies } from "react-cookie";
import { Outlet, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';

import { EventsOn } from "../../../wailsjs/runtime/runtime"
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

  // 서버 오프라인 상태 & 서버 종료 문구 로딩 페이지로 이동 
  EventsOn('server_close', () => {
    dispatch(updateServerStatus(OfflineServerState))
    navigate("/")
  })

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
    }
  }, [cookies])

  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  )
}

export default GatewayOutlet
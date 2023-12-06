import React from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';

import { RunClient } from "../../wailsjs/go/client/Client"

import Loading from "../components/common/Loading"

import { OnlineServerState } from "../actions/serverStateAction";
import { updateServerStatus } from "../slices/serverStatusSlice";
import { RootState } from "../store";

const ConnectionCheckPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()  

  const serverStatus = useSelector((state: RootState) => state.serverStatus.status);
  const [isConnected, setIsConnected] = React.useState(false);
   
  const intervalIdRef = React.useRef<number | null>(null);

  // 서버 연결 성공 상태면 뒤로가기
  // 5초마다 서버에 연결 시도
  React.useEffect(() => {
    if (serverStatus == OnlineServerState) {
      navigate(-1)
      return
    }

    intervalIdRef.current = setInterval(() => {
      ConnectToServerHandler();
    }, 5000);
    return () => clearInterval(intervalIdRef.current!);
  }, []);

  // 서버에 연결 성공하면 서버 연결 시도 중지 
  React.useEffect(() => {
    if (isConnected) {
      dispatch(updateServerStatus(OnlineServerState))
      clearInterval(intervalIdRef.current!);
      navigate("/user/login")
    }
  }, [isConnected]);

  const ConnectToServerHandler = async (): Promise<void> => {
    const connectState = await RunClient()
    setIsConnected(() => connectState)
    return
  }

  return (
    <React.Fragment>
      { !isConnected && <Loading commend="서버 연결중"/> }
    </React.Fragment>
  )
}

export default ConnectionCheckPage
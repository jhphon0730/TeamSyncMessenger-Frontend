import { Fragment, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';

import Loading from "../components/common/Loading"

import { RunClient } from "../../wailsjs/go/client/Client"

import { OnlineServerState } from "../actions/serverStateAction";
import { updateServerStatus } from "../slices/serverStatusSlice";

const ConnectionCheckPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()  

  const [isConnected, setIsConnected] = useState(false);
   
  const intervalIdRef = useRef<number | null>(null);

  // 5초마다 서버에 연결 시도
  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      ConnectToServerHandler();
    }, 5000);
    return () => clearInterval(intervalIdRef.current!);
  }, []);

  // 서버에 연결 성공하면 서버 연결 시도 중지 
  useEffect(() => {
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
    <Fragment>
      { !isConnected && <Loading commend="서버 연결중"/> }
    </Fragment>
  )
}

export default ConnectionCheckPage
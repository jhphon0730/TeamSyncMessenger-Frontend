import { Fragment, useEffect, useRef, useState } from "react"

import Loading from "../components/common/Loading"

import { RunClient } from "../../wailsjs/go/client/Client"

const ConnectionCheckPage = () => {
  const [isConnected, setIsConnected] = useState(false);
   
  const intervalIdRef = useRef<number | null>(null);

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      ConnectToServerHandler();
    }, 5000);
    return () => clearInterval(intervalIdRef.current!);
  }, []);

  // 서버에 연결 성공하면 서버 연결 시도 중지 
  useEffect(() => {
    if (isConnected) {
      clearInterval(intervalIdRef.current!);
    }
  }, [isConnected]);

  const ConnectToServerHandler = async (): Promise<void> => {
    const connectState = await RunClient()
    setIsConnected(() => connectState)
    console.log("Connect");
    
    return
  }

  return (
    <Fragment>
      {  }
      <Loading commend="서버 연결중"/>
    </Fragment>
  )
}

export default ConnectionCheckPage
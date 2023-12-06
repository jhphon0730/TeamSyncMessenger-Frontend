// ServerStatusMonitor.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { EventsOn } from "../../../wailsjs/runtime/runtime"

import { RootState } from '../../store';
import { OfflineServerState } from '../../actions/serverStateAction';
import { updateServerStatus } from '../../slices/serverStatusSlice';

const ServerStatusMonitor = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const serverStatus = useSelector((state: RootState) => state.serverStatus.status);

  // 서버 오프라인 상태 & 서버 종료 문구 로딩 페이지로 이동 
  EventsOn('server_close', () => {
    dispatch(updateServerStatus(OfflineServerState))
    navigate("/")
  })

  // 서버가 오프라인 
  React.useEffect(() => {
    if (serverStatus == OfflineServerState) {
      navigate("/")
    } 
  }, [serverStatus])

  return (
    <div>
    </div>
  );
};

export default ServerStatusMonitor;

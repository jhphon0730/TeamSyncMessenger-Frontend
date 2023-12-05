// ServerStatusMonitor.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store';

const ServerStatusMonitor: React.FC = () => {
  const serverStatus = useSelector((state: RootState) => state.serverStatus.status);

  return (
    <div>
    </div>
  );
};

export default ServerStatusMonitor;

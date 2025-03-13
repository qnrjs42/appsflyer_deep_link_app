import {useEffect} from 'react';
import {requestTrackingPermission} from 'react-native-tracking-transparency';

const usePermission = () => {
  useEffect(() => {
    requestTrackingPermission();
  }, []);
};

export default usePermission;

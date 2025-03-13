import {Platform} from 'react-native';
import appsFlyer from 'react-native-appsflyer';

import config from '@config';

appsFlyer.initSdk(
  {
    devKey: config.appsflyer_dev_key,
    isDebug: true,
    appId: Platform.OS === 'ios' ? config.store_app_id : undefined,
    onInstallConversionDataListener: false,
    onDeepLinkListener: true, //Optional
    timeToWaitForATTUserAuthorization: 10, //for iOS 14.5
  },
  () => {
    console.log('AppsFlyer initSdk success');
  },
  error => {
    console.log('AppsFlyer initSdk error', error);
  },
);

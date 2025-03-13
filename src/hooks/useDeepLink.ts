import {useCallback, useEffect} from 'react';
import appsFlyer from 'react-native-appsflyer';
import {useNavigation} from '@react-navigation/native';
import {Linking} from 'react-native';

const useDeepLink = () => {
  const navigation = useNavigation();

  const navigateToDeepLink = useCallback(
    (status: 'FOUND' | 'NOT_FOUND' | 'Error', value: string) => {
      // 딥 링크 없는 경우 종료
      if (status === 'FOUND') {
        const [type, id] = value.split('/');

        switch (type) {
          case 'dl':
            navigation.navigate('DeepLink', {
              id,
            });
            break;
          default:
            break;
        }
      }
    },
    [navigation],
  );

  // 앱이 실행 중인 상태에서 딥링크를 클릭했을 때
  useEffect(() => {
    appsFlyer.onDeepLink(result => {
      navigateToDeepLink(result.deepLinkStatus, result.data.deep_link_value);
    });

    appsFlyer.startSdk();

    return (): void => {
      appsFlyer.stop(true);
    };
  }, [navigateToDeepLink]);

  // 앱이 종료된 상태에서 딥링크를 클릭했을 때
  useEffect((): void => {
    Linking.getInitialURL().then(url => {
      if (url) {
        // 딥링크 수동으로 연결 - https://dev.appsflyer.com/hc/docs/android-sdk-reference-appsflyerlib#performonappattribution
        appsFlyer.performOnAppAttribution(
          url,
          () => null,
          () => null,
        );
      }
    });
  }, []);
};

export default useDeepLink;

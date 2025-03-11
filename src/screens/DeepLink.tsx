import {DeepLinkScreenProps} from '@typings/navigation';
import type {FC} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const DeepLinkScreen: FC<DeepLinkScreenProps> = ({route}) => {
  return (
    <SafeAreaView>
      <View>
        <Text>DeepLink Screen</Text>
        <Text>deep link id: {route.params?.id || 'empty'}</Text>
      </View>
    </SafeAreaView>
  );
};

export default DeepLinkScreen;

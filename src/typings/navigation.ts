import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackNavigatorTypes = {
  Home: undefined;
  DeepLink: {
    id: string;
  };
};

export type DeepLinkScreenProps = NativeStackScreenProps<
  RootStackNavigatorTypes,
  'DeepLink'
>;

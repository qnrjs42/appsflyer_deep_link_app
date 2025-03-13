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

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackNavigatorTypes {}
  }
}

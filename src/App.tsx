import useDeepLink from '@hooks/useDeepLink';
import usePermission from '@hooks/usePermission';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DeepLinkScreen from '@screens/DeepLink';
import HomeScreen from '@screens/Home';
import {RootStackNavigatorTypes} from '@typings/navigation';
import {navigationLinking} from '@utils/consts';

const RootStack = createNativeStackNavigator<RootStackNavigatorTypes>();

function App() {
  return (
    <NavigationContainer linking={navigationLinking}>
      <InApp />
    </NavigationContainer>
  );
}

export default App;

function InApp() {
  usePermission();
  useDeepLink();

  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="DeepLink" component={DeepLinkScreen} />
    </RootStack.Navigator>
  );
}

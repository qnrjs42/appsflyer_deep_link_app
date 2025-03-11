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
      <RootStack.Navigator initialRouteName="DeepLink">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="DeepLink" component={DeepLinkScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;

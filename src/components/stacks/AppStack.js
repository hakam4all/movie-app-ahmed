import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import MoreDetails from "../listItems/MoreDetails"

const Stack = createNativeStackNavigator()

const AppStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Movies App',
          headerStyle: {
            backgroundColor: '#3FBDD2'

          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name='Back To List'
        component={MoreDetails}
      />

    </Stack.Navigator>
  </NavigationContainer>

)

export default AppStack

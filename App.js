import { GluestackUIProvider } from '@gluestack-ui/themed'
import { StatusBar } from 'expo-status-bar'
import { config } from '@gluestack-ui/config'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppStack from './src/components/stacks/AppStack'

const App = () => {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <AppStack />
        <StatusBar style='#3FBDD2' />
      </GluestackUIProvider>
    </SafeAreaProvider>
  )
}

export default App


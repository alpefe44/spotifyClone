import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import Navigation from './navigation/navigation';
import PlayerProvider from './providers/PlayerProvider';
import ApolloClientProvider from './providers/ApolloClientProvider';


export default function App() {
  return (
    <ApolloClientProvider>
      <PlayerProvider>
        <Navigation></Navigation>
      </PlayerProvider>
    </ApolloClientProvider>

  );
}


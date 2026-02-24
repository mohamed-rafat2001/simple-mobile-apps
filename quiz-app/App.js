import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View} from 'react-native';
import QuizScreen from './src/app/QuizScreen.jsx';
import QuizProvider from './src/providers/QuizProvider.jsx';




export default function App() {
  
  return (
    
        <View style={styles.container}>
          <QuizProvider>
            <QuizScreen/>
          </QuizProvider>
          <StatusBar style="black" />
        </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

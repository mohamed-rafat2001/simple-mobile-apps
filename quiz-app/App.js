import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View} from 'react-native';
import QuizScreen from './src/app/QuizScreen.jsx';




export default function App() {
  
  return (
    
        <View style={styles.container}>
          <QuizScreen/>
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

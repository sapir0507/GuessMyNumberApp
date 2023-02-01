// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/main/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
  // <StatusBar/>
  <LinearGradient 
    colors={['#4e0329', '#ddb52f']}
    style={styles.rootScreen}>
      <ImageBackground 
        source = {require('./assets/images/backgound/background.png')} 
        resizeMode='cover' 
        imageStyle={styles.ImageBackgroundStyle}
        style={styles.rootScreen}>
        <StartGameScreen/>
      </ImageBackground>
  </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  ImageBackgroundStyle:{
    opacity:0.15
  }
});

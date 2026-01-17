import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const message = "Hello world"
  return (
    <View style={styles.container}>
      <View style={styles.square}>
          <Text style={{fontSize: 30,}}>{message}</Text>
      </View>
      <StatusBar style="auto" />
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

  square: {
      backgroundColor: 'aqua',
      width:200,
      height: 200,   
      justifyContent:'center',
      alignItems:'center',
  },
  
});

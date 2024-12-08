import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeEkran from './src/screens/HomeEkran';
import CoursesEkran from './src/screens/CoursesEkran';
import CoursInfo from './src/screens/CoursInfo';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on  app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    // ceux ci sont les pages du sujet 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeEkran} />
        <Stack.Screen name="Courses" component={CoursesEkran} />
        <Stack.Screen name="CoursInfo" component={CoursInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});

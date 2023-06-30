import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"

import ListeOeuvres from './screens/ListeOeuvres';
import AjoutOeuvre from './screens/AjoutOeuvre';
import GestionOeuvre from './screens/GestionOeuvre';
//import ListeArticle from './screens/ListeArticle';
//import Exo1 from './screens/Exo1';
//import Exo2 from './screens/Exo2';
//import Exo3 from './screens/Exo3';

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <View style={styles.container}>
       <NavigationContainer>
          <Drawer.Navigator screenOptions={{
            unmountOnBlur : true
          }}>

          <Drawer.Screen name={'Oeuvres'} component={ListeOeuvres} /> 
          <Drawer.Screen name={'Ajout Oeuvre'} component={AjoutOeuvre} />
          <Drawer.Screen name={'Gestion Oeuvre'} component={GestionOeuvre} /> 
        </Drawer.Navigator>
      </NavigationContainer>  
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
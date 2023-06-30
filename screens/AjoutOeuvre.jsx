import { StyleSheet, Text, View , TextInput , Button } from 'react-native'
import React , {useState} from 'react'
import { db } from '../config/firebase';
import { addDoc , collection } from "firebase/firestore"

export default function AjouterOeuvre({setUpdate}) {

    const [Oeuvre , setOeuvre] = useState({})

    function remplirOeuvre ( valeurSaisie , nom){
        const cloneOeuvre = {...Oeuvre};
        cloneOeuvre[nom] = valeurSaisie;
        setOeuvre(cloneOeuvre)
    }

    function submit(){
        addDoc(collection(db , "Oeuvres"), Oeuvre)
            .then(function(){
                alert("l'oeuvre a été ajoutée en Bdd");
                setOeuvre({})
                setUpdate(function(update){ return !update})
            })
    }

  return (
    <View>
      <Text style={styles.titre}>AjouterOeuvre</Text>
      <TextInput 
        placeholder={'nom oeuvre'} 
        style={styles.input} 
        onChangeText={function(textSaisie){  remplirOeuvre(textSaisie , "nom") }} 
        value={Oeuvre.nom}/>
      <TextInput 
        placeholder={'description'} 
        style={styles.input} 
        onChangeText={function(textSaisie){  remplirOeuvre(textSaisie , "description") }} 
        value={Oeuvre.description}/>
      <TextInput 
        placeholder={'url de l image de l oeuvre'} 
        style={styles.input}  
        onChangeText={function(textSaisie){  remplirOeuvre(textSaisie , "url") }} 
        value={Oeuvre.url}/>
      <TextInput 
        placeholder={'auteur'} 
        style={styles.input} 
        onChangeText={function(textSaisie){  remplirOeuvre(textSaisie , "auteur") }} 
        value={Oeuvre.auteur}/>
       <TextInput 
        placeholder={'dt_creation'} 
        style={styles.input} 
        onChangeText={function(textSaisie){  remplirOeuvre(textSaisie , "dt_creation") }} 
        value={Oeuvre.dt_creation}/>
      <View>
        <Button title={'ajouter'} onPress={submit} color={'#6527BE'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    titre : {fontSize : 25 , marginBottom : 20 },
    input : { borderColor : "black" , borderWidth :1 , marginBottom : 20 , padding : 10 , borderRadius : 10 }
})
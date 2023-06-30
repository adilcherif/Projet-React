import { StyleSheet, Text, View , TextInput , Button } from 'react-native'
import React , {useState} from 'react'
import { db } from '../config/firebase';
import { doc , updateDoc} from "firebase/firestore"

export default function ModifOeuvre({item, setId , setUpdate}) {
    const [oeuvre, setOeuvre] = useState(function(){
        delete item.password
        return item
    })

    function remplir(textSaisi , nom ){
        const cloneOeuvre = {...oeuvre};
        cloneOeuvre[nom] = textSaisi ;
        setOeuvre(cloneOeuvre);
    }

    function submit(id){

            updateDoc(doc(db, "Oeuvres" , id ), oeuvre )
                    .then(function(){
                        setId("");
                        setOeuvre({})
                        setUpdate(function(update){ return !update})
                         
                    })

    }

  return (
    <View>
      <Text>ModifOeuvre</Text>
      <TextInput 
        placeholder='nom' 
        style={styles.input} 
        value={oeuvre.nom} 
        onChangeText={function(textSaisi){ remplir(textSaisi , "nom" ) }}
        />
      <TextInput 
        placeholder='description'  
        style={styles.input} 
        value={oeuvre.email}
        onChangeText={function(textSaisi){ remplir(textSaisi , "description" ) }}
        />
      <TextInput 
        placeholder='url'  
        style={styles.input} 
        onChangeText={function(textSaisi){ remplir(textSaisi , "url" ) }}
        />
      <TextInput 
        placeholder='auteur'  
        style={styles.input} 
        value={oeuvre.role}
        onChangeText={function(textSaisi){ remplir(textSaisi , "auteur" ) }}
        />
        <TextInput 
        placeholder='dt_creation'  
        style={styles.input} 
        value={oeuvre.role}
        onChangeText={function(textSaisi){ remplir(textSaisi , "dt_creation" ) }}
        />

      <Button title={"go"} onPress={function(){
        submit(oeuvre.id)
      }}  color={'green'} />
    </View>
  )
}

const styles = StyleSheet.create({
    input : { borderColor : "black" , borderWidth :1 , marginBottom : 20 , padding : 10 , borderRadius : 10 }
})
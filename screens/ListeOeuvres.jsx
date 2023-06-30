import { StyleSheet, Text, View ,Image,Dimensions, FlatList } from 'react-native'
import React , {useState , useEffect} from 'react'
import { db } from '../config/firebase'
import {getDocs , collection } from "firebase/firestore"

export default function ListeOeuvres() {

   const [Oeuvres , setOeuvres] = useState([])
    useEffect( function(){
        getDocs(collection(db, "Oeuvres"))
            .then(function(reponse){ 
                const resultat = reponse.docs.map(function(doc){
                    return doc.data()
                })
                setOeuvres(resultat)
            })
    } , []) 

  return (
    <View>
      <Text>ListeOeuvres</Text>
      <FlatList 
        data={Oeuvres}
        renderItem={function({item}){
            return <View>
                <Text style={{fontSize : 25}}>{item.nom}</Text>
                <Image style={{alignSelf: "center"}}
                        source={{ 
                            uri : item.url , 
                            width: Dimensions.get("window").width - 40 , 
                            height : 100 
                        }} 
                        fadeDuration={2000}
                />
                <Text style={{alignSelf: "center"}}>{item.description}</Text>
                <Text style={{alignSelf: "center"}}>{item.auteur}</Text>
                <Text style={{alignSelf: "center"}}>{item.dt_creation}</Text>
            </View>
        }}
        keyExtractor={function(){ return Math.random().toString() }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
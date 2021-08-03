import {StyleSheet} from "react-native";

export default StyleSheet.create({
   ex: {
       paddingHorizontal : 30,
       marginVertical : 10,
       borderRadius : 20,
       borderWidth : 3,
       borderColor: 'yellow',
       fontSize : 25,
       fontWeight : 'bold',
       color : "green"
   } ,
   entrada:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
    
  },
   txtG:{
       fontSize: 42
    },
    input: {
        paddingHorizontal : 40,
       marginVertical : 20,
       borderRadius : 20,
       borderWidth : 6,
       borderColor: 'powderblue',
       fontSize : 25,
       fontWeight : 'bold',
       color : "darkblue"
    },
    resultado:{
        alignSelf: "center",
        color: 'forestgreen',
        backgroundColor: 'rgba(150, 150, 150, 0.2)',
        borderColor: 'darkgray',
        borderBottomWidth: 6,
        marginTop: 20,
        fontSize: 40,
        fontWeight: 'bold',
        padding: 3,
    },
})
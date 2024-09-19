import { StyleSheet } from "react-native" //é um componente que eu vou usar para fazer os estilos

const styles = StyleSheet.create ({
    container: {
      backgroundColor: '#ffffff',
      flex: 1,
      padding: 20,
    },
  
    styleGet: {
      backgroundColor: '#ce929d',
      flex: 1
    },
  
    stylePost: {
      backgroundColor: '#eeb0bb',
      flex: 1
    },
  
    boxGet: {
      height: 25,
      borderRadius: 5,
      padding: 5,
      backgroundColor: '#ffdbe1',
      width: "90%",
      marginBottom: 10,
      marginLeft: 8,
    },
  
    boxPost: {
      height: 25,
      borderRadius: 5,
      padding: 5,
      backgroundColor: '#fff',
      width: "90%",
      marginBottom: 10,
      marginLeft: 8,
    },
  
    boxText: {
      marginLeft: 8,
      fontWeight: 500,
      padding: 5,
    },
  
    boxID: {
      width: "20%",
      height: 25,
      borderRadius: 5,
      backgroundColor: "#fff",
      marginBottom: 10,
      marginLeft: 10,
      padding: 5,
    },
  
    btn: {
      width: "14%",
      height: 25,
      backgroundColor: "#8f5863",
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 10,
    },

    boxNew: {
      height: 25,
      borderRadius: 5,
      padding: 5,
      backgroundColor: '#ffdbe1',
      width: "90%",
      marginBottom: 10,
      marginLeft: 8,
    },

    banner: {
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'space-between'
    },

    column: {
      flexDirection: 'column',
    },

    poster: {
      width: "30%",
      height: 'auto',
      backgroundColor: '#ffdbe1',
      marginRight: 50,
      marginTop: 27
    }
})

export default styles //o styles não é pelo nome do arquivo, é pela constante que ta armazenando meus estilos
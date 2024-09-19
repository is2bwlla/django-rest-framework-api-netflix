import { StyleSheet } from "react-native" //é um componente que eu vou usar para fazer os estilos

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 300,
        paddingBottom: 300,
    },

    users: {
        backgroundColor: '#eeb0bb',
        width: "85%",
        alignItems: 'center',
        justifyContent: 'center', // Adicione isso para centralizar o conteúdo verticalmente e horizontalmente
        flexDirection: 'column',
        borderRadius: 20,
        paddingVertical: 20,
    },

    text: {
        fontWeight: 500,
        color: 'black',
        marginBottom: 10,
    },

    input: {
        width: "65%",
        height: 25,
        borderRadius: 2,
        backgroundColor: "#ffdbe1",
        marginBottom: 10,
        borderColor: '#8f5863',
        padding: 8,
        outlineWidth: 0,
    },

    btn: {
        width: "30%",
        height: 25,
        backgroundColor: "#8f5863",
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginRight: 8,
    },

    boxEnter: {
        flexDirection: 'row',
        width: "85%",
        minHeight: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default styles //o styles não é pelo nome do arquivo, é pela constante que ta armazenando meus estilos
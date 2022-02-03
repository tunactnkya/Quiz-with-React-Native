import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from "../components/title";

const Home = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <Title />
            <View style={styles.banner_container} >
                <Image style={styles.banner} source={{
                    uri:
                        'https://www.tradoc.fr/wp-content/uploads/sites/3058/2019/04/quiz-mgps.jpg'
                }}
                    resizeMode="contain"
                />
            </View>
            <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('Quiz')} >
                <Text style={styles.buttonText}>Start!</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Home;

const styles = StyleSheet.create({
    banner: {
        height: 400,
        width: 400
    },
    banner_container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
    },
    container:{
        paddingHorizontal:20,
        height:'100%'
    },
    button:{
        width:'100%',
        backgroundColor:'#7DC147',
        padding:20,
        borderRadius:20,
        alignItems:'center',
        marginBottom:40
    },
    buttonText:{
        fontSize:23,
        fontWeight:'600',
        color:'white',

    }
})
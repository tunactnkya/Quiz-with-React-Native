import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Result = ({ navigation }) => {
    return (
        <View>
            <View>
                <Text>Result</Text>
            </View>
            <View style={styles.banner_container} >
                <Image style={styles.banner} source={{
                    uri:
                        'https://www.tradoc.fr/wp-content/uploads/sites/3058/2019/04/quiz-mgps.jpg'
                }}
                    resizeMode="contain"
                />
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Result;

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300
    },
    banner_container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container:{
        paddingHorizontal:20,
        height:'100%'
    }
});

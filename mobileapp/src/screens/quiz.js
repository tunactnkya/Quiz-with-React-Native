import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const Quiz = ({ navigation }) => {
    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const getQuiz = async () => {
        const url = 'https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=boolean';
        const res = await fetch(url);
        const data = await res.json();
        setQuestions(data.results);
    }
    useEffect(() => {
        getQuiz()
    }, []);
    return (
        <View style={styles.container} >
            {questions &&
                <View>
                    <View style={styles.top} >
                        <Text style={styles.question} > Q.İmagine this is a really cool questions</Text>
                    </View>
                    <View style={styles.options} >
                        <TouchableOpacity style={styles.optionButton} >
                            <Text style={styles.option} >Option 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton}  >
                            <Text style={styles.option} >Option 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton}  >
                            <Text style={styles.option} >Option 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton}  >
                            <Text style={styles.option} >Option 1</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottom} >
                        <TouchableOpacity style={styles.button} >
                            <Text style={styles.buttonText} >SKIP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} >
                            <Text style={styles.buttonText}  >NEXT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Result')} >
                            <Text style={styles.buttonText} >END</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </View>

    );
};
export default Quiz;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        height: '100%'
    },
    top: {
        marginVertical: 16
    },
    options: {
        marginVertical: 16,

    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#7DC147',
        padding: 12,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 40,
        paddingHorizontal: 16
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
    question: {
        fontSize: 28,
    },
    option: {
        fontSize: 17,
        fontWeight: '500',
        color: 'white'
    },
    optionButton: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: '#7DC147',
        paddingHorizontal: 12,
        borderRadius: 12,
    }
});

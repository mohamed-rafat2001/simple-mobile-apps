import {View,StyleSheet,Text, Pressable} from 'react-native';
import QuestionCard from '../components/QuestionCard';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function QuizScreen() {

    const questionsList = [{
        id:1,
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        id:2,
        question: "What is the capital of Germany?",
        options: ["Berlin", "Paris", "London", "Madrid"],
        answer: "Berlin"
    },
        
    {
        id:3,
        question: "What is the capital of Italy?",
        options: ["Rome", "Paris", "London", "Madrid"],
        answer: "Rome"
    },
    {
        id:4,
        question: "What is the capital of Spain?",
        options: ["Madrid", "Paris", "London", "Berlin"],
        answer: "Madrid"
    },
        
    {
        id:5,
        question: "What is the capital of Portugal?",
        options: ["Lisbon", "Paris", "London", "Madrid"],
        answer: "Lisbon"
    },              
    {
        
        id:6,
        question: "What is the capital of Switzerland?",
        options: ["Bern", "Paris", "London", "Madrid"],
        answer: "Bern"
    },
    ];
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleNextButton = ()=>{
        currentQuestion < questionsList.length - 1 &&
            setCurrentQuestion(currentQuestion + 1)
        
    }

    const handlePrevButton = ()=>{
        currentQuestion > 0 &&
            setCurrentQuestion(currentQuestion - 1)
        
    }
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.page}>

               <View style={styles.container}>

                    {/* Header */}
                    <View >
                        <Text style={styles.headerText}>Question {currentQuestion + 1}/{questionsList.length}</Text>
                    </View>

                    <View>
                        {/* Question Card */}
                        <QuestionCard question={questionsList[currentQuestion]} id={currentQuestion + 1} />
                        <Text style={styles.timerText}>20 sec</Text>
                    </View>

                     {/* Footer */}
                    <Pressable style={styles.buttonContainer}
                        onPress={handleNextButton}>
                        <Text style={styles.buttonText} >Next</Text>
                        <Text style={[{right:20}, styles.buttonIcon]} >{'----->'}</Text>
                    </Pressable>
                     <Pressable style={styles.buttonContainer}
                        onPress={handlePrevButton}>
                        <Text style={styles.buttonText} >Prev</Text>
                        <Text style={[{left:20}, styles.buttonIcon]} >{'<-----'}</Text>
                    </Pressable>
                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    )
}
const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:"#FDFEF4",
    },
    container: {
        flex:1,
       justifyContent:"space-between",
        padding:20
    },
    headerText:{
        fontSize:18,
        color:"#005055",
        fontWeight:"500",
        textAlign:"center"
    },
    timerText:{
        marginTop:10,
        textAlign:"center",
        fontSize:16,
        color:"#005055",
        fontWeight:"500"
    },
    buttonContainer:{
        borderRadius:30,
        backgroundColor:"#005055",
        justifyContent:"center",
        alignItems:"center",
        cursor:"pointer"
    },
    
    buttonText:{
        padding:15,
        fontSize:20,
        fontWeight:"500",
        color:"white",
        letterSpacing:1.5,
    },
    buttonIcon:{
        fontSize:20,
        color:"white",
        position:"absolute",
    }

})
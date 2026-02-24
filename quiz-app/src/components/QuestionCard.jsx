import { View, Text, StyleSheet, Pressable } from 'react-native';
import QuestionAnswer from './QuestionAnswer';

export default function QuestionCard({question}) {
    
    const correctAnswer = question.answer;
    
    return (
        <View style={styles.questionCard}>
            <Text style={styles.questionText}>{question.question}</Text>
            <View style={{gap:10, marginTop:20}}>
                {question.options.map((option,index)=>{
                    return <QuestionAnswer key={index}
                                    option={option}
                                    correct={correctAnswer}
                                    
                            />
                   
                })}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    questionCard:{
        padding:40,      
        backgroundColor:"white",
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation:5
    },
    
    questionText:{
        fontSize:16,
        fontWeight:500
    }
})
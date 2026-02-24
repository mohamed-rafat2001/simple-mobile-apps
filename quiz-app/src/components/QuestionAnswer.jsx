import { Text, StyleSheet, Pressable } from 'react-native';
import { useQuizContext } from '../providers/QuizProvider';


export default function QuestionAnswer({ option }) {
    const {selectedAnswer, setSelectedAnswer,isCorrect} = useQuizContext();
    
    const isSelected = option === selectedAnswer;
    const handlePress = () => {
            setSelectedAnswer(option)
           
        };

    

    return (
        <Pressable onPress={handlePress} style={[
            styles.optionContainer, 
            isSelected && isCorrect ? styles.correctSelected : 
            isSelected && !isCorrect ? styles.incorrectSelected : 
            {}
        ]}>
            <Text style={styles.optionText}>{option}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    optionContainer: {
        backgroundColor: '#E6F2F3',
        padding: 15,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#005055',
        marginVertical: 5
    },
    correctSelected: {
        backgroundColor: '#D4EDDA',
        borderColor: '#28A745',
    },
    incorrectSelected: {
        backgroundColor: '#F8D7DA',
        borderColor: '#DC3545',
    },
    optionText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#005055',
        textAlign: 'center'
    }
});
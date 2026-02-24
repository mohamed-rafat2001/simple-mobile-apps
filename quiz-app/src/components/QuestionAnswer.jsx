import { Text, StyleSheet, Pressable } from 'react-native';
import { useQuizContext } from '../providers/QuizProvider';
import { useEffect } from 'react';

export default function QuestionAnswer({ option, correct }) {
    const {selectedAnswer, setSelectedAnswer,currentQuestion} = useQuizContext();
    const isCorrect = option === correct;
    const isSelected = option === selectedAnswer;
    const handlePress = () => {
            setSelectedAnswer(option)
           
        };

    // Reset selected answer when question ID changes
    useEffect(() => {
        setSelectedAnswer(null);
    }, [currentQuestion]);

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
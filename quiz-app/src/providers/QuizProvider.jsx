import { createContext, useContext, useEffect, useState } from "react";
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

export const QuizContext = createContext();

export default function QuizProvider({children}){

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score,setScore] = useState(0)
    const isCorrect = selectedAnswer === questionsList[currentQuestion].answer;
    
    
    
    const handleNextButton = ()=>{
        if (currentQuestion  < questionsList.length   && isCorrect){
            setScore(score + 1)

        }
        if (currentQuestion === questionsList.length - 1){
            alert(`
                Quiz Completed\n 
                ${ score  < 3 ? "You Failed" : "You Passed"}\n
                Your Score: ${score}`)
        }
        else{
            currentQuestion <  questionsList.length - 1 &&
            setCurrentQuestion(currentQuestion + 1)
        }
            
        }
    
    const handlePrevButton = ()=>{
            currentQuestion > 0 &&
                setCurrentQuestion(currentQuestion - 1)
            score > 0 && setScore(score - 1)
            
        }
    // Reset selected answer when question ID changes
    useEffect(() => {
        setSelectedAnswer(null);
    }, [currentQuestion]);

    return(
        <QuizContext.Provider value={{questionsList,currentQuestion,handleNextButton,handlePrevButton,selectedAnswer,setSelectedAnswer,isCorrect,score}}>
            {children}
        </QuizContext.Provider>
    )
}

export const useQuizContext = ()=> useContext(QuizContext)
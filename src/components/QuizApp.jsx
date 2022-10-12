import React, { useState } from 'react'
import { questions } from "../seed"
import BackToHome from "../BackToHome"

function QuizApp() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className='h-screen flex-col gap-5 bg-gray-800 flex items-center justify-center'>
        <div className='app items-center justify-center'>
            {showScore ? (
                <div className='score-section flex flex-col gap-5'>
                    You scored {score} out of {questions.length}
                    <button className='bg-gray-900 rounded-lg w-[50%]' onClick={() => {
                        setShowScore(false);
                        setScore(0);
                        setCurrentQuestion(0)
                    }}>Restart</button>
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button className='quiz-btn' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
            <BackToHome />
        </div>
    )
}

export default QuizApp
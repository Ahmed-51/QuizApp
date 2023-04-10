import React, { useState } from 'react';

function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [index, setIndex] = useState(0)
	const [resReady, setResReady] = useState(false)
	const [score, setScore] = useState(0)
	const [prevScore, setPrevScore] = useState(0)


	const clicked = (isCorrect)=> {
		var x = index+1
		if(isCorrect){
			setScore(score+1)
		}

		if(x<questions.length){
			setIndex(x)
		}
		else{
			setResReady(true)
		}

	}

	const reset = ()=>{
		setPrevScore(score);
		setIndex(0)
		setResReady(false)
		setScore(0)
	}
	


	return (
		<div className="app">
			{resReady ? (
					<>					
						<div className="score-section"> You got {score} correct out of {questions.length}</div>
						<div className="prev-score">Previous Score: {prevScore} </div>
						<button className="trybtn" onClick={()=> reset()}>Try Again</button>
					</>


				) : (
					<>
						<div className="question-section">
							<div className="question-count"><span>Question {index+1}</span>/{questions.length}</div>
							<div className="question-text">{questions[index].questionText}</div>
						</div>
						<div className="answer-section">
							{questions[index].answerOptions.map((x)=>(
								<button onClick={()=> clicked(x.isCorrect)}>{x.answerText}</button>
							))}
						</div>
					</>
				)
			}
		</div>
	);
}

export default App;

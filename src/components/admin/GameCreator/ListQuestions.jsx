// ListQuestions.js
import React, { useState, useEffect } from "react";
import "./ListQuestions.css";

export default function ListQuestions({ onSelectQuestions }) {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions from the API when the component mounts
    fetch("http://localhost:3000/api/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((err) => console.error("Error fetching questions:", err));
  }, []);

  const toggleQuestionSelection = (questionId) => {
    setSelectedQuestions((prevSelected) =>
      prevSelected.includes(questionId)
        ? prevSelected.filter((id) => id !== questionId)
        : [...prevSelected, questionId]
    );
  };

  // Send selected questions up to Admin component whenever selection changes
  useEffect(() => {
    onSelectQuestions(selectedQuestions);
  }, [selectedQuestions, onSelectQuestions]);

  return (
    <div className="questions-grid">
      {questions.map((question) => (
        <div
          key={question._id}
          className={`question-card ${
            selectedQuestions.includes(question._id) ? "selected" : ""
          }`}
          onClick={() => toggleQuestionSelection(question._id)}
        >
          <h4>{question.title}</h4>
          <p>Pictogram: {question.correctAnswer.pictogram}</p>
          <p>Colors: {question.correctAnswer.colors.join(", ")}</p>
          <p>Number: {question.correctAnswer.number}</p>
        </div>
      ))}
    </div>
  );
}

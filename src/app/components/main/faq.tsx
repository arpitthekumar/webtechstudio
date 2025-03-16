"use client";
import React, { FC, useState } from 'react';

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    { question: 'What services does Kairos offer?', answer: 'Kairos offers web development, UI/UX design, branding, and more.', isOpen: false },
    { question: 'How long does it take to complete a project?', answer: 'The project timeline varies depending on the scope and complexity.', isOpen: false },
    { question: 'Can I customize my pricing plan?', answer: 'Yes, we offer flexible pricing plans.', isOpen: false },
    { question: 'Do you provide ongoing support after project completion?', answer: 'Yes, we offer ongoing support and maintenance.', isOpen: false },
    { question: 'What makes Kairos different from other agencies?', answer: 'Kairos focuses on tailored solutions and high-quality delivery.', isOpen: false }
  ]);

  const toggleFAQ = (index) => {
    setFaqs(faqs.map((faq, i) => i === index ? { ...faq, isOpen: !faq.isOpen } : faq));
  };

  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const addFAQ = () => {
    if (newQuestion && newAnswer) {
      setFaqs([...faqs, { question: newQuestion, answer: newAnswer, isOpen: false }]);
      setNewQuestion('');
      setNewAnswer('');
    }
  };

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center">Answers to Your Questions</h1>
      <p className="text-gray-400 text-center mb-10">Find answers to common questions about our services, processes, and pricing.</p>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg">{faq.question}</h3>
              <span className="text-xl">{faq.isOpen ? '-' : '+'}</span>
            </div>
            {faq.isOpen && <p className="text-gray-400 mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-10 space-y-4">
        <input
          type="text"
          placeholder="Add a new question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <textarea
          placeholder="Add an answer"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white"
        ></textarea>
        <button
          onClick={addFAQ}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Question
        </button>
      </div>
    </div>
  );
};

export default FAQ;

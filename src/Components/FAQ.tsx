import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "What programming languages are you proficient in?",
      answer:
        "I'm proficient in JavaScript, TypeScript, Python, and CSS. I'm particularly strong with React and modern frontend development practices.",
    },
    {
      question: "What kind of projects do you enjoy working on?",
      answer:
        "I enjoy working on interactive web applications with clean, intuitive UIs. I'm passionate about creating seamless user experiences and optimizing performance.",
    },
    {
      question: "How do you approach problem-solving?",
      answer:
        "I take a methodical approach to problem-solving. I first understand the requirements thoroughly, break down complex problems into smaller parts, research potential solutions, implement the best approach, and then test rigorously.",
    },
    {
      question: "What are your career goals?",
      answer:
        "I aim to continue growing as a developer by staying current with emerging technologies and best practices. I'm interested in taking on more complex challenges and eventually moving into a technical leadership role.",
    },
    {
      question: "How do you stay updated with the latest technologies?",
      answer:
        "I regularly follow tech blogs, participate in online communities, attend webinars, and work on personal projects to experiment with new technologies and frameworks.",
    },
    {
      question: "What's your preferred development environment?",
      answer:
        "I primarily use VS Code with various extensions to enhance productivity. I'm comfortable working in both Windows and Linux environments and use Git for version control.",
    },
    {
      question: "How do you handle tight deadlines?",
      answer:
        "I prioritize tasks based on importance and complexity, communicate proactively about progress and potential roadblocks, and focus on delivering the most critical features first while maintaining code quality.",
    },
  ];

  return (
    <div className="mt-8 w-full max-w-[950px]">
      <h2 className="mb-4 text-center text-2xl font-semibold">
        Frequently Asked Questions
      </h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg bg-[#bdc0c238] shadow-md"
          >
            <button
              className="flex w-full items-center justify-between px-4 py-3 text-left text-lg font-medium focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="ml-6 flex-shrink-0">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 pt-0 text-base">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

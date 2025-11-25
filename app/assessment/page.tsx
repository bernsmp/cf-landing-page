'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, ArrowLeft, Eye, EyeOff, Sparkles, RotateCcw } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: 'When clients or colleagues ask "how do you do that?", how often can you give a clear, specific answer?',
    options: [
      { text: 'Almost always—I can break down my process step by step', score: 1 },
      { text: 'Usually—I have a rough framework I can explain', score: 2 },
      { text: 'Sometimes—It depends on what they\'re asking about', score: 3 },
      { text: 'Rarely—I often say "it just comes naturally" or "I just know"', score: 4 },
      { text: 'Almost never—My best work feels intuitive and hard to explain', score: 5 },
    ],
  },
  {
    id: 2,
    question: 'Think about a skill you\'ve mastered. How much of your process could you write down in a detailed guide?',
    options: [
      { text: '90-100%—I could document everything I do', score: 1 },
      { text: '70-90%—Most of it, with some gaps', score: 2 },
      { text: '50-70%—About half, but a lot would be missing', score: 3 },
      { text: '30-50%—Less than half—there\'s a lot I "just do"', score: 4 },
      { text: 'Under 30%—Most of what makes me effective is hard to articulate', score: 5 },
    ],
  },
  {
    id: 3,
    question: 'How often do you surprise yourself by solving problems without consciously thinking through the steps?',
    options: [
      { text: 'Rarely—I\'m very deliberate about my approach', score: 1 },
      { text: 'Occasionally—Maybe once a month', score: 2 },
      { text: 'Sometimes—A few times a month', score: 3 },
      { text: 'Often—Multiple times a week', score: 4 },
      { text: 'Constantly—It\'s how I work most of the time', score: 5 },
    ],
  },
  {
    id: 4,
    question: 'When you see someone struggling with something you find easy, how well can you explain what to do differently?',
    options: [
      { text: 'Extremely well—I can pinpoint exactly what they need to change', score: 1 },
      { text: 'Pretty well—I can give useful guidance most of the time', score: 2 },
      { text: 'Moderately—I can help but sometimes struggle to articulate why', score: 3 },
      { text: 'With difficulty—I often know they\'re wrong but can\'t explain the right way', score: 4 },
      { text: 'Poorly—I can do it myself but can\'t teach it', score: 5 },
    ],
  },
  {
    id: 5,
    question: 'How would you describe your pricing confidence when selling your expertise?',
    options: [
      { text: 'Very confident—I can articulate exactly what makes my work valuable', score: 1 },
      { text: 'Fairly confident—I have a good sense of my value', score: 2 },
      { text: 'Somewhat confident—I sometimes question my pricing', score: 3 },
      { text: 'Not very confident—I often feel like I\'m guessing', score: 4 },
      { text: 'Low confidence—I struggle to justify premium prices because I can\'t explain my difference', score: 5 },
    ],
  },
];

const getResult = (score: number) => {
  if (score <= 8) {
    return {
      level: 'Low Invisibility',
      color: 'var(--success)',
      percentage: '15-30%',
      description: 'Your expertise is relatively visible to you. You can articulate most of what you do and why it works.',
      insight: 'While this is good for teaching others, you may be underestimating the intuitive elements of your work. There\'s likely more sophistication in your approach than you realize.',
      recommendation: 'Consider documenting your frameworks and methodologies. You\'re well-positioned to create courses, training materials, or productized services.',
    };
  } else if (score <= 15) {
    return {
      level: 'Moderate Invisibility',
      color: 'var(--warning)',
      percentage: '40-60%',
      description: 'A significant portion of your expertise operates below your conscious awareness.',
      insight: 'You likely have valuable patterns you\'ve never named or documented. These hidden frameworks are probably driving much of your success.',
      recommendation: 'This is the perfect time for extraction. You have enough self-awareness to engage with the process, but enough invisible patterns to make it highly valuable.',
    };
  } else {
    return {
      level: 'High Invisibility',
      color: 'var(--danger)',
      percentage: '70-90%',
      description: 'Most of your expertise has become automatic and invisible to you.',
      insight: 'You\'re likely running sophisticated cognitive patterns that you can\'t see. This is common among highly experienced experts—mastery creates invisibility.',
      recommendation: 'You have significant untapped IP. A formal extraction process could reveal frameworks worth substantial value that you\'ve never been able to articulate.',
    };
  }
};

export default function AssessmentPage() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const handleRestart = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const result = getResult(totalScore);

  return (
    <div className="min-h-screen bg-[var(--grey-950)]">
      <div className="grain-overlay" />
      <Navigation />

      <main className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {!started ? (
              /* Intro Screen */
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--brand-gold)]/20 border border-[var(--brand-gold)]/30 mb-8">
                  <EyeOff className="text-[var(--brand-gold)]" size={36} />
                </div>

                <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                  The Invisibility Test
                </h1>

                <p className="text-xl text-[var(--grey-400)] mb-4">
                  How much of your expertise is invisible to you?
                </p>

                <p className="text-[var(--grey-500)] mb-12 max-w-xl mx-auto">
                  5 questions. 3 minutes. No email required.
                  <br />
                  Discover how much valuable expertise is hiding in plain sight.
                </p>

                <button
                  onClick={() => setStarted(true)}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl hover:bg-[var(--brand-gold-light)] transition-all duration-300 text-lg"
                >
                  Start the Assessment
                  <ArrowRight size={24} />
                </button>
              </motion.div>
            ) : showResults ? (
              /* Results Screen */
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
              >
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ backgroundColor: `${result.color}20`, borderColor: `${result.color}50`, borderWidth: 1 }}>
                    <Eye style={{ color: result.color }} size={36} />
                  </div>

                  <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                    Your Result: <span style={{ color: result.color }}>{result.level}</span>
                  </h2>

                  <p className="text-5xl font-display font-bold text-gold-gradient mb-4">
                    {result.percentage}
                  </p>
                  <p className="text-[var(--grey-400)]">of your expertise is likely invisible to you</p>
                </div>

                <div className="space-y-6 mb-12">
                  <div className="p-6 rounded-xl bg-[var(--grey-850)] border border-[var(--grey-800)]">
                    <h3 className="font-semibold text-white mb-2">What This Means</h3>
                    <p className="text-[var(--grey-400)]">{result.description}</p>
                  </div>

                  <div className="p-6 rounded-xl bg-[var(--grey-850)] border border-[var(--grey-800)]">
                    <h3 className="font-semibold text-white mb-2">The Insight</h3>
                    <p className="text-[var(--grey-400)]">{result.insight}</p>
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--brand-gold)]/10 to-[var(--grey-900)] border border-[var(--brand-gold)]/30">
                    <h3 className="font-semibold text-[var(--brand-gold)] mb-2">Our Recommendation</h3>
                    <p className="text-[var(--grey-300)]">{result.recommendation}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/start"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl hover:bg-[var(--brand-gold-light)] transition-all duration-300"
                  >
                    Explore Your Options
                    <ArrowRight size={20} />
                  </Link>
                  <button
                    onClick={handleRestart}
                    className="inline-flex items-center gap-2 px-6 py-4 bg-transparent border border-[var(--grey-700)] text-[var(--grey-300)] font-semibold rounded-xl hover:border-[var(--grey-500)] transition-all duration-300"
                  >
                    <RotateCcw size={18} />
                    Retake Assessment
                  </button>
                </div>

                {/* Share section */}
                <div className="mt-12 p-6 rounded-xl bg-[var(--grey-850)] border border-[var(--grey-800)] text-center">
                  <p className="text-[var(--grey-400)] mb-4">
                    Know someone who might benefit from this?
                  </p>
                  <p className="text-white font-semibold">
                    Share: <span className="text-[var(--brand-gold)]">cognitivefingerprint.ai/assessment</span>
                  </p>
                </div>
              </motion.div>
            ) : (
              /* Question Screen */
              <motion.div
                key={`question-${currentQuestion}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                {/* Progress */}
                <div className="mb-8">
                  <div className="flex items-center justify-between text-sm text-[var(--grey-500)] mb-2">
                    <span>Question {currentQuestion + 1} of {questions.length}</span>
                    <span>{Math.round(((currentQuestion) / questions.length) * 100)}% complete</span>
                  </div>
                  <div className="h-2 bg-[var(--grey-800)] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[var(--brand-gold)]"
                      initial={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                      animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Question */}
                <div className="mb-8">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                    {questions[currentQuestion].question}
                  </h2>
                </div>

                {/* Options */}
                <div className="space-y-3 mb-8">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleAnswer(option.score)}
                      className="w-full p-5 rounded-xl bg-[var(--grey-850)] border border-[var(--grey-800)] text-left text-[var(--grey-300)] hover:border-[var(--brand-gold)] hover:bg-[var(--grey-800)] transition-all duration-300 group"
                    >
                      <span className="group-hover:text-white transition-colors">{option.text}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Back button */}
                {currentQuestion > 0 && (
                  <button
                    onClick={handleBack}
                    className="inline-flex items-center gap-2 text-[var(--grey-500)] hover:text-[var(--grey-300)] transition-colors"
                  >
                    <ArrowLeft size={18} />
                    Previous question
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}


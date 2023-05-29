import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import css from '../components/App.module.css'

export default function App () {
  
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (option) => {
    setFeedback((prevState) => ({ ...prevState, [option]: prevState[option] + 1 }));
  };

  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const positivePercentage = total > 0 ? Math.round(((good + neutral) / total) * 100) : 0;

   return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(feedback)} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics feedbacks={feedback} total={total} positivePercentage={positivePercentage} />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}



export const Statistics = ({feedbacks, total, positivePercentage}) => (
  <div>
    <p>Good: {feedbacks.good}</p>
    <p>Neutral: {feedbacks.neutral}</p>
    <p>Bad: {feedbacks.bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}%</p>
  </div>
);
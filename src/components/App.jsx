import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import css from '../components/App.module.css'

export class App extends Component {
  
state = {
    good: 0,
    neutral: 0,
    bad: 0,
    };
 
  

  onLeaveFeedback = (option) => {
    this.setState({
      [option]: this.state[option] + 1
    })
  };

  countTotalFeedbacks = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbacksPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = total > 0 ? Math.round(((good + neutral) / total) * 100) : 0;
    return positivePercentage;
  }

  render() {
    

    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
          </Section>
        <Section title="Statistics">
          {this.countTotalFeedbacks() > 0 ? (
            <Statistics feedbacks={this.state} total={this.countTotalFeedbacks()} positivePercentage={this.countPositiveFeedbacksPercentage()}></Statistics>
            ) : (
            <Notification message="There is no feedback"></Notification>
            )}
            </Section>
      </div>
    )
  }
};


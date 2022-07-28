import React, { useState } from 'react';

import { Box } from './Box';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import {
  countTotalFeedback,
  countPositiveFeedbackPercentage,
} from '../utils/index';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return null;
    }
  };

  const options = ['good', 'neutral', 'bad'];

  const totalFeedbacks = countTotalFeedback(good, neutral, bad);
  const positivePercent = countPositiveFeedbackPercentage(good, totalFeedbacks);

  return (
    <Box
      as="main"
      display="flex"
      flexDirection="column"
      alignItems="start"
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={leaveFeedback} />
      </Section>
      <Section title="Statistics">
        {totalFeedbacks ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedbacks={totalFeedbacks}
            positivePercent={positivePercent}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </Box>
  );
};

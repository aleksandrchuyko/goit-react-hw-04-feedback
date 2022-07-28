export function countTotalFeedback(...feedbacks) {
  return feedbacks.reduce((total, feedback) => (total += feedback), 0);
}

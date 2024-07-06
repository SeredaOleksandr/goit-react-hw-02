import s from './Feedback.module.css';

const Feedback = () => {
  return (
    <ul className={s.feadbackList}>
      <li>Good: </li>
      <li>Netural: </li>
      <li>Bad: </li>
      <li>Total: </li>
      <li>Positive: </li>
    </ul>
  );
};

export default Feedback;

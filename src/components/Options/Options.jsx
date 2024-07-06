import s from './Options.module.css';

const Options = () => {
  return (
    <ul className={s.optionsList}>
      <li>
        <button>Good</button>
      </li>
      <li>
        <button>Netural</button>
      </li>
      <li>
        <button>Bad</button>
      </li>
      <li>
        <button>Reset</button>
      </li>
    </ul>
  );
};

export default Options;

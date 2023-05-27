import css from '../FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div className={css.btnContainer}>
                {options.map((option) =>
                    <button key={option} type='button' className={`${css.button} ${css[option]}`} onClick={() => onLeaveFeedback(option)}>{option.toUpperCase()}</button>
                )}
            </div>
        );
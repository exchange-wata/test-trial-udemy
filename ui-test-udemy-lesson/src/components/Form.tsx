import { FormEvent, useState } from 'react';

export const PLACEHOLDER = 'placeholder';

const Form = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert(`submitted: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={PLACEHOLDER}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;

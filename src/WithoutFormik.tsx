import { useState, ChangeEvent, SyntheticEvent } from "react";

function App() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log("SUBMIT::: ", values);
  };

  return (
    <div className='container'>
      <form>
        <input
          value={values.email}
          onChange={handleInput}
          name='email'
          type='email'
          className='form-control'
        />
        <input
          value={values.password}
          onChange={handleInput}
          name='password'
          type='password'
          className='form-control'
        />
        <button type="submit" onClick={submitForm} className='btn btn-primary mb-3'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;

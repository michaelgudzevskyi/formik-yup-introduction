import { Formik, Form, Field } from 'formik';

function App() {
  return (
    <div className="container">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(data)=> {
          console.log('data: ', data);
        }}
      >
        {({ values })=> (
          <Form>
            <Field 
              value={values.email} 
              name="email" 
              type="email" 
              className="form-control"
            />
            <Field 
              value={values.password} 
              name="password" 
              type="password" 
              className="form-control"
            />
            <pre>
              {JSON.stringify(values, null, 2)}
            </pre>
            <button type="submit" className="btn btn-primary mb-3">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;


 
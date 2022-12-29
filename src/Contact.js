import React from 'react'
import { Form, Formik, Field } from 'formik'
import './index.css';
function Contact() {
    return (
        <> <div className='container'>
            <div className='div1'>
                <img src='https://live.staticflickr.com/3156/2987133331_ee2e0663b7_z.jpg' />
            </div>
            <div> <Formik initialValues={{
                Name: "",
                Surname: "",
                Email: "",
                About: "",
                PhoneNumber: ""
            }}
                onSubmit={(values) => {
                    console.log(values);
                }}>
                {
                    (props) => (
                        <Form id='form'>
                            <h1>Formik List</h1>
                            <b>Name:</b>
                            <Field id='form-field' name="Name" />
                            <b>Surname:</b>
                            <Field id='form-field' name="Surname" />
                            <b>Email:</b>
                            <Field id='form-field' name="Email" type="email" />
                            <b>About:</b>
                            <Field id='form-field' name="About" />
                            <b>PhoneNumber:</b>
                            <Field id='form-field' name="PhoneNumber" />
                            <br></br>
                            <button type='sumbit'>Click me</button>
                        </Form>
                    )
                }


            </Formik>
            </div>
            <div className='div2'> <img src='https://live.staticflickr.com/3179/2987132203_328b8af6d7_h.jpg'/></div>
        </div>

        </>
    )
}

export default Contact
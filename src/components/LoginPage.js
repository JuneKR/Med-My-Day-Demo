import React from 'react';
import { withFormik, Form, Field, yupToFormErrors, ErrorMessage } from 'formik';
import * as Yup from 'yup';
/* new import */
import { withRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const LoginPage = (props) => {
    
    const navigate = useNavigate();

    const loginPageStyle = {
        margin: "32px auto 37px",
        maxWidth: "530px",
        background: "#fff",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)"
      }
    const { touched, errors } = props;
    return(
        <React.Fragment>
            <div className="container">
                <div className="login-wrapper" style={loginPageStyle}>
                    <h2>Login</h2>
                    <Form className="form-container">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field type="text" name="email" className={"form-control"} placeholder="Email" />
                            { touched.email && errors.email && <span className="help-block text-danger">{errors.email}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor='password'>Password</label>
                            <Field type="password" name="password" className={"form-control"} placeholder="Password" />
                            { touched.password && errors.password && <span className="help-block text-danger">{errors.password}</span> }
                        </div>
                        {/* <button type="submit" className="btn btn-primary" onClick={() => {}}>Sign In</button> */}
                        <button className="btn btn-primary" onClick={navigate("/admin")}>Sign In</button>
                    </Form>
                </div>
            </div>
        </React.Fragment>
    )
}

const LoginFormik = withFormik({
    mapPropsToValues: (props) => {
        return {
            email: props.email || '',
            password: props.password || ''
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Email not valid').required('Email is required'),
        password: Yup.string().required('Password is required')
    }),
    handleSubmit: (values) => {
        // Firestore of admin roles
        const REST_API_URL = "http://localhost:3003/login";
        fetch(REST_API_URL, {
            method: 'post',
            body: JSON.stringify(values)
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else { // HANDLE ERROR
                throw new Error('Something went wrong');
            }
        }).then(data => {
            console.log(data)    
        }).catch((error) => {
            console.log(error)
        });        
        
    }
})(LoginPage)

export default LoginFormik
// export default LoginPage
import React from 'react';
import {Formik, Field, Form} from 'formik';
import '../assets/customerForm.scss'
import PropTypes from "prop-types";

export const CustomerForm = () => {

    return (
        <div className="container">
            <Formik
                onSubmit={(values) => {
                    this.props.submitForm(values)
                }}
                initialValues={{
                    employment: 'student',
                    firstName: '',
                    lastName: '',
                    dateOfBirth: '',
                    annualIncome: '',
                    houseNumber: '',
                    postcode: ''
                }}
                render={() => (
                    <Form className="customer-contact-form">
                        <label>First Name:
                            <Field type="text" name="firstName"/>
                        </label>
                        <label>Last Name:
                            <Field type="text" name="lastName"/>
                        </label>
                        <label>Date of Birth:
                            <Field type="text" name="dateOfBirth"/>
                        </label>
                        <label>Annual Income:
                            <Field type="number" name="annualIncome" required placeholder="£"/>
                        </label>
                        <label>House Number:
                            <Field type="text" name="houseNumber"/>
                        </label>
                        <label>Postcode:
                            <Field type="text" name="postcode"/>
                        </label>
                        <label>Employment:
                            <Field component="select" name="employment">
                                <option value="student">Student</option>
                                <option value="fullTimeEmployment">Full Time Employment</option>
                                <option value="partTimeEmployment">Part Time Employment</option>
                            </Field>
                        </label>
                        <button type="submit">
                            Submit
                        </button>
                    </Form>
                )}
            />
        </div>
    );

};

CustomerForm.propTypes = {
    submitForm: PropTypes.func.isRequired
};
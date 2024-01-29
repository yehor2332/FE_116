import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import '../../assets/scss/style.scss';

import appleSvg from './img/apple.svg';
import facebookSvg from './img/facebook.svg';
import googleSvg from './img/google.svg';

function SingInForm () {
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }
    return (
        <div className={"sing-in-wrapper"}>
            <form className="SingInForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-item">
                    <h1>I have an account</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        className={errors.email ? 'error' : ''}
                        {...register("email", {
                            required: "Required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        })}
                    />
                    <p className={'error-message'}>{errors.email && errors.email.message}</p>
                </div>
                <div className="form-item">
                    <input
                        type="password"
                        placeholder="Password"
                        className={errors.password ? 'error' : ''}
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "must be 8 chars",
                            },
                            pattern: {
                                value: /(\w|\s|[\.\'-])+/,
                                message: "Incorrect subject"
                            },
                            validate: (value) => {
                                return (
                                    [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
                                        pattern.test(value)
                                    ) || "must include lower, upper, number, and special chars"
                                );
                            },
                        })}
                    />
                    <p className={'error-message'}>{errors.password && errors.password.message}</p>
                </div>
                <button className="form-button" type="submit">Come in</button>
                <Link><h1 className="make-new-account">Make new account</h1></Link>
                <div className="another-logination">
                    <p>Or login with </p>
                    <div className="another-logination-socials">
                        <Link to="#"><img src={appleSvg} alt=""/></Link>
                        <Link to="#"><img src={facebookSvg} alt=""/></Link>
                        <Link to="#"><img src={googleSvg} alt=""/></Link>
                    </div>
                </div>
            </form>
            <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-item">
                    <h1>I don't have an Account</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        className={errors.email ? 'error' : ''}
                        {...register("email", {
                            required: "Required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        })}
                    />
                    <p className={'error-message'}>{errors.email && errors.email.message}</p>
                </div>
                <div className="form-item">
                    <input
                        type="password"
                        placeholder="Password"
                        className={errors.password ? 'error' : ''}
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "must be 8 chars",
                            },
                            pattern: {
                                value: /(\w|\s|[\.\'-])+/,
                                message: "Incorrect subject"
                            },
                            validate: (value) => {
                                return (
                                    [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
                                        pattern.test(value)
                                    ) || "must include lower, upper, number, and special chars"
                                );
                            },
                        })}
                    />
                    <p className={'error-message'}>{errors.password && errors.password.message}</p>
                </div>
                <div className="form-check-box">
                    <div className="form-items">
                        <div className="form-item-checkbox">
                            <label>
                                <input type="checkbox"/>
                                <p>I agree with <span><strong>the Store Rules*</strong></span></p>
                            </label>
                        </div>
                        <div className="form-item-checkbox">
                            <label>
                                <input type="checkbox"/>
                                <p>I want to receive commercial offers from the eventick.com event- store to the above email. MORE</p>
                            </label>
                        </div>
                        <div className="form-text-button">
                            <p>The administrator of personal data is Answear S.A. with an office registered in Krakow,
                                31-564,
                                str.
                                Aleja Pokoju 18, under the control of the District Court in Krakow, XI Financial
                                Department
                                of
                                the National Court Register,
                                KRS No. 0000816066.
                            </p>
                            <button className="form-button" type="submit">Create an account</button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default SingInForm;
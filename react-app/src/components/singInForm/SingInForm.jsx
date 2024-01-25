import React from "react";
import { useForm } from "react-hook-form";
import '../../assets/scss/style.scss';

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
                    <h1>entry</h1>
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
                <button className="form-button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SingInForm;
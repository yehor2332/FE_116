import React from "react";
import { useForm } from "react-hook-form";
import '../../assets/scss/style.scss';

function SortUpcomingsEvents () {
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
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-item">
                    <h1>Upcomings Events</h1>
                    <input
                        type="checkbox"
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
                                message: "Password must be at least 8 characters"
                            },
                            pattern: {
                                value: /(\w|\s|[\.\'-])+/,
                                message: "Incorrect subject"
                            }
                        })}
                    />
                    <p className={'error-message'}>{errors.password && errors.password.message}</p>
                </div>
                <button className="form-button" type="submit">Submit</button>
            </form>
        </>
    )
}

export default SortUpcomingsEvents;
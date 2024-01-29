 import { useForm } from "react-hook-form";
import '../../assets/scss/style.scss';

function ContactForm () {
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm();
  function onSubmit(values) {
    console.log(values);
  }

  return (
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-item">
          <input
              className={errors.name ? 'error' : ''}
              type="text"
              placeholder="Name"
              {...register("name", {
                required: "Required",
                pattern: {
                  value: /(\w|\s|[\.\'-])+/,
                  message: "Incorrect name"
                }
              })}
          />
          <p className={'error-message'}>{errors.name && errors.name.message}</p>
        </div>
        <div className="form-item">
          <input
              className={errors.email ? 'error' : ''}
              type="email"
              placeholder="Email"
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
              className={errors.topicOfTheProblem ? 'error' : ''}
              type="text"
              placeholder="Topic of the problem"
              {...register("topicOfTheProblem", {
                required: "Required",
                pattern: {
                  value: /(\w|\s|[\.\'-])+/,
                  message: "Incorrect subject"
                }
              })}
          />
          <p className={'error-message'}>{errors.topicOfTheProblem && errors.topicOfTheProblem.message}</p>
        </div>
        <div className="form-item">
          <textarea
              className={errors.message ? 'error' : ''}
              placeholder="Type Your message"
              rows="5"
              {...register("message", {
                required: "Required",
                pattern: {
                  value: /(\w|\s|[\.\'-])+/,
                  message: "Incorrect message"
                }
              })}
          />
          <p className={'error-message'}>{errors.message && errors.message.message}</p>
        </div>
        <button className="button-contact-form" type="submit">Submit</button>
      </form>
  )
}

export default ContactForm;
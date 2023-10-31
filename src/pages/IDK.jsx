import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types"; // If you're not using TypeScript
import { auth } from "../config/firebase";

export default function Register() {
  const {
    handleSubmit,
    formState: { errors },
    trigger,
    register,
    watch,
  } = useForm();

  // Handle form submission
  async function onhandleSubmit(data) {
    try {
      // Assuming you have 'auth' defined somewhere in your code
      await createUserWithEmailAndPassword(
        auth, // Make sure 'auth' is defined
        data.email,
        data.password
      );
      history.push("/");
      alert("User Created Successfully");
    } catch (error) {
      console.error(error);
      alert("User creation failed");
      alert(error.message); // Display the error message
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onhandleSubmit)}>
        <h5>Create an account</h5>
        <div>
          <div>
            <label>Your email address</label>
            <input
              id="email"
              name="email"
              type="email"
              required={true}
              {...register("email", {
                required: "Email is Required!!!",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              error={Boolean(errors.email)}
              onKeyUp={() => {
                trigger("email");
              }}
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}
          </div>
          <div>
            <label>Your password</label>
            <input
              name="password"
              id="password"
              type="password"
              autoComplete="off"
              className={`form-control ${errors.password && "invalid"}`}
              required={true}
              {...register("password", {
                required: "You must specify a password",
                pattern: {
                  value:
                    /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[d]){1,})(?=(.*[W]){1,})(?!.*s).{8,}$/,
                  message:
                    "Password should contain at least one number and one special character",
                },
                minLength: {
                  value: 8,
                  message: "Password must be more than 8 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password must be less than 20 characters",
                },
              })}
              onKeyUp={() => {
                trigger("password");
              }}
              error={Boolean(errors.password)}
            />
            {errors.password && (
              <small className="text-danger">{errors.password.message}</small>
            )}
          </div>
          <div>
            <label>Confirm your password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === watch("password", "") ||
                  "The passwords do not match",
              })}
              autoComplete="off"
              onPaste={(e) => {
                e.preventDefault();
                return false;
              }}
              error={Boolean(errors.confirmPassword)}
              className={`form-control ${errors.confirmPassword && "invalid"}`}
              required={true}
              onKeyUp={() => {
                trigger("confirmPassword");
              }}
            />
            {errors.confirmPassword && (
              <small className="text-danger">
                {errors.confirmPassword.message}
              </small>
            )}
          </div>
          <div>
            <label>Your full name</label>
            <input
              name="name"
              type="text" // Corrected "name" type to "text"
              className={`form-control ${errors.name && "invalid"}`}
              required={true}
              defaultValue=""
              {...register("name", { required: "Fullname is Required!!!" })}
              onKeyUp={() => {
                trigger("name");
              }}
            />
            {errors.name && (
              <small className="text-danger">Fullname is Required!!!</small>
            )}
          </div>
          <div>
            <button type="submit">Create an account</button>
          </div>
        </div>
      </form>
    </div>
  );
}
Register.propTypes = {
  error: PropTypes.bool, // Define the 'error' prop as a boolean
  // Define other props if necessary
};

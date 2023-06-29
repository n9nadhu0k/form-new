import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // Perform additional checks if required
    if (data.password !== data.confirmPassword) {
      alert("Password and Confirm Password do not match!");
      return;
    }

    // Handle successful form submission here
    alert("Registration success!");
    reset();
  };

  return (
    <div className="App">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <div>
            <label>Username:</label>
            <br />
            <input {...register("username", { required: true })} />
            {errors.username && (
              <span className="error">Username is required</span>
            )}
          </div>
        </p>
        <p>
          <div>
            <label>Phone Number:</label>
            <br />
            <input
              {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })}
            />
            {errors.phone && (
              <span className="error">Please enter a valid phone number</span>
            )}
          </div>
        </p>
        <p>
          <div>
            <label>Email:</label>
            <br />
            <input
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
              <span className="error">Please enter a valid email address</span>
            )}
          </div>
        </p>
        <p>
          <div>
            <label>Password:</label>
            <br />
            <input
              {...register("password", { required: true, minLength: 6 })}
              type="password"
            />
            {errors.password && (
              <span className="error">
                Password must be at least 6 characters
              </span>
            )}
          </div>
        </p>
        <p>
          <div>
            <label>Confirm Password:</label>
            <br />
            <input
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === watch("password"),
              })}
              type="password"
            />
            {errors.confirmPassword && (
              <span className="error">Passwords do not match</span>
            )}
          </div>
        </p>
        <p>
          {" "}
          <div>
            <button type="submit">Register</button>
          </div>
        </p>
      </form>
    </div>
  );
}

export default App;

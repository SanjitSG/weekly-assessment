import React from "react";
import { useForm } from "react-hook-form";
import "./SignupForm.css"; // Import the CSS file

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const onSubmit = (data) => {
    // Perform registration logic here
    // Display success pop-up or handle the registration process
    alert("Registration successful!");
    reset(); // Reset the form after successful registration
  };

  return (
    <div id="root">
      <div className="sign-up">
        <h1>Sign up</h1>
        <p>Update your details</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label>Username</label>
            <input type="text" {...register("username", { required: true })} />
            {errors.username && <span className="error-message">Username is required</span>}
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input type="tel" {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })} />
            {errors.phone && <span className="error-message">Please enter a valid 10-digit phone number</span>}
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email && <span className="error-message">Please enter a valid email address</span>}
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" {...register("password", { required: true, minLength: 6 })} />
            {errors.password && <span className="error-message">Password must be at least 6 characters long</span>}
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === password || "Passwords don't match",
              })}
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword.message}</span>}
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;

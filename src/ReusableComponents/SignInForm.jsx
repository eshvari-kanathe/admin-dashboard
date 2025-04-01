import React from "react";

const SignInForm = () => {
  return (
    <form role="form">
      <label>Email</label>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          aria-label="Email"
          aria-describedby="email-addon"
        />
      </div>
      <label>Password</label>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="password-addon"
        />
      </div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="rememberMe"
        />
        <label className="form-check-label" htmlFor="rememberMe">
          Remember me
        </label>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-gradient-info w-100 mt-4 mb-0 btn btn-primary"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default SignInForm;

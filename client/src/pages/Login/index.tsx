import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useAuth } from "../../context/auth-context";

type LoginForm = {
  email: string;
  password: string;
};

type LocationState = {
  from: {
    pathname: string;
  };
};

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const [loginButton, setLoginButton] = useState(false);
  const [authError, setAuthError] = useState<object>({});
  const from = (location.state as LocationState)?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginForm>();

  const submitHandler = (data: LoginForm) => {
    setLoginButton(true);
    auth.signin(data.email, data.password);
  };

  useEffect(() => {
    if (auth.user) {
      navigate(from, { replace: true });
    }

    if (auth.authErrors.status !== 200) {
      setAuthError(auth.authErrors.data);
    }
    setLoginButton(false);
  }, [auth.user, auth.authErrors, from, navigate]);

  // Object.entries(authError).forEach(([key, value]) =>
  //   console.log(`${key}# ${value}`)
  // );

  return (
    <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Sign in</h3>
                <form onSubmit={handleSubmit(submitHandler)}>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder="Enter email address"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <div className="d-flex valid-error">
                        <p className="" id="email-error">
                          {" "}
                          Enter valid email
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      placeholder="Enter Password"
                      {...register("password", { required: true })}
                    />
                    {errors.password && (
                      <div className="d-flex valid-error">
                        <p className="" id="email-error">
                          {" "}
                          Enter password
                        </p>
                      </div>
                    )}
                  </div>

                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    disabled={loginButton}
                  >
                    {loginButton ? "Logging..." : "Login"}
                  </button>
                </form>

                <ul>
                  <>
                    {Object.entries(authError).forEach(([key, value]) => (
                      <li key={key}>{value}</li>
                    ))}
                  </>
                </ul>

                <hr className="my-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

import React, { useState } from "react";
import styles from "./Register.module.css";
import coverImage from "../../assets/images/homeImg.png";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    userName: "",
    isChecked: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) =>{
    e.preventDefault();
    const errors = {};

        if (!formData.name.trim().length) {
            errors.name = "Name required";
        }

        if (!formData.email.trim().length) {
            errors.email = "Email required";
        }

        if (!formData.mobile.trim().length) {
            errors.mobile = "Mobile required";
        }

        if (!formData.userName.trim().length) {
            errors.userName = "Username required";
        }

        if (!formData.isChecked) {
            errors.isChecked = "Terms required";
        }

        setErrors(errors);

        if (!Object.keys(errors).length) {
            localStorage.setItem("userData", JSON.stringify(formData));
            navigate("/GenerePage");
        }

  }

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.bottom}>
          <p>Discover new things on SuperApp</p>
        </div>
        <img src={coverImage} alt="cover image of music" />
      </div>

      <div className={styles.body}>
        <h1 className={styles.super}>Super App</h1>
        <h6>Create a new Account</h6>

        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => handleChange(e)}
          />
          {errors.name ? (
                        <p className={styles.error}>{errors.name}</p>
                    ) : (
                        <></>
                    )}
          <input
            type="text"
            name="userName"
            placeholder="Username"
            onChange={(e) => handleChange(e)}
          />
          {errors.userName ? (
                        <p className={styles.error}>{errors.userName}</p>
                    ) : (
                        <></>
                    )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => handleChange(e)}
          />
          {errors.email ? (
                        <p className={styles.error}>{errors.email}</p>
                    ) : (
                        <></>
                    )}
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile"
            onChange={(e) => handleChange(e)}
          />
          {errors.mobile ? (
                        <p className={styles.error}>{errors.mobile}</p>
                    ) : (
                        <></>
                    )}

          <label htmlFor="isChecked">
            <input
              type="checkbox"
              name="isChecked"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [e.target.name]: e.target.checked,
                })
              }
            />
            Share my registration data with Superapp
          </label>
          {errors.isChecked ? (
                        <p className={styles.error}>{errors.isChecked}</p>
                    ) : (
                        <></>
                    )}

          <button type="submit" onClick={handleSubmit}>SIGN UP</button>

          <footer className={styles.footer}>
            <p>
              By clicking on Sign up. you agree to Superapp
              <span style={{ color: "green" }}>
                {" "}
                Terms and Conditions of Use
              </span>
            </p>
            <p>
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp
              <span style={{ color: "green" }}> Privacy Policy</span>
            </p>
          </footer>
        </form>
      </div>
    </div>
  );
}

export default Register;

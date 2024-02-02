import { useState } from "react";
import {useNavigate} from "react-router-dom"

export default function Registerform() {
  const [formValues, setformValues] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    registerbox: false,
  });
  const [errors, setErrors] = useState({
    name: null,
    username: null,
    email: null,
    mobile: null,
    registerbox: null,
  });

  const navigate = useNavigate()

  const handleSubmit = () => {
    let isError = false;


    if (formValues.name.trim().length === 0) {
      setErrors((prev) => {
        return { ...prev, name: "Name is required" };
      });
      isError =true;
    } else {
      setErrors((prev) => {
        return { ...prev, name: null };
      });
    }

    if (formValues.username.trim().length === 0) {
      setErrors((prev) => {
        return { ...prev, username: "UserName is required" };
      });
      isError =true;
    } else {
      setErrors((prev) => {
        return { ...prev, username: null };
      });
    }

    if (formValues.email.trim().length === 0) {
      setErrors((prev) => {
        return { ...prev, email: "Email is required" };
      });
      isError =true;
    } else {
      setErrors((prev) => {
        return { ...prev, email: null };
      });
    }

    if (formValues.mobile.trim().length === 0) {
      setErrors((prev) => {
        return { ...prev, mobile: "Mobile is required" };
      });
      isError =true;
    } else {
      setErrors((prev) => {
        return { ...prev, mobile: null };
      });
    }

    if (formValues.registerbox === false) {
      setErrors((prev) => {
        return { ...prev, registerbox: "Please check the box" };
      });
      isError =true;
    } else {
      setErrors((prev) => {
        return { ...prev, registerbox: null };
      });
    }

    if (isError){
        return

    }
    else{
        navigate('/info')
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <input
          value={formValues.name}
          onChange={(e) => {
            setformValues((prev) => {
              return { ...prev, name: e.target.value };
            });
          }}
          type="text"
          placeholder="name"
        />
        <p>{errors.name}</p>
        <br />
        <input
          value={formValues.username}
          onChange={(e) => {
            setformValues((prev) => {
              return { ...prev, username: e.target.value };
            });
          }}
          type="text"
          placeholder="username"
        />
        <p>{errors.username}</p>
        <br />
        <input
          value={formValues.email}
          onChange={(e) => {
            setformValues((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
          type="text"
          placeholder="email"
        />
        <p>{errors.email}</p>
        <br />
        <input
          value={formValues.mobile}
          onChange={(e) => {
            setformValues((prev) => {
              return { ...prev, mobile: e.target.value };
            });
          }}
          type="text"
          placeholder="mobile"
        />
        <p>{errors.mobile}</p>
        <br />
        <label htmlFor="registerbox">
          <input
            value={formValues.registerbox}
            onChange={(e) => {
              setformValues((prev) => {
                return { ...prev, registerbox: e.target.value };
              });
            }}
            type="checkbox"
            name="registerbox"
            id="registerbox"
          />
          Share my registration data with Superapp
        </label>
        <p>{errors.registerbox}</p>
        <button
          onClick={handleSubmit}
          style={{
            border: "none",
            backgroundColor: "#72DB73",
            color: "#FFFFFF",
          }}
        >
        
          Sign up
        </button>
        
      </div>
    </>
  );
}

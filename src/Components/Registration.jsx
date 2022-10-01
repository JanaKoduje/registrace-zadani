import React, { useState } from "react";

const Registration = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleSumbit = (event) => {
    event.preventDefault();
    if (user.password !== user.passwordConfirm) {
      alert("Hesla se neshodují");
    } else {
      console.log(user);
    }
  };

  const handleChangeEmail = (event) => {
    if (user.username === "" && event.target.value.includes("@")) {
      setUser({
        ...user,
        username: event.target.value.split("@")[0],
        email: event.target.value,
      });
    } else {
      setUser({ ...user, email: event.target.value });
    }
  };

  const handleChangeUsername = (event) => {
    setUser({ ...user, username: event.target.value });
  };

  const handleChangePassword = (event) => {
    setUser({ ...user, password: event.target.value });
  };

  const handleChangePasswordConfirm = (event) => {
    setUser({ ...user, passwordConfirm: event.target.value });
  };

  return (
    <>
      <h2>Registrace</h2>
      <form className="form" onSubmit={handleSumbit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Zadejte e-mail"
          value={user.email}
          onChange={handleChangeEmail}
          required
        ></input>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Zadejte uživatelské jméno"
          value={user.username}
          onChange={handleChangeUsername}
        ></input>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Zadejte heslo"
          value={user.password}
          onChange={handleChangePassword}
          required
        ></input>
        <input
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          placeholder="Zopakujte heslo"
          value={user.passwordConfirm}
          onChange={handleChangePasswordConfirm}
        ></input>
        <button className="form__button">Registrovat</button>
      </form>
    </>
  );
};

export default Registration;

import React, { Component } from "react";
import Main from "../template/Main";
import axios from "axios";

const headerProps = {
  icon: "users",
  title: "Usuários",
};

const baseUrl = "http://localhost:3001/users";

const initialState = {
  user: { name: "", email: "" },
  list: [],
};

export default class Usercrud extends Component {
  state = { ...initialState };

  clear() {
    this.setState({ user: initialState.user });
  }

  save() {
    const user = this.state.user;
    const method = user.id ? "put" : "post"; //se tiver id, faça um put, se  tiver id, faça um post
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl; //se tiver id, user o url com id, se não tiver id, use o url
    axios[method](url, user).then((resp) => {
      const list = resp.data;
      this.setState({ user: initialState.user, list });
    });
  }

  updateField(event) {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  render() {
    return <Main {...headerProps}>Cadastro de Usuário</Main>;
  }
}

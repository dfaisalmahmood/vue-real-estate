import api from "../../api";
import router from "../../router";

const state = {
  userToken: "",
  loginError: ""
};

const getters = {
  userToken: state => state.userToken,
  loginError: state => state.loginError
};

const actions = {
  async resetLoginError({ commit }) {
    await commit("resetLoginError");
  },
  // async userLogin({ commit }, { email, password, next = "" }) {
  //   try {
  //     console.log(next);
  //     const response = await api.post("/auth/token/login/", {
  //       email,
  //       password
  //     });
  //     await commit("userLogin", response.data.auth_token);
  //     api.defaults.headers.common[
  //       "Authorization"
  //     ] = `Token ${response.data.auth_token}`;
  //     router.push(`/${next}`); // next: String
  //   } catch (err) {
  //     console.error(err);
  //     await commit("loginError", "Wrong credentials");
  //   }
  // },
  async userLogin({ commit }, token) {
    await commit("userLogin", token);
  },
  async userLogout({ commit }) {
    try {
      await api.post("/auth/token/logout/");
      await commit("userLogout");
      api.defaults.headers.common["Authorization"] = undefined;
      router.push("/login");
    } catch (err) {
      console.error(err);
    }
  }
};

const mutations = {
  userLogin(state, auth_token) {
    state.userToken = auth_token;
    console.log(state.userToken);
  },
  userLogout(state) {
    state.userToken = "";
  },
  loginError(message) {
    state.loginError = message;
  },
  resetLoginError() {
    state.loginError = "";
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};

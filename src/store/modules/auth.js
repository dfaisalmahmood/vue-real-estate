import api from '../../api';
import router from '../../router';

const state = {
  userToken: "",
};

const getters = {
  userToken: state => state.userToken
};

const actions = {
  async userLogin({
    commit
  }, {
    email,
    password,
    next = ""
  }) {
    try {
      console.log(next);
      const response = await api.post('/auth/token/login/', {
        email,
        password
      });
      await commit('userLogin', response.data.auth_token);
      api.defaults.headers.common['Authorization'] = `Token ${response.data.auth_token}`;
      router.push(`/${next}`); // next: String

    } catch (err) {
      console.error(err);
    }
  },
  async userLogout({
    commit
  }) {
    try {
      await api.post('/auth/token/logout/');
      await commit('userLogout');
      api.defaults.headers.common['Authorization'] = undefined;
      router.push('/');
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
  }
};


export default {
  state,
  actions,
  mutations,
  getters
};
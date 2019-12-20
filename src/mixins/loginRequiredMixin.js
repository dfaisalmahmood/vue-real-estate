// import { mapGetters } from 'vuex';
import store from '../store';

export default {
    beforeRouteEnter(to, from, next) {
        if (store.getters.userToken === "") {
            next({
                name: "userLogin"
            });
        } else {
            next();
        }
    }
}
export const vuelidateBasicMixin = {
  computed: {
    // ...mapGetters(["loginError"]),
    usernameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.minLength &&
        errors.push("Username must be at least 6 characters long");
      !this.$v.username.required && errors.push("Username is required");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid email");
      !this.$v.email.required && errors.push("Email is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Password must be at least 8 characters long");
      !this.$v.password.notBothAlphanumeric &&
        errors.push("Password must include alphabets and numbers");
      !this.$v.password.required && errors.push("Password is required");
      return errors;
    },
    repeatPasswordErrors() {
      const errors = [];
      if (!this.$v.repeatPassword.$dirty) return errors;
      !this.$v.repeatPassword.sameAsPassword &&
        errors.push("Passwords must match");
      return errors;
    }
  }
};

export const basic = {
  methods: {
    basicRules(fieldName, minimumLimit = null) {
      let rules = [v => !!v || `${fieldName} required.`];
      if (minimumLimit) {
        rules.push(
          v =>
            (v && v.length >= minimumLimit) ||
            `${fieldName} must be ${minimumLimit} characters long.`
        );
      }
      return rules;
    }
  }
};

export const emailRules = {
  data() {
    return {
      emailRules: [
        v => !!v || "Email required.",
        v => /.+@.+/.test(v) || "Email must be valid"
      ]
    };
  }
};

export const passwordRules = {
  data() {
    return {
      passwordRules: [
        v => !!v || "Password required",
        v =>
          (!!v && v.length >= 8) ||
          "Password needs to be at least 8 characters long"
      ]
    };
  }
};

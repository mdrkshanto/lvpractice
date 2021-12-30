<template>
  <div class="container-fluid">
    <div class="row vh-100 justify-content-center align-items-center">
      <div class="col-sm-7 col-md-4">
        <div class="card">
          <div class="card-header">
            <span class="card-title fw-bolder">Login</span>
          </div>
          <div class="card-body">
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text"><i class="fas fa-at"></i></span>
              <input
                type="text"
                class="form-control shadow-none text-lowercase"
                placeholder="Login ID"
                v-model="loginID"
                @input="loginID = $event.target.value.toLowerCase().trim()"
              />
            </div>
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text"
                ><i class="fas fa-user-lock"></i
              ></span>
              <input
                :type="type"
                class="form-control shadow-none"
                placeholder="Password"
                v-model="password"
              />
              <span class="input-group-text bg-transparent" @click.prevent="passToggle"
                ><i
                  class="fas"
                  :class="type === 'password' ? 'fa-eye-slash' : 'fa-eye text-primary'"
                ></i
              ></span>
            </div>
          </div>
          <div
            class="card-footer"
            v-if="loginID && password !== '' && loginID && password !== null"
          >
            <div class="row justify-content-center">
              <button
                type="button"
                class="col-5 btn btn-sm btn-primary shadow-none"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: "password",
      loginID: null,
      password: null,
    };
  },
  methods: {
    passToggle() {
      if (this.type !== "password") {
        this.type = "password";
      } else {
        this.type = "text";
      }
    },
  },
};
</script>

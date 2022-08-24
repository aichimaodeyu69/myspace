<template>
  <ContentBase>
    <div class="row justify-content-md-center">
      <div class="col-3">
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="username" class="form-label">用户名</label>
            <input
              v-model="username"
              type="text"
              class="form-control"
              id="username"
            />
            <div id="password" class="form-text">密码</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="error-message">{{ error_message }}</div>
          <button type="submit" class="btn btn-primary">登录</button>
        </form>
      </div>
    </div>
  </ContentBase>
</template>

<script>
import ContentBase from "../components/ContentBase";
import { ref } from "vue";
import { useStore } from "vuex";
import router from "@/router/index";

export default {
  name: "Login",
  components: {
    ContentBase,
  },
  setup() {
    const store = useStore();
    const error_message = ref("");
    const username = ref("");
    const password = ref("");
    const login = () => {
      store.dispatch("login", {
        username: username.value,
        password: password.value,
        success() {
          router.push({ name: "userlist" });
        },
        error() {
          error_message.value = "用户名或密码错误";
        },
      });
    };
    return {
      username,
      password,
      error_message,
      login,
    };
  },
};
</script>

<style scoped>
button {
  width: 100%;
}
.error-message {
  color: red;
}
</style>

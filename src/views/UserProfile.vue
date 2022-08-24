<template>
  <ContentBase>
    <div class="row">
      <div class="col-3">
        <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user" />
        <UserProfileWrite @post_a_post="post_a_post" />
      </div>
      <div class="col-9">
        <UserProfilePosts :posts="posts" />
      </div>
    </div>
  </ContentBase>
</template>

<script>
import ContentBase from "../components/ContentBase";
import UserProfileInfo from "../components/UserProfileInfo";
import UserProfilePosts from "../components/UserProfilePosts";
import UserProfileWrite from "../components/UserProfileWrite";
import { reactive } from "vue";
import { useRoute } from "vue-router";
import $ from "jquery";
import { useStore } from "vuex";
export default {
  name: "UserProfile",
  components: {
    ContentBase,
    UserProfileInfo,
    UserProfilePosts,
    UserProfileWrite,
  },
  setup() {
    const store = useStore();
    const router = useRoute();
    const userId = router.params.userId;
    const user = reactive({});

    const posts = reactive({});

    $.ajax({
      url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
      type: "GET",
      data: {
        user_id: userId,
      },
      headers: {
        Authorization: "Bearer " + store.state.user.access,
      },
      success(resp) {
        user.id = resp.id;
        user.username = resp.username;
        user.photo = resp.photo;
        user.followerCount = resp.followerCount;
        user.is_followed = resp.is_followed;
        console.log("success");
      },
    });

    const follow = () => {
      if (user.is_followed) return;
      user.is_followed = true;
      user.followerCount++;
    };
    const unfollow = () => {
      if (!user.is_followed) return;
      user.is_followed = false;
      user.followerCount--;
    };

    const post_a_post = (content) => {
      posts.count++;
      posts.posts.unshift({
        id: 1,
        userId: 1,
        content: content,
      });
    };

    return {
      userId,
      user,
      follow,
      unfollow,
      posts,
      post_a_post,
    };
  },
};
</script>

<style scoped>
</style>

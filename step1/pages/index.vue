<template>
  <v-layout justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <logo/>
      </div>
      <v-card v-if="user && user.uid">
        <div class="text-xs-center">
          <h1>Welcome</h1>
          <v-avatar>
            <img :src="user.photoURL">
          </v-avatar>
          {{user.displayName}}
          <v-btn>Logout</v-btn>
        </div>
        <v-list two-line>
          <template v-for="(item, index) in messages">
            <v-list-tile :key="item.id" avatar>
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.message"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.author"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider :key="item.id + '_' +index" :inset="item.inset"></v-divider>
          </template>
        </v-list>
      </v-card>
      <v-card v-else>
        <div class="text-xs-center">
          <v-btn @click="googleLogin">Google Login</v-btn>
          <v-btn @click="twitterLogin">Twitter Login</v-btn>
          <v-btn @click="facebookLogin">Facebook Login</v-btn>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from "~/components/Logo.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Logo
  },
  data: function() {
    return {
      messages: [
        {
          id: 1,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          author: 'Janko Hraško',
          message: 'Správa jedna'
        },
        {
          id: 2,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          author: 'Katka Matka',
          message: 'Správa dva'
        },
        {
          id: 3,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          author: 'Petrík Svetrík',
          message: 'Správa tri'
        }
      ]      
    };
  },
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  },  
};
</script>
<style>
</style>


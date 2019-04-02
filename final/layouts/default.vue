<template>
  <v-app dark>
    <v-toolbar :clipped-left="clipped" fixed app>
      <v-toolbar-title v-text="title"/>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
    <v-bottom-nav :value="true" app>      
        <v-layout justify-center align-center>
          <v-flex xs12 sm8 md6 v-if="user && user.uid">
            <v-text-field v-model="message" :loading="loading" required append-icon="send" @keydown.enter="sendMessage" />            
          </v-flex>
        </v-layout>          
    </v-bottom-nav>
  </v-app>
</template>

<script>
import firebase, { fireDb } from "@/plugins/firebase"
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      message: '',
      loading: false,
      clipped: true,
      drawer: false,
      fixed: false,     
      title: "Žipomat 2019"
    };
  },
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
  methods: {
    async sendMessage() {
      this.loading = true
      const response = await fireDb.collection('messages').add({
          message: this.message,
          author: this.user.displayName,
          avatar: this.user.photoURL,
          created: firebase.firestore.Timestamp.fromDate(new Date())
        })        
        this.message = ''
        this.loading = false
    }
  }
};
</script>

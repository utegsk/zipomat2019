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
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
  methods: {
    sendMessage: function() {
      
    }
  }  
}
</script>

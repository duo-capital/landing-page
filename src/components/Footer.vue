<template>
  <v-footer dark padless>
    <v-card flat tile class="secondary white--text text-center">
      <v-card-text>
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4 white--text"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ icon.text }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        <router-link
          style="text-decoration: none; color: inherit;"
          v-for="navbar in navbars"
          :key="navbar.id"
          :to="navbar.router"
          >{{ navbar.names }}
        </router-link>
      </v-card-text>

      <v-divider></v-divider>
      <v-card-text class="white--text">
        Copyright &copy; 2022-{{ new Date().getFullYear() }} Duo Capital LLC DBA Hey Duo
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style scoped>
.v-card {
  width: 100%;
}
</style>

<script>
export default {
  data: () => ({
    icons: [
      {
        text: "mdi-twitter",
        link: "https://twitter.com/HeyDuoHq",
      },
    ],
    navbars: [
      { names: "Privacy | ", router: "/privacy" },
      { names: "Terms of Service | ", router: "/terms" },
      { names: "Cookie Policy", router: "/cookies" },
    ],
  }),
};
</script>

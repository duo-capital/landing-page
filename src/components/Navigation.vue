<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary color="secondary">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="@/assets/img/logo.png" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title white--text"
              >HeyDuo</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          @click="$router.push(link)"
        >
          <v-list-item-icon class="justify-center">
            <v-icon color="white">{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1 white--text">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app :color="color" :flat="flat" :dark="!isXs" :expand="flat">
      <v-toolbar-title>
        <v-img src="@/assets/img/logo.png" max-width="90px"
        @click="$router.push('/')" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4 white--text"
        v-if="isXs"
      />
      <div v-else>
        <v-btn text @click="$router.push('/')">
          <span :class="flat ? 'mr-2 white--text' : 'mr-2 text--white'"
            >Home</span
          >
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Home", "/"],
      ["mdi-security", "Privacy", "/privacy"],
      ["mdi-file-sign", "Terms of Service", "/terms"],
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>

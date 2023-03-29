<template>
  <NavBar
    :pages="pages"
    :active-page="activePage"
    :nav-link-click="(index) => (activePage = index)"
  />
  <GaleriiPage v-if="activePage == 0" />
  <MainPage v-if="activePage == 1" />
  <KontaktPage v-if="activePage == 2" />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import MainPage from "./components/MainPage.vue";
import GaleriiPage from "./components/GaleriiPage.vue";
import KontaktPage from "./components/KontaktPage.vue";

export default {
  name: "App",
  components: {
    NavBar,
    MainPage,
    GaleriiPage,
    KontaktPage,
  },
  data() {
    return {
      activePage: 1,
      pages: [
        {
          pageTitle: "Galerii",
          pageUrl: "galerii.html",
        },
        {
          pageTitle: "Fotograaf",
          pageUrl: "fotograaf.html",
        },
        {
          pageTitle: "Kontakt",
          pageUrl: "kontakt.html",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");
#app {
  font-family: "Playfair Display", serif;
  font-style: "Playfair Display";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #fbf5ef;
  color: #272744;
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>

<template>
  <Header
    :pages="pages"
    :active-page="activePage"
    :nav-link-click="(index) => (activePage = index)"
  />
  <GaleriiPage v-if="activePage == 0" />
  <KontaktPage v-if="activePage == 1" />
  <MainPage v-if="activePage == 2" />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import MainPage from "./components/MainPage.vue";
import GaleriiPage from "./components/GaleriiPage.vue";
import KontaktPage from "./components/KontaktPage.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    MainPage,
    GaleriiPage,
    KontaktPage,
    Footer,
  },
  data() {
    return {
      activePage: 2,
      pages: [
        {
          pageTitle: "Galerii",
          pageUrl: "galerii.html",
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
@import url("https://fonts.googleapis.com/css2?family=Patua+One&display=swap");
#app {
  font-family: "Patua One", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4f6c77;
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>

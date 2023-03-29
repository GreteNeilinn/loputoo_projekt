<template>
  <nav class="navbar navbar-expand-sm bg-transparent">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <div class="container">
        <ul class="navbar-nav d-flex justify-content-around">
          <li class="nav-item" v-for="(page, index) in pages" :key="index">
            <a
              class="nav-link"
              :class="{ currentPage: activePage == index && activePage != 1 }"
              @click.prevent="navLinkClick(index)"
              :href="page.pageUrl"
              >{{ page.pageTitle }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: ["pages", "activePage", "navLinkClick"],
  methods: {},
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");

.nav-link {
  color: #272744 !important;
  font-size: 170%;
  font-weight: 500;
  position: relative;
}

.nav-link:hover {
  color: #8b6d9c !important;
}

.currentPage::after {
  content: "";
  height: 2px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #272744;
  transition: all 0.2s;
}

li:nth-child(2) {
  font-family: "Great Vibes", cursive;
  font-size: 140%;
}
</style>
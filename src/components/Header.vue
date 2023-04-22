<template>
  <nav class="navbar navbar-expand-sm bg-transparent" id="nav">
    <a class="navbar-brand" href="#" @click.prevent="navLinkClick(2)"
      ><img id="image" src="~@/assets/logo_transparent_dark.png" alt="logo"
    /></a>
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
      <ul class="navbar-nav ms-auto">
        <li class="nav-item" v-for="(page, index) in pages" :key="index">
          <a
            class="nav-link"
            :class="{ currentPage: activePage == index && activePage != 2 }"
            @click.prevent="navLinkClick(index)"
            :href="page.pageUrl"
            >{{ page.pageTitle }}</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  props: ["pages", "activePage", "navLinkClick"],
};
</script>

<style scoped lang="scss">
#nav {
  background-color: #eae9e5 !important;
}
.navbar {
  padding-left: 20px;
  padding-right: 20px;
}

#image {
  height: 50px;
}

.nav-link {
  color: #4f6c77 !important;
  font-size: 20px;
  margin: 30px;
  font-weight: 500;
  position: relative;
  letter-spacing: 2px;
}

.nav-link:hover {
  color: #83989f !important;
}

.currentPage::after {
  content: "";
  height: 2px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #4f6c77;
}

@media only screen and (min-width: 1200px) {
  .navbar {
    padding-top: 10px;
    padding-left: 180px;
    padding-right: 180px;
  }

  #image {
    height: 70px;
  }

  .nav-link {
    font-size: 24px;
  }
}
</style>
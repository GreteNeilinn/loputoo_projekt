<template>
  <div class="home">
    <div class="main">
      <div
        class="mainContainer"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="150"
      >
        <div class="titleWrap">
          <h1 id="mainTitle">{{ mainTitle }}</h1>
          <div class="underline"></div>
        </div>
        <p class="mainParagraph">
          {{ mainPara }}
        </p>
      </div>
    </div>
    <div class="container intro">
      <h1
        class="introTitle"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="150"
      >
        {{ introTitle }}
      </h1>
      <p
        class="introPara"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="150"
      >
        {{ introPara }}
      </p>
    </div>
    <div
      class="cardBox"
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :visible="{ opacity: 1, y: 0 }"
      :delay="150"
    >
      <Card
        v-for="(card, index) in cards"
        :key="index"
        :title="card.title"
        :svg="card.svg"
      />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "MainPage",
  components: {
    Card,
  },
  data() {
    return {
      activePage: 2,
      mainTitle: "FOTOGRAAFI STUUDIO",
      mainPara: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      introTitle: "Tutvustus",
      introPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      cards: [
        {
          title: "ÜRITUSED",
          svg: "champagne",
        },
        {
          title: "STUUDIO",
          svg: "tripod",
        },
        {
          title: "PORTREED",
          svg: "frame",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
// -------------------- GENERAL ---------------

@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");

h1 {
  font-size: 160%;
  font-weight: 500;
  letter-spacing: 1px;
}

h2 {
  font-size: 130%;
  font-weight: 500;
}

.container {
  position: relative;
  width: 100%;
}

// -------------------- MAIN ------------------

.main {
  position: relative;
  margin: 0px;
  padding: 0px;
  height: 100vh !important;
  background-size: cover;
  background-image: url("~@/assets/avaleht.jpg");
  background-repeat: no-repeat;
  background-position: center;
}

.mainContainer {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-bottom: 190px;
}

.titleWrap {
  display: inline-block;
}

.underline {
  height: 0px;
  border: 5px solid #a7c4d4;
  border-radius: 20px;
}
/*
#mainTitle {
  text-underline-offset: 15px;
  text-decoration: underline #a7c4d4 10px;
}
*/

.mainParagraph {
  margin-top: 20px;
}

// -------------------- INTRO ---------------

.intro {
  height: 500px;
  max-width: 100vw;
  background-color: #a7c4d4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  padding: 30px;
}

.introPara {
  margin-top: 20px;
  text-align: justify;
  font-family: "Playfair Display", serif;
}

// -------------------- CARDS ----------------

.cardBox {
  position: relative !important;
  flex-direction: column;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
}

/*
.cardBox {
  width: 70%;
  flex-direction: row;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f2d3ab;
  display: flex;
  justify-content: center;
  border: 5px solid #272744;
  align-items: center;
  flex-wrap: wrap;
}
@media only screen and (max-width: 1200px) {
  .cardBox {
    width: 100%;
  }
}
@media only screen and (max-width: 1400px) {
  .cardBox {
    width: 80%;
  }
}
*/

// -------------------- DESKTOP VIEW ---------------

@media only screen and (min-width: 1200px) {
  .main {
    margin: 0px;
    padding: 0px;
    height: 90vh !important;
    width: 100%t;
    background-size: cover;
    background-image: url("~@/assets/avaleht.jpg");
    background-repeat: no-repeat;
    background-position: center;
  }

  .mainContainer {
    display: block;
    padding: 20px;
    position: absolute;
    top: 30%;
    left: 20%;
    transform: translateY(0%);
    text-align: left;
  }

  h1 {
    font-size: 50px;
    letter-spacing: 3px;
  }
  .mainParagraph {
    font-size: 20px;
  }

  .intro {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 300px;
  }

  .introTitle {
    flex: 1;
  }

  .introPara {
    flex: 1;
    font-size: 24px;
  }

  .cardBox {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 60px;
    margin-left: 15%;
    margin-right: 15%;
  }
}
</style>

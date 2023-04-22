<template>
  <div class="card">
    <div class="face card-front">
      <div class="card-image card-1">
        <img id="img" :src="tripod" alt="card image" />
      </div>
      <h2>{{ title }}</h2>
    </div>
    <div class="face card-back">
      <h2 class="cardTitle">{{ title }}</h2>
      <p class="cardPara">
        {{ para }}
      </p>
    </div>
  </div>
</template>

<script>
import tripod from "~@/assets/img/tripod.svg";
import champagne from "~@/assets/img/tripod.svg";
import frame from "~@/assets/img/tripod.svg";
export default {
  name: "Card",
  props: ["title", "svg"],
  data() {
    return {
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunit ut labore et dolore magna aliqua.",
      sth: require(tripod),
    };
  },
};
</script>

<style scoped lang="scss">
h2 {
  font-size: 20px;
  letter-spacing: 2px;
}

.card {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 300px;
  height: 40vh;
  margin: 30px;
  align-self: normal;
  color: #fbf5ef;
  border-radius: 15px;
}

.card:hover .card-front {
  transform: perspective(600px) rotateY(180deg);
}

.card:hover .card-back {
  transform: perspective(600px) rotateY(360deg);
}

.face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  transition: 0.5s;
}

.card-front {
  transform: perspective(600px) rotateY(00deg);
  border-radius: 15px;
  background: #4f6c77;
}

.card-back {
  transform: perspective(600px) rotateY(180deg);
  border-radius: 15px;
  background: #4f6c77;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 35px;
}

.card-image {
  height: 35vh;
  background-size: cover;
}

.cardPara {
  margin-top: 5px;
  font-size: 13px;
}

.cardPara {
  font-family: "Playfair Display", serif;
}

#img {
  height: 75%;
  margin-top: 40px;
  filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(306deg)
    brightness(106%) contrast(101%);
}

@media only screen and (min-width: 1200px) {
  .cardPara {
    font-size: 16px;
  }

  h2 {
    font-size: 26px;
  }
}
</style>
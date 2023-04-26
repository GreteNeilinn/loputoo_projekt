<template>
  <div class="card" @click.prevent="addClass()">
    <div class="card_inner" :class="{ flipped: flip == 1 }">
      <div class="face card-front">
        <div class="card-image card-1">
          <img
            v-if="svg == 'champagne'"
            id="img"
            src="~@/assets/champagne.svg"
            :alt="svg"
          />
          <img
            v-if="svg == 'tripod'"
            id="img"
            src="~@/assets/tripod.svg"
            :alt="svg"
          />
          <img
            v-if="svg == 'frame'"
            id="img"
            src="~@/assets/frame.svg"
            :alt="svg"
          />
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
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["title", "svg"],
  methods: {
    addClass() {
      this.flip == 1 ? (this.flip = 0) : (this.flip = 1);
    },
  },
  data() {
    return {
      flip: 0,
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunit ut labore et dolore magna aliqua.",
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
  box-sizing: border-box;
  width: 300px;
  height: 40vh;
  margin-top: 30px;
  margin-bottom: 30px;
  align-self: center;
  color: #ffffff;
  border-radius: 15px;
  perspective: 1000px;
}

.card_inner {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}

.card_inner.flipped {
  transform: rotateY(180deg);
}

.face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
}

.card-front {
  border-radius: 15px;
  background: #4f6c77;
}

.card-back {
  transform: rotateY(180deg);
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
  font-size: 15px;
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
  .card {
    margin-left: 10px;
    margin-right: 10px;
  }

  .cardPara {
    font-size: 16px;
  }

  h2 {
    font-size: 26px;
  }
}
</style>
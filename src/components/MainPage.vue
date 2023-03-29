<template>
  <div class="container main">
    <div class="middle">
      <h1>Tutvustus</h1>
      <p class="mainParagraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunit
        ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>
  <div class="container cards">
    <div class="cardBox">
      <div class="card">
        <div class="face card-front">
          <div class="card-image card-1"></div>
          <h2 class="cardTitle">ÜRITUSED</h2>
        </div>
        <div class="face card-back">
          <h2>Üritused</h2>
          <p class="cardParagraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunit ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div class="card">
        <div class="face card-front">
          <div class="card-image card-2"></div>
          <h2 class="cardTitle">STUUDIO</h2>
        </div>
        <div class="face card-back">
          <h2>Stuudio</h2>
          <p class="cardParagraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunit ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div class="card">
        <div class="face card-front">
          <div class="card-image card-3"></div>
          <h2 class="cardTitle">PORTREED</h2>
        </div>
        <div class="face card-back">
          <h2>Portreed</h2>
          <p class="cardParagraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunit ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  </div>

  <h1>main</h1>
</template>

<script>
export default {
  name: "MainPage",
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 160%;
  font-weight: 500;
}

h2 {
  font-size: 130%;
  font-weight: 500;
}

.container {
  position: relative;
  max-width: 100vw !important ;
}

.container.main {
  height: 95vh !important;
  background: url("~@/assets/mainRight.jpg");
  border: 5px solid #272744;
}

.container.cards {
  position: relative !important;
  height: 80vh;
}

.middle {
  width: 45vh;
  height: 40vh;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 40px;
  transform: translate(-50%, -80%);
  background-color: #c69fa5;
  border: 5px solid #272744;
  color: #fbf5ef;
}

.mainParagraph {
  margin-top: 30px;
}

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

.card {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 250px;
  height: 40vh;
  margin: 30px;
  background: #f2d3ab;
  align-self: normal;
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
  box-shadow: 0 5px 10px #000;
  background: #fbf5ef;
  border: 5px solid #272744;
}

.card-back {
  transform: perspective(600px) rotateY(180deg);
  background: #494d7e;
  color: #fbf5ef;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  border: 5px solid #272744;
}

.card-image {
  background-color: #c69fa5;
  height: 35vh;
  border-bottom: 5px solid #272744;
  background-size: cover;
}

.cardTitle {
  padding: 1%;
}

.card-1 {
  background-image: url("~@/assets/cardLeft.jpg");
}

.card-2 {
  background-image: url("~@/assets/cardMiddle.jpg");
}

.card-3 {
  background-image: url("~@/assets/cardRight.jpg");
}

@media only screen and (max-width: 1200px) {
  .cardBox {
    width: 100%;
  }
}
@media only screen and (min-width: 1200px) and (max-width: 1400px) {
  .cardBox {
    width: 80%;
  }
}
</style>

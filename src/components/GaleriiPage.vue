<template>
  <div class="gallery">
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image.imgSrc"
      :alt="image.alt"
      :class="image.stretch"
    />
  </div>
</template>

<script>
export default {
  name: "GaleriiPage",
  data() {
    return {
      images: [
        {
          imgSrc: require("../assets/blueBuilding.jpg"),
          stretch: "horizontal",
          alt: "blue building",
        },
        {
          imgSrc: require("../assets/tree.jpg"),
          stretch: "horizontal",
          alt: "tree",
        },
        {
          imgSrc: require("../assets/street.jpg"),
          stretch: "vertical",
          alt: "street",
        },
        {
          imgSrc: require("../assets/buildings.jpg"),
          stretch: "vertical",
          alt: "buildings",
        },
        {
          imgSrc: require("../assets/cafe.jpg"),
          stretch: "vertical",
          alt: "cafe",
        },
        {
          imgSrc: require("../assets/stadium.jpg"),
          stretch: "line",
          alt: "stadium",
        },
        {
          imgSrc: require("../assets/blueberries.jpg"),
          stretch: "both",
          alt: "blueberries",
        },
        {
          imgSrc: require("../assets/flower.jpg"),
          stretch: "vertical",
          alt: "flowers",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.gallery {
  box-sizing: border-box;
  padding: 16px;
  max-width: 1200px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 250px;
  gap: 16px;
}

.vertical {
  grid-row: span 1;
}

.horizontal {
  grid-column: span 1;
}

.line {
  grid-column: span 1;
}

.both {
  grid-column: span 1;
  grid-row: span 1;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

@media only screen and (min-width: 1200px) {
  .vertical {
    grid-row: span 2;
  }

  .horizontal {
    grid-column: span 2;
  }

  .line {
    grid-column: span 4;
  }

  .both {
    grid-column: span 2;
    grid-row: span 2;
  }
}
</style>
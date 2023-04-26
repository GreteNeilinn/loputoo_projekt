<template>
  <div class="footer">
    <div class="line"></div>
    <div class="info">
      <div v-for="(row, index) in rows" :key="index">
        <h3>{{ row.title }}</h3>
        <ul>
          <li>{{ row.line1 }}</li>
          <li>{{ row.line2 }}</li>
          <li>{{ row.line3 }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      rows: [
        {
          title: "ASUKOHT",
          line1: "Linn",
          line2: "Aadress 14",
          line3: "52087",
        },
        {
          title: "MEEDIA",
          line1: "Facebook",
          line2: "Instagram",
          line3: "Pinterest",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.footer {
  position: relative;
  height: 240px;
  background-color: #4f6c77;
  color: #ffffff;
  font-family: "Playfair Display", serif;
}

.line {
  height: 5px;
  width: 80%;
  position: absolute;
  top: 15%;
  left: 10%;
  background-color: #ffffff;
  border-radius: 4px;
}

.info {
  padding-top: 20px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

h3 {
  font-size: 18px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  text-align: left;
  font-size: 13px;
  margin-bottom: 4px;
}

@media only screen and (min-width: 1200px) {
  .footer {
    height: 260px;
  }

  .line {
    top: 20%;
    width: 70%;
    left: 15%;
  }

  .info {
    padding-top: 50px;
  }

  li {
    margin-bottom: 6px;
  }
}
</style>
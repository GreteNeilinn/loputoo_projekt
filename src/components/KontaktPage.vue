<template>
  <div class="kontakt">
    <div class="box">
      <form ref="contactForm" @submit.prevent="sendEmail()">
        <h1>VÕTA ÜHENDUST</h1>
        <input
          v-for="(input, index) in inputs"
          :key="index"
          :type="input.type"
          :id="input.name"
          :placeholder="input.title"
          v-model="values[index].text"
          required
        />
        <textarea
          :id="messageId"
          :placeholder="messageTitle"
          rows="5"
          v-model="values[2].text"
          required
        ></textarea>
        <button type="submit" value="Send">{{ button }}</button>
      </form>
    </div>
  </div>
</template>

<script>
//import { ref } from "vue";
export default {
  name: "KontaktPage",
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute("src", "https://smtpjs.com/v3/smtp.js");
    document.head.appendChild(recaptchaScript);
  },
  methods: {
    sendEmail(e) {
      Email.send({
        SecureToken: "dfd4a3e6-48d1-4193-bab9-c74d81906563",
        To: "loputoo.test@gmail.com",
        From: "loputoo.test@gmail.com",
        Subject: "Email Sending Test",
        Body:
          this.values[0].text +
          "<" +
          this.values[1].text +
          "> saatis meili: \n" +
          this.values[2].text,
      }).then((message) => alert(message));
      this.$refs.contactForm.reset();
    },
  },
  data() {
    return {
      inputs: [
        {
          name: "name",
          type: "text",
          title: "Täisnimi",
        },
        {
          name: "mail",
          type: "email",
          title: "Meiliaadress",
        },
      ],
      values: [
        {
          text: "",
        },
        {
          text: "",
        },
        {
          text: "",
        },
      ],
      messageId: "message",
      messageTitle: "Sisu",
      button: "SAADA",
    };
  },
};
</script>

<style scoped lang="scss">
h1 {
  color: #ffffff;
  margin-bottom: 30px;
}
.kontakt {
  width: 100%;
  height: 80vh;
  position: relative;
}

.box {
  width: 75vw;
  height: 60vh;
  background-color: #a7c4d4;
  border-radius: 20px;
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  width: 95%;
  padding: 2vw 4vw;
}

input,
textarea {
  border: 0;
  margin: 10px;
  padding: 10px;
  outline: none;
  background: #ffffff;
  border-radius: 10px;
  letter-spacing: 1px;
}

button {
  padding: 15px;
  background: #4f6c77;
  color: #ffffff;
  border: 0;
  outline: none;
  cursor: pointer;
  width: 150px;
  margin: 20px auto 0px;
  border-radius: 10px;
}

@media only screen and (min-width: 1200px) {
  .box {
    height: 70vh;
    width: 65vw;
  }
  form {
    justify-content: flex-start;
    text-align: left;
  }
  input {
    width: 50%;
    height: 60px;
  }
  textarea {
    height: 180px;
  }

  input,
  textarea {
    margin-bottom: 20px;
  }
}
</style>
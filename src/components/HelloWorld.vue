<template>
  <div>
    <p>{{ defaultText }}</p>
    <input type="text" v-model="url" />
    <button @click="testAlert">Botao</button>
    <video controls v-if='src !== ""'>
      <source v-bind:src="src" type="audio/mpeg" />
      Your browser does not support the audio element.
    </video>
  </div>
</template>

<script>
import ytdl from "ytdl-core";

export default {
  name: "HelloWorld",
  data() {
    return {
      url: "",
      src: "",
    };
  },
  mounted() {
    browser.runtime.sendMessage({});
  },
  computed: {
    defaultText() {
      return browser.i18n.getMessage("extName");
    },
  },
  methods: {
    async testAlert() {
      ytdl(this.url, {
        format: "mp3",
        filter: "audioonly",
      }).on("response", (response) => {
        console.log(response.url);
        this.src = response.url;
        // var a = document.createElement("a");
        // a.href = response.url;
        // a.setAttribute("download", "");
        // a.setAttribute("target","_blank")
        // a.click();
      });
    },
  },
};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>

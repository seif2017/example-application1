<template>
  <div class="display-board">
    <h4>Tests FRONT/BACK (refresh 5 sec)</h4>
    <div>
      Frontend ENV (VUE_APP_AAA) : {{ frontendEnv }} <br />
      Backend ENV (XXX) : {{ backendEnv }} <br />
      <br />
      Frontend time : {{ fronendDate }} <br />
      Backend time : {{ backendDate }}<br />
      <br/>API CALL:<br/>
      {{ answer }}
    </div>
  </div>
</template>

<script>
import { getDate, getEnv } from "../services/UserService";

export default {
  name: "BackFront",

  data() {
    return {
      frontendEnv: "",
      backendEnv: "",
      fronendDate: "",
      backendDate: "",
      answer: {},
      timer: "",
    };
  },
  created() {
    this.refresh();
    this.timer = setInterval(this.refresh, 5000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    async refresh() {
      this.getFrontendEnv();
      this.getBackendEnv();
      this.getFrontendDate();
      this.getBackendDate();
      this.fetchData();
    },
    async fetchData() {
      const res = await fetch("https://yesno.wtf/api");
      const data = await res.json();
      this.answer = data;
    },
    async getBackendEnv() {
      await getEnv().then((response) => {
        console.log(response);
        this.backendEnv = response;
      });
    },
    getFrontendEnv() {
      this.frontendEnv = process.env.VUE_APP_AAA;
    },
    async getBackendDate() {
      await getDate().then((response) => {
        console.log(response);
        this.backendDate = response;
      });
    },
    getFrontendDate() {
      // console.log(process.env.TZ)
      // process.env.TZ = 'Africa/Tunis';
      // console.log(process.env.TZ)

      const dt = new Date(); // ==> donne UTC   si TZ est vide
      console.log(dt);
      const datenc =
        dt.toLocaleDateString("fr", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        }) +
        " " +
        dt.toLocaleTimeString("fr", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
      console.log(datenc);
      this.fronendDate = datenc;
    },
  },
};
</script>
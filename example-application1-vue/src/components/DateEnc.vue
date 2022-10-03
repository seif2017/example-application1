<template>
  <div class="display-board">
    <h4>Date Encaissement</h4>
    <div>
      VUE_APP_AAA : {{ env }} <br />
      ENV NODE JS : {{ env_node }} <br />
      <br />
      Browser time : <br />{{ datenc }} <br />
      Server time : <br />{{ datenc2 }}
    </div>
  </div>
</template>

<script>
import { getDate, getEnv } from "../services/UserService";

export default {
  name: "DateEnc",

  data() {
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

    const datenc2 = getDate().then((response) => {
      console.log(response);
      this.datenc2 = response;
    });

    const env_node = getEnv().then((response) => {
      console.log(response);
      this.env_node = response;
    });

    return {
      datenc: datenc,
      datenc2: datenc2,
      env: process.env.VUE_APP_AAA,
      env_node: env_node,
    };
  },
};
</script>
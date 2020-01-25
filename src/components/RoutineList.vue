<template>
  <div>
    <div v-for="(item,index) of state.routine" :key="index">{{item}}</div>
  </div>
</template>

<script>
import state from "../state";
export default {
  name: "RoutineList",
  data() {
    return {
      newRoutine: "",
      state: state
    };
  }
};
</script>
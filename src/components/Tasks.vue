<template>
  <div>
    <header style="position:fixed;top:0;left:0; backgroundcolor:#EEE; width:100%">
      <div @click="state.active=0;state.store();" :class="{'active':state.active==0}">Routine</div>
      <div @click="state.active=1;state.store();" :class="{'active':state.active==1}">Non-Routine</div>
    </header>
    <div>
      <div class="p" v-if="state.active==0">      
        <input v-if="routineProgress" @click="state.uncheck(0)" type='checkbox' checked/>
        {{routineProgress +'/'+ routineTotal}}
        <progress
          :value="routineProgress"
          :max="state.routine.length"
        ></progress>
      </div>
      <div class="p" v-if="state.active==1">
        <input v-if="nonRoutineProgress" @click="state.uncheck(1)" type='checkbox' checked/>
        {{nonRoutineProgress +'/'+ nonRoutineTotal}}
        <progress
          :value="nonRoutineProgress"
          :max="state.nonRoutine.length"
        ></progress>
      </div>
    </div>
    <div>
      <div class="task-holder" v-if="state.active==0">
        <div class="task-item" v-for="(item,index) of state.routine" :key="index">
          <input @change="state.store()" class="task-check" type="checkbox" v-model="item.done">
          <span @click="item.done=!item.done;state.store();" class="task">{{item.task}}</span>
        </div>
        <input
          style="display:none"
          class="newtask"
          type="text"
          v-model="newTask"
          @keyup.enter="state.routine.push({task:newTask,done:false});state.store();  newTask='';"
        >
      </div>

      <div class="task-holder" v-else>
        <div class="task-item" v-for="(item,index) of state.nonRoutine" :key="index">
          <input @change="state.store()" class="task-check" type="checkbox" v-model="item.done">
          <span @click="item.done=!item.done;state.store();" class="task">{{item.task}}</span>
          <span style="float:right; color:red; font-weight:bold;" @click="state.remove(index)">x</span>
        </div>
        <input id="inp" class="newtask" type="text" v-model="newTask" @keyup.enter="addNew">
      </div>
    </div>
  </div>
</template>

<script>
import state from "../state";
export default {
  name: "Tasks",
  props: {
    msg: String
  },
  data() {
    return {
      state: state,
      newTask: ""
    };
  },
  methods: {
    addNew() {
      if (this.newTask === "clear") {
        localStorage.clear();
        window.location.reload();
      } else if (this.newTask === "copy") {
        this.newTask = state.nonRoutine.map(d => d.task).join(";");
      } else {
        let list = this.newTask.split(";").map(d=>{return {task:d , done:false}});
        state.nonRoutine.push(...list);
        state.store(); 
             this.newTask = "";
      }

    }
  },
  computed: {
    routineProgress() {
      return state.routine.filter(d => d.done).length;
    },
    routineTotal() {
      return state.routine.length;
    },
    nonRoutineTotal() {
      return state.nonRoutine.length;
    },
    nonRoutineProgress() {
      return state.nonRoutine.filter(d => d.done).length;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header div {
  width: 50%;
  outline: 1px solid #CCC;
  cursor: pointer;
  padding: 10px 0;
  text-align: center;
  display: inline-block;
}
header div.active {
  background: #CCC;
}
.task-holder {
  text-align: left;
}
.task-check {
  width: 15px;
  height: 15px;
}
.task-item {
  padding: 5px;
}
.task {
  vertical-align: top;
  font-size: normal;
}
.newtask {
  background: #EEE;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 90%;
  padding: 10px;
  margin: 10px;
  border: 1px solid #CCC;
}
.p {
  margin: 10px;
}
</style>

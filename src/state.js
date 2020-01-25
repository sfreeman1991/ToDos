const state = {
  routine: [
    { task: "Wake up at 4 AM", done: false },
    { task: "Bathroom", done: false },
    { task: "Teeth cleaning", done: false },
    { task: "Yoga", done: false },
    { task: "Meditation", done: false },
    { task: "Pranayama", done: false },
    { task: "Surya Namaskaras", done: false },
    { task: "Full Body workout", done: false },
    { task: "HIIT", done: false },
    { task: "Long walks / taichi", done: false },
    { task: "Medium Intensity", done: false },
    { task: "indoor warmup", done: false },
    { task: "make teas :reishi and chaga", done: false },
    { task: "Apply onion  juice on hair and he shou wu on beard", done: false },
    { task: "PEE", done: false },
    { task: "drink detox drink", done: false },
    { task: "sunlight", done: false },
    { task: "Sauna", done: false },
    { task: "cold shower", done: false },
    { task: "spiritual time", done: false },
    { task: "Nature time", done: false },
    { task: "Yoga", done: false },
    { task: "Shower", done: false },
    { task: "Spa Massage", done: false },
    { task: "Earthing", done: false },
    {
      task: "dreaming, fantasizing, wishing, going for the blues",
      done: false
    },
    { task: "Sex, Romance, Love, massage, playing", done: false },
    { task: "Yoga", done: false }
  ],
  nonRoutine: [{ task: "get hair cut", done: false }],
  active: 0,
  store() {
    localStorage.setItem(
      "data",
      JSON.stringify({
        routine: state.routine,
        nonRoutine: state.nonRoutine,
        active: state.active
      })
    );
  },
  uncheck(input) {
    if (input === 0) {
      state.routine.forEach(d => (d.done = false));
    } else {
      state.nonRoutine.forEach(d => (d.done = false));
    }
  },
  get() {
    let data = localStorage.getItem("data");
    data && (data = JSON.parse(data));
    if (data && data.routine) {
      state.routine = data.routine;
      state.nonRoutine = data.nonRoutine;
      state.active = data.active;
    } else {
      state.store();
    }
  },
  remove(index) {
    if (state.nonRoutine[index].done) {
      state.nonRoutine.splice(index, 1);
      state.store();
    }
  }
};
window.state = state;
state.get();

export default state;

// make api call to fetch routine, non-routine list
// and todays' list

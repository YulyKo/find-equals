function setResultTime(state, resultTime) {
  state.resultTime = resultTime;
}

function setTime(state, time) {
  state.time = time;
}

function setDefaultTime(state) {
  state.time = 60;
}

export default {
  setResultTime,
  setTime,
  setDefaultTime,
};

export default {
  state: {
    questions: [
      { id: 1, inquiry: "Test?", value: "" },
      { is: 2, inquiry: "Test 2?", value: "" }
    ]
  },
  getters: {
    questions(state) {
      return state.questions;
    }
  }
};

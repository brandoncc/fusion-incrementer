export default {
  increment: async ({value}, _ctx) => {
    return {value: value + 1};
  },
  decrement: async ({value}, _ctx) => {
    return {value: value - 1};
  }
}

export const selectAll = {
  mounted(el) {
    const input = el.querySelector(".q-field__native");

    input.addEventListener("focus", () => {
      if (input.value.length) {
        input.select();
      }
    });
  },
};

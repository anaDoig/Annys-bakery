const getCookies = (state) => state.cookies;

const getSliderItem = (state, key) => {
  const items = state[key][key];
  return items.slice(0, 3);
};

export { getCookies, getSliderItem };

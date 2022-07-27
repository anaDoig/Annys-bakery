const getSliderItem = (state, key) => {
  const items = state[key][key];
  return items.slice(0, 3);
};

export { getSliderItem };

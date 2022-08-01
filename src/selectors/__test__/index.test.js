import { stateBuilder } from "../../__fixtures__/storage";
import { getSliderItem } from "../";

describe("[SELECTORS]", () => {
  it("getSliderItem should return the three first elements from cookies state", () => {
    const state = stateBuilder();
    const expected = getSliderItem(state, "cookies");
    expect(expected).toEqual(state["cookies"].cookies.slice(0, 3));
  });

  it("getSliderItem should return an empty array from cookie state", () => {
    const state = stateBuilder({ cookies: 0 });
    const expected = getSliderItem(state, "cookies");
    expect(expected).toEqual([]);
  });

  it("getSliderItem should return an empty array from cakes state", () => {
    const state = stateBuilder();
    const expected = getSliderItem(state, "cakes");
    expect(expected).toEqual(state["cakes"].cakes.slice(0, 3));
  });

  it("getSliderItem should return an empty array from cakes state", () => {
    const state = stateBuilder({ cakes: 0 });
    const expected = getSliderItem(state, "cakes");
    expect(expected).toEqual([]);
  });

  it("getSliderItem should return an empty array from cupcakes state", () => {
    const state = stateBuilder();
    const expected = getSliderItem(state, "cupcakes");
    expect(expected).toEqual(state["cupcakes"].cupcakes.slice(0, 3));
  });

  it("getSliderItem should return the three first elements on cupcakes state", () => {
    const state = stateBuilder({ cupcakes: 0 });
    const expected = getSliderItem(state, "cupcakes");
    expect(expected).toEqual([]);
  });
});

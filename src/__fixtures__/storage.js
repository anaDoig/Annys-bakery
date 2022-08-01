const generateItems = (length) =>
  Array.from({ length }).map((_, index) => ({
    id: index,
    name: "test name",
    img: "test url",
    price: { s: 40, m: 75 },
    size: { s: 10, m: 20 },
    unit: "units",
  }));

const generateItemsCart = (length) =>
  Array.from({ length }).map((_, index) => ({
    name: "test name",
    img: "test url",
    price: 12,
    size: 6,
    unit: "unitys",
    quantity: 3,
    id: index,
  }));

const cookiesStateBuilder = (length = 3) => ({
  cookies: generateItems(length),
  loading: false,
  errors: null,
});

const cupcakesStateBuilder = (length = 3) => ({
  cupcakes: generateItems(length),
  loading: false,
  errors: null,
});

const cakesStateBuilder = (length = 3) => ({
  cakes: generateItems(length),
  loading: false,
  errors: null,
});

const shippingCardStateBuilder = (length = 3) => ({
  items: generateItemsCart(length),
  error: false,
  isLoading: false,
});

const stateBuilder = (props) => {
  const { shoppingCart, cakes, cupcakes, cookies } = props || { shoppingCart: 3, cakes: 3, cupcakes: 3, cookies: 3 };

  return {
    shoppingCart: shippingCardStateBuilder(shoppingCart),
    cakes: cakesStateBuilder(cakes),
    cupcakes: cupcakesStateBuilder(cupcakes),
    cookies: cookiesStateBuilder(cookies),
  };
};

export { cookiesStateBuilder, cupcakesStateBuilder, cakesStateBuilder, shippingCardStateBuilder, stateBuilder };

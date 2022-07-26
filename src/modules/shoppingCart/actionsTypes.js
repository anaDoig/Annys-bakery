const PREFIX = "SHOPPING_CART";

const actionsTypes = {
  ADD: `[${PREFIX}] ADD`,
  REMOVE: `[${PREFIX}] REMOVE`,
  LIST_PENDING: `[${PREFIX}] LIST_PENDING`,
  LIST_FULLFILED: `[${PREFIX}] LIST_FULLFILED`,
  LIST_ERROR: `[${PREFIX}] LIST_ERROR`,
  UPDATE: `[${PREFIX}] UPDATE`,
};

export { actionsTypes };

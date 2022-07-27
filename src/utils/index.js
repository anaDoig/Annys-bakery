const getLowestPrice = (obj) => {
    return Math.min(...Object.values(obj));
};

export { getLowestPrice };
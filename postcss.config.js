
function isMax(mq) {
  return /max-width/.test(mq);
}

function isMin(mq) {
  return /min-width/.test(mq);
}

function sortMediaQueries(a, b) {
  let A = a.replace(/\D/g, ""),
      B = b.replace(/\D/g, "");

  if (isMax(a) && isMax(b)) {
    return B - A;
  } else if (isMin(a) && isMin(b)) {
    return A - B;
  } else if (isMax(a) && isMin(b)) {
    return 1;
  } else if (isMin(a) && isMax(b)) {
    return -1;
  }

  return 1;
}

module.exports = {
  plugins: {
    "postcss-easing-gradients":{
      precision: 0.1,
      alphaDecimals: 5
    },
    "postcss-object-fit-images":{},
    autoprefixer: {},
    mqpacker: {sort: sortMediaQueries}
  }
}

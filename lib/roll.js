export function roll(nsides, ndice, nrolls) {
  var object ={
    sides: nsides,
    dice: ndice,
    rolls: nrolls,
    results: []
  }
  
  for (let i = 0; i < nrolls; i++) {
    object.results.push(Math.floor(Math.random() * nsides) + 1);
  }

  return object;
}


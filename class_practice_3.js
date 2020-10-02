function foldTo(distance) {
  let paperThickness = 0.0001;
  let folds = 0;

  if (distance < 0) {
    return null;
  } else {
    while (paperThickness < distance) {
      paperThickness *= 2;
      folds++;
    }
  }
  return folds;
}

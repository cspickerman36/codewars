//How good are you really?: You receive an array with your peers' test scores. Now calculate the average and compare your score!

function betterThanAverage(classPoints, yourPoints) {
    let classAv = 0;
    let classmates = classPoints.length
  classPoints.forEach(x => {
    classAv += x
  });
  if (yourPoints > classAv/classmates){
    return true
    }else{
      return false
    }
  }
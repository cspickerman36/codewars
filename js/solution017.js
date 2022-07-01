//Century From Year: Given a year, return the century it is in.

function century(year) {
    let xCentury = (year/100)
    return Math.ceil(xCentury);
  }
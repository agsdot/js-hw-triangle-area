
function triangleArea(a,b,c) {
	var halfperimeter = (a + b + c) / 2;
	var Area = Math.sqrt(halfperimeter * (halfperimeter - a) * (halfperimeter - b) * (halfperimeter - c));
	return Area;
};


var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 5
};

console.log(triangleArea(triangle.sideA, triangle.sideB, triangle.sideC));
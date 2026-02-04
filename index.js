import placeholderPropertyObj from './properties/placeholderPropertyObj.js';
console.log(placeholderPropertyObj);
import propertyForSaleArr from './properties/propertyForSaleArr.js';

// use default parameter [placeholderPropertyObj] if no argument is passed
function getPropertyHtml(arr = [placeholderPropertyObj]) {
  // Use .map() to iterate over the array and create an array of HTML strings
  return arr
    .map((property) => {
      // Destructure property
      const { image, propertyLocation, priceGBP, comment, roomsM2 } = property;

      // .reduce() to calculate the total size from sizeArr
      const totalSize = roomsM2.reduce(
        (total, currentSize) => total + currentSize,
        0,
      );

      // return HTML template literal
      return `
    <section class="card">
    <img src="/images/${image}">
    <div class="card-right">
        <h2>${propertyLocation}</h2>
        <h3>${priceGBP}</h3>
        <p>${comment}</p>
        <h3>${totalSize} m&sup2;</h3>
    </div>
</section> 
    `;
    })
    .join('');
  // no arr - return placeholderPropertyObj
  // if (!arr) return
  // <section class="card">
  // <img src="/images/IMAGE">
  // <div class="card-right">
  //    <h2>PROPERTY LOCATION</h2>
  //    <h3>PRICE GBP</h3>
  //    <p>COMMENT</p>
  //    <h3>TOTAL SIZE IN SQUARE METRES m&sup2;</h3>
  // </div>
  // </section>

  // Else return arr
  // for (let i = 0; i < arr.length; i++) {
  //  const { image, location, price, comment, sizeArr } = arr[i];
  //  console.log(image, location, price, comment, sizeArr);
  // }

  /*
SUPER CHALLENGE 💪

Render out a card for each of the properties in the propertyForSaleArr array (in the 'properties' folder). Each card should have an image, a property location, a price, a comment and the TOTAL property size in square metres (each object has an array with the size in square metres of the individual rooms).

If no array of properties is passed to getPropertyHtml, the placeholder property stored in placeholderPropertyObj (in the 'properties' folder) should be rendered instead.

This is the JS I want you to use to complete this challenge 👇
- import/export
- .map()
- .join()
- Object destructuring
- .reduce()
- Default parameters

The HTML and CSS have been done for you. 
This is the HTML template 👇. Replace everything in UPPERCASE with property data.

<section class="card">
    <img src="/images/IMAGE">
    <div class="card-right">
        <h2>PROPERTY LOCATION</h2>
        <h3>PRICE GBP</h3>
        <p>COMMENT</p>
        <h3>TOTAL SIZE IN SQUARE METRES m&sup2;</h3>
    </div>
</section> 
*/
}

/***** Modify 👇 by adding an argument to the function call ONLY. *****/
document.getElementById('container').innerHTML =
  getPropertyHtml(propertyForSaleArr);

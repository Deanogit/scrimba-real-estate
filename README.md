## Scrimba JavaScript - Real Estate Challenge

Render data from an array in UI

- Default parameters
  `function getPropertyHtml(arr = [placeholderPropertyObj])`
  Here we are using a default parameter `placeholderPropertyObj` in the case that the arr is empty.

- map
  `return arr.map((property) => {}) `
  Here we RETURN the arr whilst mapping it, (creating a new array) whilst performing a code block on each `property`

- destructure
  `const {image, propertyLocation, priceGBP, comment, roomsM2} = property;`
  Here we are destructuring the property object, declaring variables to use in the code block. NB use actual keys from the object

- reduce
  `const totalSize = roomsM2.reduce((total, currentSize) => total + currentSize, 0)`
  Here we are looping through the roomsM2 array, adding current size to the total at each iteraction, returning the total. NB the 0 is used as the initial value when adding values, (if it was multiplying, 1 would be used in order to avoid the edge case of 0 x value, resulting in 0!)

- return HTML template literal
  `return <section>...</section>`
  Here we are returning a HTML template literal with the destructured values

- join
  `.join('')`
  Here we are joining all the HTML template literals together so they are rendered at once.

This is then added to the DOM by `document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr);`

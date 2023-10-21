function getCategory(condition) {
  let category = ''
  if (condition) {
    category = 'Admin'
  } else {
    category = 'Alumni'
  }
  console.log(category)
}

console.log(getCategory(true));
console.log(getCategory(false));

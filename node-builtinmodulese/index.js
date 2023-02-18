function greet(name) {
  console.log(`Hello ${name}`);
}

function higherOrderFunction(callback) {
  const name = "Guilherme"
  callback(name)
}

higherOrderFunction(greet)

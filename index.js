module.exports = function ruler(length) {
  let results = []
  for (var i = 1; i < length + 1; i++){
      var max = 0
    for (var j = 0; ; j++) {
      var powerResult = Math.pow(2, j)
      if (powerResult <= i){
        if (Math.floor(i / powerResult) === (i / powerResult)) {
          max = j
        }
      } else {
        results.push(max)
        break
      }
    }
  }
  return results
}

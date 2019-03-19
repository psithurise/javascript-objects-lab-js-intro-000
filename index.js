var recipes = {}

function updateObjectWithKeyAndValue(obj, key, val) {
  var recipesUp = Object.assign({}, obj, {[key]: val})
  return recipesUp
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val) {
  obj.key = val;
  return obj
}

function deleteFromObjectByKey(obj, key) {
  var recipesUp = Object.assign({}, obj)
  delete recipesUp.key
  return recipesUp
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj.key
  return obj
}


function getClass(ref) {
  return document.getElementsByClassName(ref)[0];
}
function getClasses(ref){
  return document.getElementsByClassName(ref);
}
function getId(ref){
  return document.getElementById(ref);
}
function getTags(ref){
  return document.getElementsByTagName(ref);
}
function select(ref){
  return document.querySelector(ref);
}
function selectAll(ref){
  return document.querySelectorAll(ref);
}

export {
  getClass,
  getClasses,
  getId,
  getTags,
  select,
  selectAll
};

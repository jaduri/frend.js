//helper function to add event listener to items in a list
function addListenerToList(list, eventType, callback){
  for(let i=0; i<list.length; i++){
    list[i].addEventListener(eventType, function (){
      callback(this);
    });
  }
}

//serialise a form
function serialise(formElement){
  const node = formElement;
  const inputFields = ["textarea", "input", "select"];
  let data = [];
  let value = "";

  if(inputFields.includes(node.localName)){
    value = `${encodeURIComponent(node.name)}=${encodeURIComponent(node.value)}`;
    data.push(value);
  }else if(node.children.length > 0){
    for(let i = 0; i < node.children.length; i++){
      value = serialise(node.children[i]);
      (value) && (data.push(value));
    }
  }else{
    return;
  }
  return data.join("&");
}

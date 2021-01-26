//helper function to add event listener to items in a list
function addListenerToList(list, eventType, callback){
  for(let i=0; i<list.length; i++){
    list[i].addEventListener(eventType, function (){
      callback(this);
    });
  }
}

//serialise a form
function serialise(form){
  let i = 0;
  const nodes = form.children;
  let data = "";
  while(i < nodes.length){
    if(nodes[i].localName == 'input' || nodes[i].localName == 'textarea'){
      data += `${encodeURIComponent(nodes[i].name)}=${encodeURIComponent(nodes[i].value)}`;
      data += "&";
    }
    i++;
  }
  return data.slice(0, -1);
}

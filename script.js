let getData = (data) => {
  document.getElementById('display').value += data;
};

let clearData = () => {
  document.getElementById('display').value = "";
};

let expressData = () => {
  let expression = document.getElementById('display').value; 
  let result = eval(expression);
  document.getElementById('display').value = result;
};

let backData = () => {
  document.getElementById('display').value = document.getElementById('display').value.slice(0, -1);
};



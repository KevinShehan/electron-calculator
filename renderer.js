function appendValue(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value); // Eval is fine for a simple calculator
    } catch (e) {
      display.value = 'Error';
    }
  }
  
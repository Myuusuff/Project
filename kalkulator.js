const displayResult = document.querySelector('.display__result');
    const displayHistory = document.querySelector('.display__history');
    let currentInput = '';
    let history = '';

    document.querySelectorAll('.number').forEach(button => {
      button.addEventListener('click', () => {
        currentInput += button.value;
        displayResult.textContent = currentInput;
      });
    });

    document.querySelectorAll('.operator').forEach(button => {
      button.addEventListener('click', () => {
        if (currentInput === '') return;
        history += currentInput + ' ' + button.value + ' ';
        displayHistory.textContent = history;
        currentInput = '';
        displayResult.textContent = '0';
      });
    });

    document.querySelector('.decimal').addEventListener('click', () => {
      if (!currentInput.includes('.')) {
        currentInput += '.';
        displayResult.textContent = currentInput;
      }
    });

    document.querySelector('.clear').addEventListener('click', () => {
      currentInput = '';
      history = '';
      displayResult.textContent = '0';
      displayHistory.textContent = '';
    });

    document.querySelector('.equal').addEventListener('click', () => {
      if (currentInput === '') return;
      history += currentInput;
      displayHistory.textContent = history;
      displayResult.textContent = eval(history.replace('÷', '/').replace('x', '*'));
      currentInput = '';
      history = '';
    });
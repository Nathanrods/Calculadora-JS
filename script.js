let currentInput = '';
        let previousInput = '';
        let operation = undefined;

        function appendNumber(number) {
            currentInput += number;
            updateDisplay();
        }

        function updateDisplay() {
            document.getElementById('display').value = currentInput;
        }

        function chooseOperation(op) {
            if (currentInput === '') return;
            if (previousInput !== '') {
                calculate();
            }
            operation = op;
            previousInput = currentInput;
            currentInput = '';
        }

        function calculate() {
            let result;
            const prev = parseFloat(previousInput);
            const current = parseFloat(currentInput);

            if (isNaN(prev) || isNaN(current)) return;

            switch (operation) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '*':
                    result = prev * current;
                    break;
                case '/':
                    result = prev / current;
                    break;
                default:
                    return;
            }

            currentInput = result;
            operation = undefined;
            previousInput = '';
            updateDisplay();
        }

        function clearDisplay() {
            currentInput = '';
            previousInput = '';
            operation = undefined;
            updateDisplay();
        }
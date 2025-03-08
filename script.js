const terminalText = document.getElementById('terminalText');

function typeText(text, speed = 50) {
    return new Promise((resolve) => {
        let i = 0;
        function typeChar() {
            if (i < text.length) {
                terminalText.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeChar, speed);
            } else {
                resolve();
            }
        }
        typeChar();
    });
}

function newLine() {
    terminalText.innerHTML += '\n';
}

async function runTerminal() {
    terminalText.innerHTML = ''; 

    await new Promise((resolve) => setTimeout(resolve, 2000));
    await typeText("hey there!", 30);
    newLine();

    await new Promise((resolve) => setTimeout(resolve, 1000));
    const currentDate = new Date();
    const dateStr = currentDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    await typeText(`It's ${dateStr}`, 30);
    newLine();

    await new Promise((resolve) => setTimeout(resolve, 1500));
    const quote = "We're a generation of men raised by women. I'm wondering if another woman is really the answer we need.";
    await typeText(quote, 70);

    newLine();
    newLine();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await typeText("What do you think ?", 30);
}

runTerminal();





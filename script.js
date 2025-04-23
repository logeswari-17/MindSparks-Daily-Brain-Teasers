const puzzles = [
    {
      question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
      answer: "echo"
    },
    {
      question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
      answer: "m"
    },
    {
      question: "I’m tall when I’m young, and I’m short when I’m old. What am I?",
      answer: "candle"
    }
  ];
  
  const today = new Date().getDate();
  const puzzle = puzzles[today % puzzles.length];
  document.getElementById('puzzle').innerText = puzzle.question;
  
  function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const feedback = document.getElementById('feedback');
  
    if (userAnswer === puzzle.answer) {
      feedback.textContent = "🎉 Correct! Well done!";
      feedback.classList.remove("text-red-500");
      feedback.classList.add("text-green-600");
    } else {
      feedback.textContent = "❌ Try again!";
      feedback.classList.remove("text-green-600");
      feedback.classList.add("text-red-500");
    }
  }

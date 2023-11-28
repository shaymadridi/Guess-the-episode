var questions = [
        {
            question: "https://fandomical.com/wp-content/uploads/2020/02/the-one-with-rachels-going-away-party.jpg",
            answers: [
                {text:"The one with Rachel`s date", correct: false },
                {text:"The one with Rachel`s Going away party", correct: true },
                {text:"The one where no one proposes", correct: false }
            ]
        },
        {
            question: "https://fandomical.com/wp-content/uploads/2020/02/source.gif",
            answers: [
                {text:"The pilot", correct: true },
                {text:"The one with the lottery", correct: false },
                {text:"The one with the cake", correct: false }
            ]
        },
        {
            question: "https://fandomical.com/wp-content/uploads/2020/02/giphy-3.gif",
            answers: [
                {text:"The one with the Embryos", correct: true },
                {text:"The one with the cake", correct: false },
                {text:"The last one", correct: false }
            ]
        },
        {
            question: "https://fandomical.com/wp-content/uploads/2020/02/giphy-1.gif",
            answers: [
                {text:"The one where Rachel quits", correct: false },
                {text:"The One With Joey`s New Brain", correct: true },
                {text:"The one with Joey`s new girlfriend", correct: false }
            ]
        },
        {
            question: "https://fandomical.com/wp-content/uploads/2020/02/Ross_Innappropriate_Song.gif",
            answers: [
                {text:"The one with Ross`s inappropriate song", correct: true },
                {text:"The one with Ross and Rachel…you know", correct: false },
                {text:"The one where Ross finds out", correct: false }
            ]
        },
        {
            question: "https://fandomical.com/wp-content/uploads/2020/02/maxresdefault-1.jpg",
            answers: [
                {text:"The one with blind dates", correct: true },
                {text:"The One with Phoebe`s Birthday Dinner", correct: false },
                {text:"The One in Vagas", correct: true }
            ]
        },
        {
            question: "https://fandomical.com/wp-content/uploads/2020/02/giphy-4.gif",
            answers: [
                {text:"The one with Rachel`s dreams", correct: false },
                {text:"The one with Phoebe`s wedding", correct: false },
                {text:"The one with the rumor", correct: true }
            ]
        },
        {
            question: "https://fandomical.com/wp-content/uploads/2020/02/Ross-Geller.png",
            answers: [
                {text:"The one with Ross`s grant", correct: false },
                {text:"The one with Ross`s denial", correct: false },
                {text:"The one with the Unagi", correct: true }
            ]
        },
        {
            question: "https://static.wikia.nocookie.net/friends/images/9/98/TOWNoOneProposes.png/revision/latest?cb=20180602113220",
            answers: [
                {text:"The One With The Sharks", correct: false },
                {text:"The One Where Emma Cries", correct: false },
                {text:"The One Where No One Proposes", correct: true }
            ]
        },
        {
            question: "https://static.wikia.nocookie.net/friends/images/8/86/TOWTLottery.png/revision/latest/scale-to-width-down/1000?cb=20180612052421",
            answers: [
                {text:"The one where Rachel has a baby", correct: false },
                {text:"TThe one with the lottery", correct: true },
                {text:"The One with Rachel`s Phone Number", correct: false }
            ]
        }
      ]
    
      var question = $("#question");
      var answerButton = $("#answer-button");
      var nextButton = $("#next-btn");
      //since the question index and score will be changing i will declare them as a varialbles to start from 0
      var currentQuestionIndex=0;
      var score=0;
    
      // this function will start the game and reset the question index and the score to 0 and and will set the button text to next since at the end
      // the text will change to restart or replay and it will invok the showQuestion() function to display the questions.
      function startGame(){
        currentQuestionIndex=0;
        score=0;
        nextButton.innerHTML='Next';
        showQuestion();
      }

      function each(array, func) { 
        for (var i = 0; i < array.length; i++) { 
              func(array[i], i); 
        } 
      }


    //this function will display the question and the answers
        function showQuestion() {
        // Get the current question from the array
        var currentQuestion = questions[currentQuestionIndex];
        // Create a new image element
        var image = new Image();
        // Set the source of the image to preload it
        image.src = currentQuestion.question;
        // Wait for the image to be loaded
        image.onload = function() {
          // Set the src attribute of the image with id 'question' once the image is loaded
          $('#question').attr('src', currentQuestion.question);
          // Clear previous answer buttons
          $('#answer-button').empty();
          // Iterate over each answer in the current question's answers array using jQuery's $.each
          $.each(currentQuestion.answers, function(index, element) {
            // Create a new button element using jQuery
            var button = $('<button>');
            // Set the innerHTML of the button to the current answer's text
            button.html(element.text);
            // Add the 'btn' class to the button
            button.addClass('btn');
            // Add a click event handler to check the answer when the button is clicked
            button.click(function() {
              checkAnswer(element.correct);
            });
            // Append the button to the element with id 'answer-button'
            $('#answer-button').append(button);
          });
        };
      }

     
    // Function to check the answer
    function checkAnswer(isCorrect) {
    // If the answer is correct, increment the score
    if (isCorrect) {
      score++;
    }
    // Check if there are more questions
    if (currentQuestionIndex < questions.length - 1) {
      // If there are more questions, move to the next question and show it
      currentQuestionIndex++;
      showQuestion();
    } else {
      // If there are no more questions, display final score and provide an option to restart
      // Clear the question image
      $('#question').attr('src', '');
      // Clear answer buttons
      $('#answer-button').empty();
      // Display the final score
      $('#answer-button').html('Your Score: ' + score + '/' + questions.length);
      
    }
    }
    
      startGame()
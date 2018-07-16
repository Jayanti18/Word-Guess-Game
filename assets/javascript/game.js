        var s;
        var count = 0;
        var winCount = 0;
        var ml;
        
        function rand()
        // var words = ["fish", "pancake", "biscuit", "table", "chair", "burger"];
        var words = ["fish", "cat"];
        // Pick a random word
        var randomWord = words[Math.floor(Math.random() * words.length)];
        var remainingLetters = randomWord.length;
        // Set up the answer array
        var answerArray = [];
        var guessedLetters = [];
        
        //here we fill the answer array with under scores
        // the number of underscores matches the letters in the randomly choosen word
        // function startUp ()
        // {
         for (var i = 0; i < randomWord.length; i++) {
            answerArray[i] = "_";
           }

        //put them in a string
        s = answerArray.join(" ");
        document.getElementById("answer").innerHTML = s;




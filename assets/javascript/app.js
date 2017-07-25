$("document").ready(function(){



	var questions = [
	{
		question: "What shoe brand has three stripes?",
		rightAnswer: "Adidas",
		answers:["Nike, Asics, Puma, New Balance"]
	},
	{
		question:"What is the item that holds items, mostly used by women?",
		rightAnswer: "Bag",
		answers: ["Umbrella, Wallet, Hat, Phone"]
	},
	{
		question:"How many members were in the Beatles?",
		rightAnswer: "4",
		answers: ["5, 3, 2, 6"]
	},
	{
		question: "Enter Sandman is by what band?"
		rightAnswer: "Metallica",
		answers: ["Nirvana, Pink Floyd, The Doors, AC/DC"]
	}
	];

	var correct = 0;
	var incorrect = 0;
	var counter = 120;

	function countdown() {
		counter--;
		$("#counter-number").text(counter);
		if(counter===0){
			done();
		}
	}

	function start() {
		setInterval(countdown, 100);
		
		$("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>" + counter + "</span> Seconds</h2>");
		
		$("#start").remove();
		for (var i = 0; i < questions.length; i++) {

		$("#question-area").append(questions[i].question + "</br");
		for (var j = 0; j < questions[i].answers.length; j++) {

		$("#question-area").append("<input type= 'radio' name='questions-" + i + "' value='" + questions[i].answers[j] + "''>" + " " + questions[i].answers[j] + "</br>");
		
		}

	  }

	  $("#questions-area").append("button id= 'done'>Done</button");
	}

	function done() {
		$.each($"input[name='question-0']:checked"), function() {
			if ($(this).val() === questions[0].rightAnswer) {
				correct++;
			}
			else {
				wrong++;
			}

		});
	
		$.each($"input[name='question-0']:checked"), function() {
			if ($(this).val() === questions[1].rightAnswer) {
				correct++;
			}
			else {
				wrong++;
			}

		});
		$.each($"input[name='question-0']:checked"), function() {
			if ($(this).val() === questions[2].rightAnswer) {
				correct++;
			}
			else {
				wrong++;
			}

		});
		$.each($"input[name='question-0']:checked"), function() {
			if ($(this).val() === questions[3].rightAnswer) {
				correct++;
			}
			else {
				wrong++;
			}

		});

		result();

		}

		function result() {
			clearInterval(timer);
		}

		$("#sub-wrapper h2").remove();

		$(question-area).html("<h3>Correct Answers: </h3>" + correct + "<h3>Wrong Answers: </h3>" + "wrong");
		}

		$(document).on("click", "#start", function() {
			start();
		});

		$(document).on("click", "#done", function() {
			done();
	});

});
















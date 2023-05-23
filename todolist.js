// todo-main: questions from obj
// todo-main: select answer
// todo-main: at the end show score

// todo: First of all We need a quiz data inside of an object
// todo: The array of object, within the object there should be question, variants, correct answer property
// todo: we need to keep track of the questions
// todo: we create a function called loadQuiz() and call every time we submit
// todo: in order to change the label we have to add id to them
// todo: select all of the important ids from html file inside of loadQuiz() function
// todo: create an event listener for the $submitBtn, make it switch to the next quiz when you tap on it and when the quiz ends it should stop switching
// todo: create deselectAnswer() and inside make .checked = false so when you switch to the next quiz, everything is unselected
// todo: create getSelected() set the var answer to undefined, loops through each answer inputs, if the input is checked, set the answer var to that inputs id, it should return that answer var
// todo: inside of the event listener, create a new var again called answer and set it to getSelected()
// todo-event-listener: if the answer is true create the next if statement inside and if the answer is equal to the quizData's correct property increment the score outside of that if statement currentQuiz++
// todo-event-listener: copy paste the next if statement where it stops loading the next quiz and create the else statement to it. it takes 'quiz' element node and sets the innerHtml to h2 "You answered correctly at {score}/{number of quizzes}" plus button called reload which reloads the page with event listener onClick="location.reload()"
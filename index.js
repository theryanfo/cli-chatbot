import { config } from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai"
import readline from 'readline'
config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

// ACTIVITY 1 
// Use readline to read data from a Readable stream
// Create a userinterface and specify the inputs and outputs
const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function handleInput(input) {
    try {

      // ACTIVITY 2 
      // initialize the gemini model as "model" and use the model to generate Content 

      const model = genAI.getGenerativeModel({model: "gemini-pro"});
      const result = await model.generateContent(input);
      const response = await result.response;
      const text = response.text()

      // Generate content based on the user's input
      // save the model's response in the variable "response"
      // print the model's reponse


      // Activity 1 
      // re prompt the interface to get the next input from the user 
      // hint: you might want to use .prompt()
      // hint 2: you will also have to prompt outside of this function to initialize chat

      console.log(text)
      userInterface.prompt()
    } catch (error) {
      console.error('Error processing your input:', error);
    }
}
  

  
  // ACTIVITY 1
  userInterface.on("line", (input) => {
     // use the handle input function you wrote here
     handleInput(input)
  });
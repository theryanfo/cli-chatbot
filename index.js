import { config } from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai"
import readline from 'readline'
config();


// ACTIVITY 1 
// Use readline to read data from a Readable stream
// Create a userinterface and specify the inputs and outputs

async function handleInput(input) {
    try {
      
      // ACTIVITY 2 
      // initialize the gemini model as "model" and use the model to generate Content 
  
      // Generate content based on the user's input
      // save the model's response in the variable "response"
      const text = response.text(); 
  
      console.log(text);
      // Activity 3 
      // re prompt the interface to get the next input from the user 
      // hint: you might want to use .prompt()
      // hint 2: you will also have to prompt outside of this function to initialize chat
    } catch (error) {
      console.error('Error processing your input:', error);
    }
  }
  

  
// ACTIVITY 3
  userInterface.on("line", (input) => {
     // use the handle input function you wrote here
  });

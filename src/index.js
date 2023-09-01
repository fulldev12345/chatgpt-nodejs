import OpenAI from "openai";
// import readline from "readline";
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const getMessage = async () => {
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello!" }],
  });
  return chatCompletion.choices;
};

getMessage().then((choices) => {
  console.log(choices);
});

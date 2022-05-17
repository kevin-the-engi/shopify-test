# Fun with AI App

An app that allows user to write a prompt and choose an engine for query to OpenAI. <br>
Once query request is complete, returns the prompt and response.

<p align="center">
  <img src="https://github.com/kevin-the-engi/shopify-test/blob/master/samples/openai.gif" width="75%" height="75%" />
</p>

# Features

* Display original prompt entered by user and the response from the API.
* Responses stored in order of newest to oldest.
* Save responses if the user leaves or reloads the page
* Let the user choose the AI engine from a select box

<img src="https://github.com/kevin-the-engi/shopify-test/blob/master/samples/sample02.png" width="400" height="400" />

## Required Files

A .env file required in the root directory with PORT, API_KEY, and API entries.<br>
PORT: 3001<br>
API address: [https://api.openai.com/v1/engines](https://api.openai.com/v1/engines')

## Available Scripts

In the project directory, you can run:

### `npm start`

Starts the backend.
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm run react-dev`

Runs webpack to build and compile changes made to frontend. 

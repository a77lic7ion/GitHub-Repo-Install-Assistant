import { GoogleGenAI } from "@google/genai";
import { InstallationMethod } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const PROMPT = `
Analyze the following README.md file content. Your task is to extract all distinct installation methods and create a comprehensive, step-by-step guide for each. You should infer common best practices even if they are not explicitly mentioned in the README.

For each method, you must provide a title, a detailed description, a relevant icon identifier, and a complete list of command-line steps.

The output MUST be a valid JSON array of objects. Each object must adhere to this structure:
- "title": A string for the name of the installation method (e.g., "Docker", "Python with venv", "From Source").
- "description": A detailed multi-sentence string explaining the method, its prerequisites, and what the user can expect. Be thorough. For example, if it's a Python project, mention checking for 'requirements.txt' and setting up a virtual environment.
- "icon": A string keyword for an icon. Choose from: "docker", "python", "npm", "yarn", "wsl", "source", "default". Use "default" if no others fit.
- "commands": An array of strings, where each string is a single, complete command to be run in the terminal. The commands should be exhaustive. For a Python project, this should include:
    1. A command to create a virtual environment (e.g., \`python3 -m venv .venv\`).
    2. A command to activate it (e.g., \`source .venv/bin/activate\` for Linux/macOS or \`.venv\\Scripts\\activate\` for Windows. Provide the Linux/macOS version).
    3. A command to install dependencies (e.g., \`pip install -r requirements.txt\`).
    4. The command to run the application.

Example response format:
[
  {
    "title": "Docker",
    "description": "This method uses Docker to create a containerized environment for the application. It ensures that all dependencies are handled and the application runs in an isolated space. You must have Docker installed and running on your system.",
    "icon": "docker",
    "commands": [
      "docker build -t my-app-image .",
      "docker run -p 8080:80 my-app-image"
    ]
  },
  {
    "title": "Python with venv",
    "description": "Install and run the project locally using Python's standard package manager, pip, within a virtual environment. This is the recommended way to manage dependencies for Python projects to avoid conflicts.",
    "icon": "python",
    "commands": [
      "python3 -m venv .venv",
      "source .venv/bin/activate",
      "pip install -r requirements.txt",
      "python3 main.py"
    ]
  }
]

If you cannot find any installation instructions, return an empty JSON array: [].
Do not add any explanation, commentary, or text outside of the JSON array.
Here is the README content:
---
`;

export const generateInstructions = async (readmeContent: string): Promise<InstallationMethod[]> => {
  try {
    const fullPrompt = `${PROMPT}\n${readmeContent}`;
    
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-04-17",
        contents: fullPrompt,
        config: {
            responseMimeType: "application/json",
            temperature: 0.2,
        }
    });

    let jsonStr = response.text.trim();
    
    // Clean potential markdown fences
    const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
    const match = jsonStr.match(fenceRegex);
    if (match && match[2]) {
      jsonStr = match[2].trim();
    }
    
    const parsedData = JSON.parse(jsonStr);

    if (!Array.isArray(parsedData)) {
        throw new Error("AI response was not a JSON array.");
    }
    
    // Basic validation of the parsed structure
    parsedData.forEach(item => {
        if (!item.title || !item.description || !item.commands || !Array.isArray(item.commands)) {
            throw new Error("AI response contains malformed installation method objects.");
        }
    });

    return parsedData as InstallationMethod[];
  } catch (error) {
    console.error("Error generating instructions with Gemini:", error);
    if(error instanceof Error) {
        throw new Error(`Failed to process instructions with AI: ${error.message}`);
    }
    throw new Error("An unknown error occurred during AI processing.");
  }
};
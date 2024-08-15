# Similarity Visualizer

This project is a web application that visualizes the similarities between concepts as interpreted by AI. It uses a JSON file containing data about the concepts, including their names, brief bios, and similarity scores, to generate an interactive visualization.

## Live Demo

Check out the live version of the project [here](https://aurora-freelance.github.io/orion/).

![Orion Demo](https://aurora-freelance.github.io/orion/demo2.png)

## How to Use

1. **Clone the Repository**: Begin by cloning the repository to your local machine:

   ```bash
   git clone https://github.com/Aurora-Freelance/orion.git
   ```

2. **Navigate to the Project Directory**: Change to the project directory:

   ```bash
   cd orion
   ```

3. **Launch the Server**: Start the server and open the application in your browser:

   ```bash
   python3 -m http.server & python3 -c "import webbrowser; webbrowser.open('http://localhost:8000/index.html')"
   ```

4. **Explore the Visualization**: You'll see bubbles representing different concepts on the screen. Each bubble displays a name and brief bio. Click on any bubble to visualize its similarities with other concepts. The bubbles will resize based on the similarity scores.

## Data Source

The data used in this project was generated using ChatGPT queries. The `language.json` file contains information about each concept, including the name, bio, and similarity scores. These scores reflect the perceived similarities as interpreted by ChatGPT.

## ChatGPT Queries

To generate a new visualization, use the following query. Simply paste the resulting JSON into `data/language.json`. Alternatively, you can create a new JSON file and update the file path in `js/main.js` on line 5.

```json
Can you give me a list of the ten most popular spoken languages in the world, formatted as a similarity matrix based on how similar their structure, writing system, and linguistic roots are? Use the JSON format below, and keep bios under five words.

{
  "title": "Explore Language Similarities Interactively",
  "people": [
    {
      "name": "Mandarin Chinese",
      "bio": "Most spoken language in China.",
      "color": "#FF5733",
      "radius": 100
    },
    {
      "name": "Spanish",
      "bio": "Widely spoken across america.",
      "color": "#3498DB",
      "radius": 100
    },
    {
      "name": "English",
      "bio": "Global lingua franca.",
      "color": "#FFC300",
      "radius": 100
    }
  ],
  "similarityMatrix": [
    [10, 6, 7],
    [6, 10, 8],
    [7, 8, 10]
  ]
}
```

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request. Contributions of any kind are welcome!

---

This version should be more polished and easier to understand.

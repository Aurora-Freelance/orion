**Philosopher Similarity Visualizer**

This project is a web application that visualizes the similarities between concepts as interpreted by AI. It uses a JSON file containing data about the concept, including their names, brief bios, and similarity scores, to generate an interactive visualization.

## Live Demo

Check out the live version of the project [here](https://aurora-freelance.github.io/orion/).

![orion](https://aurora-freelance.github.io/orion/demo2.png)

## How to Use

1. **Clone the Repository**: Start by cloning this repository to your local machine:

   ```bash
   git clone https://github.com/Aurora-Freelance/orion.git
   ```

2. **Navigate to the Project Directory**: Enter the project directory:

   ```bash
   cd orion
   ```

3. **Launch server\***

'''bash
python3 -m http.server & python3 -c "import webbrowser; webbrowser.open('http://localhost:8000/index.html')"
'''

This will start a local server at http://localhost:8000

4. **Explore the Visualization**: You will see bubbles representing different concepts on the screen. Each bubble contains the name and a brief bio. Click on any bubble to visualize the similarities between that concept and others. The bubbles will resize based on the similarity scores.

## Data Source

The data used in this project was generated using ChatGPT queries. Specifically, the `language.json` file contains information about each language, including the name, bio, and similarity scores. The similarity scores were determined based on the perceived similarity from the lense of ChatGPT.

## ChatGPT Queries

```
Can you give me a list of the ten most popular spoken languages in the world, format similarity matrix based on how similar their structure, writing system, and lingustic roots are. Ues this json formmating below. shorten the bio to under five words.
{
  "title": "Explore Music Artist Fan Base Overlaps Interactively",
  "people": [
    {
      "name": "Adele",
      "bio": "Grammy-winning singer-songwriter.",
      "color": "#FF5733",
      "radius": 100
    },
    {
      "name": "Ed Sheeran",
      "bio": "Chart-topping pop artist.",
      "color": "#3498DB",
      "radius": 100
    },
    {
      "name": "Beyoncé",
      "bio": "Iconic R&B performer.",
      "color": "#FFC300",
      "radius": 100
    }
  ],
  "similarityMatrix": [
    [10, 8, 7],
    [8, 10, 9],
    [7, 9, 10]
  ]
}

```

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request. Any contributions are welcome!

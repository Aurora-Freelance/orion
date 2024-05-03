**Philosopher Similarity Visualizer**

This project is a web application that visualizes the similarities between different people. It uses a JSON file containing data about the person, including their names, brief bios, and similarity scores, to generate an interactive visualization.

## Live Demo

Check out the live version of the project [here](https://aurora-freelance.github.io/orion/).

![orion](https://aurora-freelance.github.io/orion/demo.png)

## How to Use

1. **Clone the Repository**: Start by cloning this repository to your local machine:

   ```bash
   git clone https://github.com/Aurora-Freelance/orion.git
   ```

2. **Navigate to the Project Directory**: Enter the project directory:

   ```bash
   cd orion
   ```

3. **Open the HTML File**: Open the `index.html` file in your web browser.

4. **Explore the Visualization**: You will see bubbles representing different people on the screen. Each bubble contains the person's name and a brief bio. Click on any bubble to visualize the similarities between that philosopher and others. The bubbles will resize based on the similarity scores.

## Data Source

The people data used in this project was generated using ChatGPT queries. Specifically, the `people.json` file contains information about each person, including their name, bio, and similarity scores. The similarity scores were determined based on the perceived similarity of the person' from the lense of ChatGPT.

## ChatGPT Queries

```
Can you give me a list of the ten most famous music artists, format similarity matrix based on how similar their fan base is. Ues this json formmating below. shorten the bio to under five words.
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

## Acknowledgement

**Disclaimer**: The code and content in this project were generated using ChatGPT, an AI language model developed by OpenAI. As the project owner, I did not personally write any of the code or content contained herein. Instead, I utilized ChatGPT's capabilities to generate and manipulate text based on prompts and queries provided during interactions with the model. All credit for the code and content goes to OpenAI and the ChatGPT model.

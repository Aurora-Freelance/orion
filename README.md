**Philosopher Similarity Visualizer**

This project is a web application that visualizes the similarities between different philosophers based on their philosophical work. It uses a JSON file containing data about the philosophers, including their names, brief bios, and similarity scores, to generate an interactive visualization.

## How to Use

1. **Clone the Repository**: Start by cloning this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/philosopher-similarity-visualizer.git
   ```

2. **Navigate to the Project Directory**: Enter the project directory:

   ```bash
   cd philosopher-similarity-visualizer
   ```

3. **Open the HTML File**: Open the `index.html` file in your web browser.

4. **Explore the Visualization**: You will see bubbles representing different philosophers on the screen. Each bubble contains the philosopher's name and a brief bio. Click on any bubble to visualize the similarities between that philosopher and others. The bubbles will resize based on the similarity scores.

## Data Source

The philosopher data used in this project was generated using ChatGPT queries. Specifically, the `people.json` file contains information about each philosopher, including their name, bio, and similarity scores. The similarity scores were determined based on the perceived similarity of the philosophers' philosophical work.

## ChatGPT Queries

```
Can you give me a list of the ten most famous music artists, format similarity matrix based on how similar their fan base is. Ues this json formmating below. shorten the bio to under five words.
{
  "people": [
    {
      "name": "Alice",
      "bio": "HR representative for a large company.",
      "color": "#FF5733",
      "radius": 100
    },
    {
      "name": "Bob",
      "bio": "Software engineer with a passion for coding.",
      "color": "#3498DB",
      "radius": 100
    },
    {
      "name": "John",
      "bio": "Marketing specialist with a creative mindset.",
      "color": "#FFC300",
      "radius": 100
    }
  ],
  "similarityMatrix": [
    [10, 7, 5],
    [7, 10, 6],
    [5, 6, 10]
  ]
}

```

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request. Any contributions are welcome!

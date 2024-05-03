document.addEventListener("DOMContentLoaded", async function () {
  const { engine, render } = setupMatter();
  engine.world.gravity.y = 0.1; // This turns off the downward gravity in the y-axis

  const response = await fetch("data/people.json");
  const data = await response.json();
  const title = data.title;
  const people = data.people;
  const similarityMatrix = data.similarityMatrix;

  // Create a container for the title and description
  const instructionsContainer = document.createElement("div");
  instructionsContainer.className = "instructions";

  // Display the title at the top of the screen
  const appTitle = document.createElement("h1");
  appTitle.innerText = title;
  appTitle.className = "app-title"; // Adding class to the title
  instructionsContainer.appendChild(appTitle);

  // Display the description below the title
  const description = document.createElement("p");
  description.innerText =
    "Touch circles to make them grow. The size of the circles is based on the similarity between them.";
  description.className = "app-description"; // Adding class to the description
  instructionsContainer.appendChild(description);

  // Insert the instructions container at the top of the document body
  document.body.insertBefore(instructionsContainer, document.body.firstChild);

  let bodies = people.map((person) =>
    Matter.Bodies.circle(
      Math.random() * render.options.width,
      Math.random() * render.options.height,
      person.radius,
      {
        restitution: 0.9,
        frictionAir: 0.05,
        render: {
          fillStyle: person.color,
        },
      }
    )
  );

  Matter.World.add(engine.world, bodies);

  addEventListeners(engine, render, bodies, similarityMatrix);

  // Add an event to update forces after each engine update
  Matter.Events.on(engine, "afterUpdate", function () {
    const centerX = render.options.width / 2;
    const centerY = render.options.height / 2;

    bodies.forEach((body) => {
      // Calculate the direction vector from the body to the center
      const dx = centerX - body.position.x;
      const dy = centerY - body.position.y;

      // Normalize the direction vector
      const distance = Math.sqrt(dx * dx + dy * dy);
      const normalizedX = dx / distance;
      const normalizedY = dy / distance;

      // Apply a force that is proportional to the distance to the center
      const forceMagnitude = 0.00002 * distance;
      Matter.Body.applyForce(body, body.position, {
        x: normalizedX * forceMagnitude,
        y: normalizedY * forceMagnitude,
      });
    });
  });

  Matter.Events.on(render, "afterRender", function () {
    const ctx = render.context;
    bodies.forEach((body, index) => {
      // Calculate font size based on the circle's radius
      const fontSize = Math.max(10, body.circleRadius / 4); // Minimum font size is 10, adjust proportionally
      const bioFontSize = Math.max(8, body.circleRadius / 8); // Smaller font size for bio

      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Adjust font for name
      ctx.font = `${fontSize}px Arial`;
      ctx.fillText(people[index].name, body.position.x, body.position.y);

      // Adjust font for bio, displayed below the name
      ctx.font = `${bioFontSize}px Arial`;
      ctx.fillText(
        people[index].bio,
        body.position.x,
        body.position.y + body.circleRadius * 0.3
      );
    });
  });

  Matter.Engine.run(engine);
  Matter.Render.run(render);
});

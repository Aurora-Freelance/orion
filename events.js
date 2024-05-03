function addEventListeners(engine, render, bodies, similarityMatrix) {
  const Events = Matter.Events,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

  const mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { render: { visible: false } },
    });

  Matter.World.add(engine.world, mouseConstraint);

  Events.on(mouseConstraint, "mousedown", function (event) {
    const mousePosition = event.mouse.position;
    const clickedBody = Matter.Query.point(bodies, mousePosition)[0];
    if (clickedBody) {
      const selectedIndex = bodies.indexOf(clickedBody);
      bodies.forEach((body, index) => {
        const newSize = similarityMatrix[selectedIndex][index] * 10 + 20;
        Matter.Body.scale(
          body,
          newSize / body.circleRadius,
          newSize / body.circleRadius
        );
        body.circleRadius = newSize;
      });
    }
  });
}

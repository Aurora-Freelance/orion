function setupMatter() {
  const engine = Matter.Engine.create(),
    render = Matter.Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "#272727",
      },
    });

  return { engine, render };
}

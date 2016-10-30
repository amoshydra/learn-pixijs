const PIXI = require('pixi.js');
const assetsPath = '/dist/assets/';

//Aliases
const Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

//Create the renderer
let renderer = autoDetectRenderer(
  600, 600, {
    antialias: false,
    transparent: false,
    resolution: 1,
    backgroundColor: 0x061639
  }
);

//Add the canvas to the HTML document
document.body.appendChild(renderer.view);

//Create a container object called the `stage`
let stage = new Container();

// Load resources
loader
  .add(`${assetsPath}monster.png`)
  .load(setup);

function setup() {
  const sprite = new Sprite(
    resources[`${assetsPath}monster.png`].texture
  );
  stage.addChild(sprite);
  renderer.render(stage);
}

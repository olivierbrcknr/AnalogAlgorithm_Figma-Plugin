# Analog Algorithm

This is a Figma plugin, enabling users to generate shapes, inspired by the book [Analog Algorithm](https://analog-algorithm.com/) by [Christoph Grünberger](https://twitter.com/grnbrger). More specifically by its chapter number 03.


## Usage

1. Select a frame in which you want to generate the shape in.
2. In the frame, generate rectangles in the top layer. These will act as the dots of the grid, while their center is the relevant coordinate.
3. In the plugin window, select the number of points you want to connect. 
4. Hit "generate" to create a shape. A new vector shape will appear on your frame, called "Generated AA-Shape". When regenerating, this vector will be manipulated. If you want to save the shape, drag it out of the frame or rename it.


## Development

This project runs with [yarn](https://yarnpkg.com/).

#### Installation

Download this repository, open it in the terminal and run `yarn install`. In Figma, right click onto the canvas and navigate to `Plugins > Development > New Plugin…`.  
In the pop up, select "Link existing plugin" and navigate to this repo's `manifest.json`. 

#### Run typescript

Once installed, you need to run typescript by opening the repo in the terminal and running `yarn dev`. Now you should be able to run the plugin at `Plugins > Development > Analog Alogrithm Generator`.

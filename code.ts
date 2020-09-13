let selectedFrame = null;
let poly = null;
let pointsArray = [];

let generateForm = ( count ) => {

  if( !poly ){

    let newPoly = selectedFrame.children.find(node => node.name === "Generated AA-Shape")

    if( newPoly ){

      poly = newPoly

    }else{

      poly = figma.createVector();
      poly.fills = [];
      poly.strokes = [{type: 'SOLID', color: {r: 1, g: 0, b: 0}}];
      poly.strokeWeight = 1;
      poly.name = 'Generated AA-Shape';
      selectedFrame.appendChild(poly);

    }
  }

  let points = [];
  pointsArray = [];

  selectedFrame.children.forEach( (node) => {
    if( node.type === 'RECTANGLE' ){
      points.push(node)

      pointsArray.push( {
        "x" : ( node.x + node.width/2 ),
        "y" : ( node.y + node.height/2 )
      } );
    }
  });

  poly.x = 0;
  poly.y = 0;

  let maxPoints = points.length;

  let pathsString = null;

  for (var n = 0; n < count; n++) {

    var r = Math.floor(Math.random() * Math.floor( points.length ));

    if( n === 0 ){
      pathsString = "M ";
    }else{
      pathsString+= "L ";
    }

    pathsString += ( points[r].x + points[r].width/2 ) + " " + ( points[r].y + points[r].height/2 ) + " ";

    // no point should come twice, so remove it from array
    points.splice(r, 1);
  }

  pathsString += "Z";

  poly.vectorPaths = [{
    windingRule: "NONE",
    data: pathsString
  }];

  figma.ui.postMessage({
    pluginMessage: {
      type: 'points-count',
      data: {
        count: maxPoints,
        array: pointsArray
      }
    }
  })
}

figma.showUI(__html__);

figma.ui.onmessage = msg => {

  if (msg.type === 'frame-select') {

    let selection = figma.currentPage.selection;

    if( selection[0].type === 'FRAME' ){
      selectedFrame = selection[0];

      let name = selectedFrame.name;

      figma.ui.postMessage({
        pluginMessage: {
          type: 'frame-name',
          data: name
        }
      })

    }

  }

  if (msg.type === 'generate-form') {

    generateForm( msg.count );
  }
};

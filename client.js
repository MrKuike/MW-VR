// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface, Module} from 'react-360-web';

let r360;
let welcomePanelTag

function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules:[
      new appModule
    ],
    ...options,
  });

  const welcomePanel = new Surface(
    500,
    700,
    Surface.SurfaceShape.Flat
)

  welcomePanel.setAngle(0,0)

  welcomePanelTag = r360.renderToSurface(
    r360.createRoot('welcomePanel', { /* initial props */ }),
    welcomePanel
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('ESO2.jpg'));
}

class appModule extends Module{
  milkyway;
  constructor(){
    super('appModule');
  }

  start(){
    //////////////// CODIGO PARA UNA VENTANA//////////////
    this.milkyway = new Surface(
      50,
      50,
      Surface.SurfaceShape.Flat
  )
  
    this.milkyway.setAngle(0.01,-0.12)
  
    r360.renderToSurface(
      r360.createRoot('infoPanel', {
        id: 'milkyway',
        text: 'La via lactea es la galaxia en donde se encuentra nuestro sistema solar y por ende el lugar en donde habitamos.'
      }),
      this.milkyway
    );
    ////////////////////HASTA AQUI/////////////////////////

    r360.detachRoot(welcomePanelTag)
  }

  resizePanel(width, height, id){
    switch (id) {
      case 'milkyway':
        this.milkyway.resize(width,height)
        break;
      default:
        this.milkyway.resize(width,height)
        break;
    }
  }
  
}

window.React360 = {init};

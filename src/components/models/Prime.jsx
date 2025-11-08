// import React, { useState, useEffect, useRef } from 'react';

// const Prime = () => {
//   const [loading, setLoading] = useState(true);
//   const iframeRef = useRef(null);

//   const handleLoad = () => setLoading(false);

//   // const toggleFullscreen = () => {
//   //   const iframe = iframeRef.current;
//   //   if (iframe.requestFullscreen) iframe.requestFullscreen();
//   //   else if (iframe.webkitRequestFullscreen) iframe.webkitRequestFullscreen();
//   //   else if (iframe.mozRequestFullScreen) iframe.mozRequestFullScreen();
//   // };

//   useEffect(() => {
//     const resize = () => {
//       const container = document.getElementById('model-container');
//       if (container) container.style.height = `${window.innerHeight * 0.6}px`;
//     };
//     window.addEventListener('resize', resize);
//     resize();
//     return () => window.removeEventListener('resize', resize);
//   }, []);

//   return (
//     <div
//       id="model-container"
//       style={{
//         width: '100%',
//         height: '500px',
//         position: 'relative',
//         background: 'transparent',
//         boxShadow: '0 0 20px rgba(0,0,0,0.2)',
//         borderRadius: '12px',
//         overflow: 'hidden',
//       }}
//     >
//       {loading && (
//         <div style={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           fontSize: '1.2rem',
//           color: '#555'
//         }}>
//           Prime is coming ...
//         </div>
//       )}
//       <iframe
//         ref={iframeRef}
//         title="Optimus Prime 3D Model"
//         frameBorder="0"
//         allow="autoplay; fullscreen; xr-spatial-tracking"
//         allowFullScreen
//         mozAllowFullScreen="true"
//         webkitAllowFullScreen="true"
//         onLoad={handleLoad}
//         src="https://sketchfab.com/3d-models/optimus-prime-3d-model-8d550dab39a14c8e877d7e3050d6774f/embed?autostart=1&preload=1&transparent=1&ui_theme=dark&ui_controls=0&ui_infos=0&ui_stop=0&ui_watermark=0"
//         style={{ width: '100%', height: '100%', background: 'transparent' }}
//       ></iframe>
//       {/* <button
//         onClick={toggleFullscreen}
//         style={{
//           position: 'absolute',
//           bottom: '10px',
//           right: '10px',
//           padding: '8px 12px',
//           backgroundColor: '#007bff',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '4px',
//           cursor: 'pointer'
//         }}
//       >
//         Fullscreen
//       </button> */}
//     </div>
//   );
// };

// export default Prime;

// ______________________________________________________________________________________________________

// // ModelViewer.js
// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// // const url = '/optimus+prime+3d+model.glb';
// function Model({ url }) {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} />;
// }

// export default function ModelViewer() {
//   return (
//     <Canvas>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[0, 0, 5]} />
//       <Suspense fallback={null}>
//         <Model url='/optimus+prime+3d+model.glb' />
//       </Suspense>
//       <OrbitControls />
//     </Canvas>
//   );
// }

// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF, Environment, ContactShadows, Html } from '@react-three/drei';


// const modelPath = 'https://sketchfab.com/3d-models/optimus-prime-3d-model-8d550dab39a14c8e877d7e3050d6774f';


// function Model(props) {
//   const { scene } = useGLTF.preload('https://sketchfab.com/3d-models/optimus-prime-3d-model-8d550dab39a14c8e877d7e3050d6774f');;
//   return <primitive object={scene} {...props} />;
// }

// export default function Prime() {
//   return (
//     <div style={{ width: '100%', height: '100vh', background: '#111' }}>
//       <Canvas
//         shadows
//         camera={{ position: [0, 2, 5], fov: 50 }}
//         style={{ background: 'transparent' }}
//       >
//         <ambientLight intensity={0.5} />
//         <directionalLight
//           castShadow
//           position={[5, 10, 5]}
//           intensity={1}
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//         />
//         <Suspense fallback={<Html center><span style={{ color: '#fff' }}>Loading Optimus Prime...</span></Html>}>
//           <Model scale={1.5} position={[0, -1, 0]} />
//           <Environment preset="sunset" />
//           <ContactShadows position={[0, -1.2, 0]} opacity={0.5} scale={10} blur={1.5} far={4.5} />
//         </Suspense>
//         <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
//       </Canvas>
//     </div>
//   );
// }


// import React, { useEffect, useRef, useState } from 'react';

// const Prime = () => {
//   const iframeRef = useRef(null);
//   const [api, setApi] = useState(null);

//   useEffect(() => {
//     const loadViewer = () => {
//       const client = new window.Sketchfab(iframeRef.current);
//       const uid = '8d550dab39a14c8e877d7e3050d6774f'; // Replace with your model UID

//       client.init(uid, {
//         success: function (apiInstance) {
//           apiInstance.start();
//           apiInstance.addEventListener('viewerready', function () {
//             console.log('Sketchfab viewer is ready');
//             setApi(apiInstance);
//           });
//         },
//         error: function () {
//           console.error('Sketchfab viewer failed to load');
//         },
//         autostart: 1,
//         autospin: 1,
//         animation_autoplay: 1,
//         transparent: 1,
//         camera:1,
//         fps_speed: 70,
//         ui_controls: 0,
//         ui_infos: 0,
//         annotations_visible: 1,
//         ui_stop: 0,
//         ui_watermark: 0,
//         scrollwheel: 0,
//       });
//     };

//     if (window.Sketchfab) {
//       loadViewer();
//     } else {
//       const script = document.createElement('script');
//       script.src = 'https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js';
//       script.onload = loadViewer;
//       document.body.appendChild(script);
//     }
//   }, []);

//   // 🔍 Manual Zoom using camera position
//   const zoom = (factor) => {
//     if (!api) return;
//     api.getCameraLookAt((eye, center) => {
//       const direction = [
//         eye[0] - center[0],
//         eye[1] - center[1],
//         eye[2] - center[2],
//       ];
//       const newEye = [
//         center[0] + direction[0] * factor,
//         center[1] + direction[1] * factor,
//         center[2] + direction[2] * factor,
//       ];
//       api.setCameraLookAt(newEye, center, 0.5);
//     });
//   };

//   const zoomIn = () => zoom(0.9);   // Move camera closer
//   const zoomOut = () => zoom(1.1);  // Move camera farther

//   return (
//     <div>
//       <div style={{ width: '100%', height: '600px' }}>
//         <iframe
//           ref={iframeRef}
//           title="Sketchfab Viewer"
//           width="100%"
//           height="100%"
//           frameBorder="0"
//           allow="autoplay; fullscreen; xr-spatial-tracking"
//           allowFullScreen
//         />
//       </div>

//       {/* 🔧 Zoom Controls */}
//       <div style={{ marginTop: '10px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
//         <button
//           onClick={zoomIn}
//           style={{
//             padding: '10px 20px',
//             backgroundColor: '#007bff',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '6px',
//             cursor: 'pointer',
//           }}
//         >
//           Zoom In
//         </button>
//         <button
//           onClick={zoomOut}
//           style={{
//             padding: '10px 20px',
//             backgroundColor: '#6c757d',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '6px',
//             cursor: 'pointer',
//           }}
//         >
//           Zoom Out
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Prime;


import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { preload } from 'react-dom';
import { BsDownload } from 'react-icons/bs';

const Prime = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const loadViewer = () => {
      const client = new window.Sketchfab(iframeRef.current);
      const uid = '8d550dab39a14c8e877d7e3050d6774f';

      client.init(uid, {
        success: (api) => {
          api.start();
          api.addEventListener('viewerready', () => {
            console.log('Viewer ready');
          });
        },
        error: () => {
          console.error('Viewer failed to load');
        },
       autostart: 0,
        scrollwheel: 1, // ✅ Enables scroll zoom
        ui_controls: 0, // Optional: show UI to confirm zoom works
        transparent: 1,
        autospin:1,
        camera:1,
        fps_speed:70,
        annotation: 70,
        annotation_cycle: 1,
        // autostart: 1,
        preload: 1,
        ui_stop: 0,
        ui_watermark: 0,
        ui_infos: 1,
        automation: 0,
        download: 0,
        

      });
    };

    if (window.Sketchfab) {
      loadViewer();
    } else {
      const script = document.createElement('script');
      script.src = 'https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js';
      script.onload = loadViewer;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <iframe
        ref={iframeRef}
        title="Sketchfab Viewer"
        // width="600px"
        // height="400px"
        frameBorder="0"
        allow="autoplay; fullscreen; xr-spatial-tracking,cemera"
        allowFullScreen
        style={{height:'70%', width:'100%', justifyContent:'center', alignItems:'center', background:'transparent'}}

      /> 
    
  );
};

export default Prime;

// https://t.me/jamescodelab
// 8d550dab39a14c8e877d7e3050d6774f
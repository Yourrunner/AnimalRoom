const fs = require('fs');
const gltfPipeline = require('gltf-pipeline');

const glbPath = process.argv[2];
const outputPath = process.argv[3];

const options = {
  dracoOptions: { compressionLevel: 10 },
};

gltfPipeline.gltfToGlb(gltfPipeline.glbToGltf(fs.readFileSync(glbPath)), options)
  .then(function (results) {
    fs.writeFileSync(outputPath, results.glb);
    console.log('GLB file optimized successfully!');
  })
  .catch(function (error) {
    console.log('Optimization failed: ', error);
  });
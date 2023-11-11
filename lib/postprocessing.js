// 增加Babylon镜头后期Post Processing显示的模糊等
// see all parameters here: https://doc.babylonjs.com/features/featuresDeepDive/postProcesses/dofLenseEffects#usage
var parameters = {
   chromatic_aberration: 1.2,      // from 0 to x (1 for realism)
   edge_blur: .5,                  // from 0 to x (1 for realism)
   distortion: .2,               // from 0 to x (1 for realism)
   grain_amount: .5,               // from 0 to 1
   // grain_texture: BABYLON.Texture,     // texture to use for grain effect; if unset, use random B&W noise
   dof_focus_distance: 50,         // depth-of-field: focus distance; unset to disable (disabled by default)
   dof_aperture: .1,               // depth-of-field: focus blur bias (default: 1)
   dof_darken: .1,                 // depth-of-field: darken that which is out of focus (from 0 to 1, disabled by default)
   dof_pentagon: true,              // depth-of-field: makes a pentagon-like "bokeh" effect
   dof_gain:.25,                   // depth-of-field: highlights gain; unset to disable (disabled by default)
   dof_threshold: .25,              // depth-of-field: highlights threshold (default: 1)
   blur_noise: true,              // add a little bit of noise to the blur (default: true)
};

var lensEffect = new BABYLON.LensRenderingPipeline('lensEffects', parameters, scene, 1.0, camera);

scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline('lensEffects', camera);

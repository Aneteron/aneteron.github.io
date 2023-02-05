let flower;
loader.load("https://immersive-web.github.io/webxr-samples/media/gltf/sunflower/sunflower.gltf", function (gltf) {
    flower = gltf.scene;
});

session.addEventListener("select", (event) => {
    if (flower) {
        const clone = flower.clone();
        clone.position.copy(reticle.position);
        clone.quaternion.copy(reticle.quaternion);
        scene.add(clone);
    }
});
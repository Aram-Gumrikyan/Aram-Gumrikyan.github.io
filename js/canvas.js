function main() {
    const canvas = document.querySelector("#canvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 2;
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();

    light: {
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(-1, 2, 4);
        scene.add(light);
    }

    const geometry = new THREE.BoxGeometry(1, 1, 1);

    function makeInstance(geometry, color, x) {
        const material = new THREE.MeshPhongMaterial({
            color,
            // wireframe: true,
        });

        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        cube.position.x = x;

        return cube;
    }

    const cubes = [
        makeInstance(geometry, 0x44aa88, 0),
        makeInstance(geometry, 0x8844aa, -2),
        makeInstance(geometry, 0xaa8844, 2),
    ];

    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const pixelRatio = window.devicePixelRatio;
        const width = (canvas.clientWidth * pixelRatio) | 0;
        const height = (canvas.clientHeight * pixelRatio) | 0;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }
    }

    function animate() {
        let time = Math.random() / 40;

        resizeRendererToDisplaySize(renderer);

        cubes.forEach((cube) => {
            cube.rotation.x += time;
            cube.rotation.y += time;
        });

        renderer.render(scene, camera);

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}
// main();
function start() {
    console.log(app.language);
    main();
}

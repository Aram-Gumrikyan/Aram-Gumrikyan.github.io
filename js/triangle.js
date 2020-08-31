function main() {
    const canvas = document.querySelector("#canvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 20;
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();

    light: {
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(-1, 2, 4);
        scene.add(light);
    }

    shape: {
        let material = new THREE.LineBasicMaterial({ color: 0xffffff });
        let points = [];
        let shape = app.triangle[13];
        if (shape == "rectangular") {
            points.push(new THREE.Vector3(-5, -10, 0));
            points.push(new THREE.Vector3(-5, 5, 0));
            points.push(new THREE.Vector3(10, -10, 0));
            points.push(new THREE.Vector3(-5, -10, 0));
        } else if (shape == "equal sides (3)") {
            points.push(new THREE.Vector3(-10, -5, 0));
            points.push(new THREE.Vector3(0, Math.sqrt(300) - 5, 0));
            points.push(new THREE.Vector3(10, -5, 0));
            points.push(new THREE.Vector3(-10, -5, 0));
        } else if (shape == "equal sides (2)") {
            points.push(new THREE.Vector3(-5, -10, 0));
            points.push(new THREE.Vector3(0, 10, 0));
            points.push(new THREE.Vector3(5, -10, 0));
            points.push(new THREE.Vector3(-5, -10, 0));
        } else {
            points.push(new THREE.Vector3(-6, 0, 0));
            points.push(new THREE.Vector3(-3, 6, 0));
            points.push(new THREE.Vector3(6, 0, 0));
            points.push(new THREE.Vector3(-6, 0, 0));
        }

        let geometry = new THREE.BufferGeometry().setFromPoints(points);
        let line = new THREE.Line(geometry, material);
        scene.add(line);
    }

    solution: {
        let TD = app.triangle.map((item, index) => {
            if (index < 13 && item != undefined) {
                return +item;
            } else {
                return item;
            }
        });

        if (TD[13] == "equal sides 3") {
            TD[5] = TD[4] = TD[3];
            TD[8] = TD[7] = TD[6];
            TD[11] = TD[3] * TD[3] * (Math.sqrt(3) / 4);
        }

        if (TD[3] != undefined && TD[4] != undefined && TD[5] != undefined) {
            TD[12] = TD[3] + TD[4] + TD[5];
            TD[11] = Math.sqrt((TD[12] / 2) * (TD[12] / 2 - TD[3]) * (TD[12] / 2 - TD[4]) * (TD[12] / 2 - TD[5]));
        }

        if (TD[3] != undefined && TD[6] != undefined) {
            TD[11] = (TD[3] * TD[6]) / 2;
        }
        if (TD[4] != undefined && TD[7] != undefined) {
            TD[11] = (TD[4] * TD[7]) / 2;
        }
        if (TD[5] != undefined && TD[8] != undefined) {
            TD[11] = (TD[5] * TD[8]) / 2;
        }
        //
        // ================
        let theme = app.theme;
        app.theme = "";
        app.triangle = TD;
        app.theme = theme;
    }

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
        resizeRendererToDisplaySize(renderer);
        // to cheng by theme
        chenge: {
            if (app.theme != "triangle") {
                return "";
            }
        }

        renderer.render(scene, camera);

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}

function startCubeSolving() {
    main();
}

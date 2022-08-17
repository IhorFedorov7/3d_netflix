import * as THREE from 'three';


let Colors = {
    white: 0xffffff,
    black: 0x000000,
    blue: 0x5776bb,
    yellow: 0xFBB82D,
    thrusterOrange: 0xfea036
};

export default class Balloons {
    constructor() {
        this.mesh = new THREE.Object3D();
    
        // geometry
        let sphere1 = new THREE.SphereGeometry(100, 100, 100, 8);
        let sphere2 = new THREE.SphereGeometry(100, 100, 100, 8);
        let sphere3 = new THREE.SphereGeometry(150, 150, 150, 8);
        let sphere4 = new THREE.SphereGeometry(100, 100, 100, 8);
        let sphere5 = new THREE.SphereGeometry(100, 100, 100, 8);
        let sphere6 = new THREE.SphereGeometry(100, 100, 100, 8);
        let sphere7 = new THREE.SphereGeometry(120, 120, 120, 8);
        let sphere8 = new THREE.SphereGeometry(180, 180, 180, 8);
        let sphere9 = new THREE.SphereGeometry(50, 50, 50, 8);
        let sphere10 = new THREE.SphereGeometry(180, 180, 180, 8);
        let sphere11 = new THREE.SphereGeometry(180, 180, 180, 8);
        let sphere12 = new THREE.SphereGeometry(180, 180, 180, 8);
        let sphere13 = new THREE.SphereGeometry(150, 150, 150, 8);
        let sphere14 = new THREE.SphereGeometry(100, 100, 100, 8);
        let sphere15 = new THREE.SphereGeometry(100, 100, 100, 8);
        let sphere16 = new THREE.SphereGeometry(100, 100, 100, 8);
        let sphere17 = new THREE.SphereGeometry(100, 100, 100, 8);
        let sphere18 = new THREE.SphereGeometry(90, 90, 90, 8);
        let sphere19 = new THREE.SphereGeometry(100, 100, 100, 8);
        let sphere20 = new THREE.SphereGeometry(100, 100, 100, 8);
    
        // materials
        let matSphere1 = new THREE.MeshPhongMaterial({
            color: Colors.blue,
            flatShading: true
        });
        let matSphere2 = new THREE.MeshPhongMaterial({
            color: Colors.yellow,
            flatShading: true
        });
        let matSphere3 = new THREE.MeshPhongMaterial({
            color: Colors.blue,
            flatShading: true
        });
        let matSphere4 = new THREE.MeshPhongMaterial({
            color: Colors.blue,
            flatShading: true
        });
        let matSphere5 = new THREE.MeshPhongMaterial({
            color: Colors.blue,
            flatShading: true
        });
        let matSphere6 = new THREE.MeshPhongMaterial({
            color: Colors.yellow,
            flatShading: true
        });
        let matSphere7 = new THREE.MeshPhongMaterial({
            color: Colors.blue,
            flatShading: true
          });
        let matSphere8 = new THREE.MeshPhongMaterial({
            color: Colors.blue,
            flatShading: true
        });
        let matSphere9 = new THREE.MeshPhongMaterial({
            color: Colors.yellow,
            flatShading: true
        });
        let matSphere10 = new THREE.MeshPhongMaterial({
            color: Colors.blue,
            flatShading: true
        });
        let matSphere11 = new THREE.MeshPhongMaterial({
            color: Colors.blue,
            flatShading: true
        });
        let matSphere12 = new THREE.MeshPhongMaterial({
            color: Colors.blue,
            flatShading: true
        });
        let matSphere13 = new THREE.MeshPhongMaterial({
            color: Colors.yellow,
            flatShading: true
        });
        let matSphere14 = new THREE.MeshPhongMaterial({
            color: Colors.blue,
            flatShading: true
        });
        let matSphere15 = new THREE.MeshPhongMaterial({
            color: Colors.blue,
            flatShading: true
        });
        let matSphere16 = new THREE.MeshPhongMaterial({
            color: Colors.blue,
            flatShading: true
        });
        let matSphere17 = new THREE.MeshPhongMaterial({
            color: Colors.yellow,
            flatShading: true
        });
        let matSphere18 = new THREE.MeshPhongMaterial({
            color: Colors.blue,
            flatShading: true
        });
        let matSphere19 = new THREE.MeshPhongMaterial({
            color: Colors.blue,
            flatShading: true
        });
        let matSphere20 = new THREE.MeshPhongMaterial({
            color: Colors.yellow,
            flatShading: true
        });


        let m = new THREE.Mesh(sphere1, matSphere1);
        m.position.y = 1150;
        m.position.x = 0;
        m.position.z = 300;
        m.castShadow = true;
        m.receiveShadow = true;
    
        let m2 = new THREE.Mesh(sphere2, matSphere2);
        m2.position.y = 950;
        m2.position.x = 130;
        m2.position.z = 200;
        m2.castShadow = true;
        m2.receiveShadow = true;
    
        let m3 = new THREE.Mesh(sphere3, matSphere3);
        m3.position.y = 900;
        m3.position.x = -100;
        m3.position.z = 150;
        m3.castShadow = true;
        m3.receiveShadow = true;

        let m4 = new THREE.Mesh(sphere4, matSphere4);
        m4.position.y = 750;
        m4.position.x = 180;
        m4.position.z = 100;
        m4.castShadow = true;
        m4.receiveShadow = true;

        let m5 = new THREE.Mesh(sphere5, matSphere5);
        m5.position.y = 600;
        m5.position.x = -120;
        m5.position.z = 0;
        m5.receiveShadow = true;
        m5.castShadow = true;

        let m6 = new THREE.Mesh(sphere6, matSphere6);
        m6.position.y = 720;
        m6.position.x = 0;
        m6.position.z = 10;
        m6.receiveShadow = true;
        m6.castShadow = true;
    
        let m7 = new THREE.Mesh(sphere7, matSphere7);
        m7.position.y = 720;
        m7.position.x = 0;
        m7.position.z = 320;
        m7.receiveShadow = true;
        m7.castShadow = true;

        let m8 = new THREE.Mesh(sphere8, matSphere8);
        m8.position.y = 500;
        m8.position.x = -50;
        m8.position.z = 190;
        m8.receiveShadow = true;
        m8.castShadow = true;

        let m9 = new THREE.Mesh(sphere9, matSphere9);
        m9.position.y = -100;
        m9.position.x = 100;
        m9.position.z = 150;
        m9.receiveShadow = true;
        m9.castShadow = true;

        let m10 = new THREE.Mesh(sphere10, matSphere10);
        m10.position.y = 200;
        m10.position.x = -150;
        m10.position.z = 50;
        m10.receiveShadow = true;
        m10.castShadow = true;

        let m11 = new THREE.Mesh(sphere11, matSphere11);
        m11.position.y = -150;
        m11.position.x = -150;
        m11.position.z = 50;
        m11.receiveShadow = true;
        m11.castShadow = true;

        let m12 = new THREE.Mesh(sphere12, matSphere12);
        m12.position.y = -400;
        m12.position.x = 50;
        m12.position.z = -50;
        m12.receiveShadow = true;
        m12.castShadow = true;

        let m13 = new THREE.Mesh(sphere13, matSphere13);
        m13.position.y = -550;
        m13.position.x = -150;
        m13.position.z = 100;
        m13.receiveShadow = true;
        m13.castShadow = true;

        let m14 = new THREE.Mesh(sphere14, matSphere14);
        m14.position.y = -750;
        m14.position.x = -100;
        m14.position.z = -50;
        m14.receiveShadow = true;
        m14.castShadow = true;

        let m15 = new THREE.Mesh(sphere15, matSphere15);
        m15.position.y = 350;
        m15.position.x = 100;
        m15.position.z = 70;
        m15.receiveShadow = true;
        m15.castShadow = true;

        let m16 = new THREE.Mesh(sphere16, matSphere16);
        m16.position.y = 200;
        m16.position.x = 800;
        m16.position.z = -250;
        m16.receiveShadow = true;
        m16.castShadow = true;

        let m17 = new THREE.Mesh(sphere17, matSphere17);
        m17.position.y = 250;
        m17.position.x = -380;
        m17.position.z = -50;
        m17.receiveShadow = true;
        m17.castShadow = true;

        let m18 = new THREE.Mesh(sphere18, matSphere18);
        m18.position.y = 0;
        m18.position.x = 100;
        m18.position.z = -30;
        m18.receiveShadow = true;
        m18.castShadow = true;

        let m19 = new THREE.Mesh(sphere19, matSphere19);
        m19.position.y = -400;
        m19.position.x = -270;
        m19.position.z = -50;
        m19.receiveShadow = true;
        m19.castShadow = true;

        let m20 = new THREE.Mesh(sphere20, matSphere20);
        m20.position.y = -650;
        m20.position.x = 100;
        m20.position.z = -50;
        m20.receiveShadow = true;
        m20.castShadow = true;
    
        this.roof = new THREE.Object3D();
        this.roof.add(m, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18, m19, m20);
    
        
        this.mesh.add(this.roof);
    }
};
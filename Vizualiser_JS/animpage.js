var renderer, scene, camera, mesh;

function spherefactory(geometry, material, x, y, z){
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.x = x;
	mesh.position.y = y;
	mesh.position;z = z;
	return mesh;
}

function linefactory(source, destination){
	var geometry2 = new THREE.Geometry();
    geometry2.dynamic = true;
    geometry2.vertices.push(source.position);
    geometry2.vertices.push(destination.position);
    geometry2.verticesNeedUpdate = true;
    
    var material = new THREE.LineBasicMaterial({ color: 0xffffff });
    material.linewidth = 10;
    var line = new THREE.Line( geometry2, material );

  	scene.add(line);

}

init();

function init(){
    // on initialise le moteur de rendu
    renderer = new THREE.WebGLRenderer();

    // si WebGL ne fonctionne pas sur votre navigateur vous pouvez utiliser le moteur de rendu Canvas à la place
    // renderer = new THREE.CanvasRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.getElementById('container').appendChild(renderer.domElement);

    // on initialise la scène
    scene = new THREE.Scene();

    // on initialise la camera que l’on place ensuite sur la scène
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.set(0, 0, 1000);
    scene.add(camera);
    
    // on créé un  cube au quel on définie un matériau puis on l’ajoute à la scène 
    var geometry = new THREE.SphereGeometry( 25, 32, 32 );
    var material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: false } );
    m1pouce1 = spherefactory(geometry, material, 0, 100, -600);
    m1pouce2 = spherefactory(geometry, material, -25, -50, -600);
    m1pouce3 = spherefactory(geometry, material, -50, -150, -600);
    m1pouce4 = spherefactory(geometry, material, -150, -300, -600);
    m1index4 = spherefactory(geometry, material, -150, 0, -600);
    m1index3 = spherefactory(geometry, material, -150, 100, -600);
    m1index2 = spherefactory(geometry, material, -150, 200, -600);
    m1index1 = spherefactory(geometry, material, -150, 300, -600);
    m1petit4 = spherefactory(geometry, material, -450, 0, -600);
    m1petit3 = spherefactory(geometry, material, -462, 100, -600);
    m1petit2 = spherefactory(geometry, material, -474, 200, -600);
    m1petit1 = spherefactory(geometry, material, -486, 300, -600);
    m1paume = spherefactory(geometry, material, -425 , -300, -600);
    m1majeur4 = spherefactory(geometry, material, -250, 0, -600);
    m1majeur3 = spherefactory(geometry, material, -250, 100, -600);
    m1majeur2 = spherefactory(geometry, material, -250, 200, -600);
    m1majeur1 = spherefactory(geometry, material, -250, 300, -600);
    m1anulaire4 = spherefactory(geometry, material, -350, 0, -600);
    m1anulaire3 = spherefactory(geometry, material, -350, 100, -600);
    m1anulaire2 = spherefactory(geometry, material, -350, 200, -600);
    m1anulaire1 = spherefactory(geometry, material, -350, 300, -600);
    m2pouce1 = spherefactory(geometry, material, 100, 100, -600);
    m2pouce2 = spherefactory(geometry, material, 125, -50, -600);
    m2pouce3 = spherefactory(geometry, material, 150, -150, -600);
    m2pouce4 = spherefactory(geometry, material, 250, -300, -600);
    m2index4 = spherefactory(geometry, material, 250, 0, -600);
    m2index3 = spherefactory(geometry, material, 250, 100, -600);
    m2index2 = spherefactory(geometry, material, 250, 200, -600);
    m2index1 = spherefactory(geometry, material, 250, 300, -600);
    m2petit4 = spherefactory(geometry, material, 550, 0, -600);
    m2petit3 = spherefactory(geometry, material, 562, 100, -600);
    m2petit2 = spherefactory(geometry, material, 574, 200, -600);
    m2petit1 = spherefactory(geometry, material, 586, 300, -600);
    m2paume = spherefactory(geometry, material, 525 , -300, -600);
    m2majeur4 = spherefactory(geometry, material, 350, 0, -600);
    m2majeur3 = spherefactory(geometry, material, 350, 100, -600);
    m2majeur2 = spherefactory(geometry, material, 350, 200, -600);
    m2majeur1 = spherefactory(geometry, material, 350, 300, -600);
    m2anulaire4 = spherefactory(geometry, material, 450, 0, -600);
    m2anulaire3 = spherefactory(geometry, material, 450, 100, -600);
    m2anulaire2 = spherefactory(geometry, material, 450, 200, -600);
    m2anulaire1 = spherefactory(geometry, material, 450, 300, -600);
    //mesh.position.x = 300;
    scene.add(m1pouce1);
    scene.add(m1pouce2);
    scene.add(m1pouce3);
    scene.add(m1pouce4);
    scene.add(m1index4);
    scene.add(m1index3);
    scene.add(m1index2);
    scene.add(m1index1);
    scene.add(m1petit4);
    scene.add(m1petit3);
    scene.add(m1petit2);
    scene.add(m1petit1);
    scene.add(m1paume);
    scene.add(m1majeur1);
    scene.add(m1majeur2);
    scene.add(m1majeur3);
    scene.add(m1majeur4);
    scene.add(m1anulaire4);
    scene.add(m1anulaire3);
    scene.add(m1anulaire2);
    scene.add(m1anulaire1);
    scene.add(m2pouce1);
    scene.add(m2pouce2);
    scene.add(m2pouce3);
    scene.add(m2pouce4);
    scene.add(m2index4);
    scene.add(m2index3);
    scene.add(m2index2);
    scene.add(m2index1);
    scene.add(m2petit4);
    scene.add(m2petit3);
    scene.add(m2petit2);
    scene.add(m2petit1);
    scene.add(m2paume);
    scene.add(m2majeur1);
    scene.add(m2majeur2);
    scene.add(m2majeur3);
    scene.add(m2majeur4);
    scene.add(m2anulaire4);
    scene.add(m2anulaire3);
    scene.add(m2anulaire2);
    scene.add(m2anulaire1);
    linefactory(m1pouce1, m1pouce2);
    linefactory(m1pouce2, m1pouce3);
    linefactory(m1pouce3, m1pouce4);
    linefactory(m1pouce4, m1paume);
    linefactory(m1pouce4, m1index4);
    linefactory(m1index4, m1petit4);
    linefactory(m1index4, m1index3);
    linefactory(m1index3, m1index2);
    linefactory(m1index2, m1index1);
    linefactory(m1petit4, m1paume);
    linefactory(m1petit4, m1petit3);
    linefactory(m1petit3, m1petit2);
    linefactory(m1petit2, m1petit1);
    linefactory(m1majeur3, m1majeur4);
    linefactory(m1majeur2, m1majeur3);
    linefactory(m1majeur1, m1majeur2);
    linefactory(m1majeur3, m1majeur4);
    linefactory(m1majeur2, m1majeur3);
    linefactory(m1majeur1, m1majeur2);
    linefactory(m1anulaire1, m1anulaire2);
    linefactory(m1anulaire2, m1anulaire3);
    linefactory(m1anulaire3, m1anulaire4);
    linefactory(m2pouce1, m2pouce2);
    linefactory(m2pouce2, m2pouce3);
    linefactory(m2pouce3, m2pouce4);
    linefactory(m2pouce4, m2paume);
    linefactory(m2pouce4, m2index4);
    linefactory(m2index4, m2petit4);
    linefactory(m2index4, m2index3);
    linefactory(m2index3, m2index2);
    linefactory(m2index2, m2index1);
    linefactory(m2petit4, m2paume);
    linefactory(m2petit4, m2petit3);
    linefactory(m2petit3, m2petit2);
    linefactory(m2petit2, m2petit1);
    linefactory(m2majeur3, m2majeur4);
    linefactory(m2majeur2, m2majeur3);
    linefactory(m2majeur1, m2majeur2);
    linefactory(m2majeur3, m2majeur4);
    linefactory(m2majeur2, m2majeur3);
    linefactory(m2majeur1, m2majeur2);
    linefactory(m2anulaire1, m2anulaire2);
    linefactory(m2anulaire2, m2anulaire3);
    linefactory(m2anulaire3, m2anulaire4);




   

    // on effectue le rendu de la scène
    renderer.render( scene, camera );
}
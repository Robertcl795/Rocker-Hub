import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function loadGTLFModel(
    scene,
    glbPath,
    options = { receiveShadow: true, castShadow: true }
) {
    const { receiveShadow, castShadow } = options
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader()
        loader.load( glbPath, gtlf => {
            const obj = gtlf.scene
            obj.name = 'robot'
            obj.position.x = 0
            obj.position.y = 0
            obj.receiveShadow = receiveShadow
            obj.castShadow = castShadow
            scene.add(obj)

            obj.traverse(function (child) {
                if(child.isMesh ) {
                    child.castShadow = castShadow
                    child.receiveShadow = receiveShadow
                }
            })
            
            resolve(obj)
        }, undefined, function(error) {
            reject(error)
        })
    })
}
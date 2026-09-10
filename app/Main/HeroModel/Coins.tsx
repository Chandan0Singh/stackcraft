import { Center, Instance, Instances } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { CustomMaterial } from "./material";

const radius = 3;
const count = 8;

function Item({ rotation, position }) {
return ( <group position={position} rotation={rotation}> <Instance /> </group>
);
}

export const Item3 = () => {
const groupRef = useRef(null);
const itemRefs = useRef([]);

useFrame(() => {
if (groupRef.current) {
groupRef.current.rotation.z -= 0.01;
}

for (const item of itemRefs.current) {
  if (!item) continue;

  item.rotation.x += 0.01;
  item.rotation.y += 0.01;
  item.rotation.z += 0.01;
}


});

return ( <Center> <group> <group scale={0.6} ref={groupRef}> <Instances>
<cylinderGeometry args={[1, 1, 0.1, 64]} /> <CustomMaterial />

        {Array.from({ length: count }, (_, index) => (
          <Item
            key={index}
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
            position={[
              radius *
                Math.cos((index * 2 * Math.PI) / count + Math.PI / 4),
              radius *
                Math.sin((index * 2 * Math.PI) / count + Math.PI / 4),
              0,
            ]}
            rotation={[0, 0, (index * 2 * Math.PI) / count]}
          />
        ))}
      </Instances>
    </group>
  </group>
</Center>

);
};

export {};

declare module '*.glb';
declare module '*.png';

import { BufferGeometry, Material } from 'three';

declare module 'meshline' {
  export class MeshLineGeometry extends BufferGeometry {}
  export class MeshLineMaterial extends Material {
    lineWidth: number;
    sizeAttenuation: number;
    color: number | string;
    opacity: number;
    transparent: boolean;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: React.ThreeElements['bufferGeometry'] & {
        attach?: string;
      };
      meshLineMaterial: React.ThreeElements['shaderMaterial'] & {
        attach?: string;
        lineWidth?: number;
        sizeAttenuation?: number;
        color?: number | string;
        opacity?: number;
        transparent?: boolean;
      };
    }
  }
}

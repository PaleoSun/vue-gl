import { RectAreaLight } from 'three';
import VglLight from './vgl-light';
import { number } from '../validators';

/**
 * RectAreaLight emits light uniformly across the face a rectangular plane. See
 * [THREE.RectAreaLight](https://threejs.org/docs/#api/en/lights/RectAreaLight).
 *
 * This light type can be used to simulate light sources such as bright windows or strip lighting.
 *
 * Properties of [VglLight](vgl-light) are also available as mixin.
 */

export default {
  mixins: [VglLight],
  props: {
    /** Width of the light. */
    width: { type: number, default: 10 },
    /** Height of the light. */
    height: { type: number, default: 10 },
  },
  computed: {
    inst: () => new RectAreaLight(),
  },
  watch: {
    inst: {
      handler(inst) {
        Object.assign(inst, {
          width: parseFloat(this.width),
          height: parseFloat(this.height),
        });
      },
      immediate: true,
    },
    width(width) { this.inst.width = parseFloat(width); },
    height(height) { this.inst.height = parseFloat(height); },
  },
};

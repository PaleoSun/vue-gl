import VglGeometry from "./vgl-geometry.js";
import {OctahedronGeometry} from "./three.js";
import {parseNumber} from "./utils.js";

export default {
    mixins: [VglGeometry],
    props: [
        "radius",
        "detail"
    ],
    computed: {
        inst() {
            return new OctahedronGeometry(
                parseNumber(this.radius),
                parseNumber(this.detail, true)
            );
        }
    }
};
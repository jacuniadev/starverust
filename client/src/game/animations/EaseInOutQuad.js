export default function EaseInOutQuad(value) {
    return value < .5 ? 2 * value * value : -1 + (4 - 2 * value) * value;
}
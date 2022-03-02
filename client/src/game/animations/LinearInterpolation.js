// Credits for Kawak (UwU)

const PI_2 = Math.PI * 2;
const PI = Math.PI;

export function lerp(start = 0, end = 0, amt = 0) {
    return (1 - amt) * start + amt * end;
}

export function clamp(num = 0, min = 0, max = 0) {
    return Math.min(Math.max(num, min), max);
}

export function repeat(t = 0, m = 0) {
    return clamp(t - Math.floor(t / m) * m, 0, m);
}

export function lerpTheta(a = 0, b = 0, t = 0) {
    const dt = repeat(b - a, PI_2);
    
    return lerp(a, a + (dt > PI ? dt - PI_2 : dt), t);
}
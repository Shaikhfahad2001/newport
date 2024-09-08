#version 300 es
precision highp float;

in vec2 vUV;
out vec4 fragColor;

void main() {
    vec3 color = vec3(vUV, 0.5 + 0.5 * sin(vUV.x * 10.0));
    fragColor = vec4(color, 1.0);
}

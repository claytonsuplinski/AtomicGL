var canvas;
var gl;

var cubeVerticesBuffer;
var cubeVerticesTextureCoordBuffer;
var cubeVerticesIndexBuffer;
var cubeRotation = 0.0;
var lastCubeUpdateTime = 0;

var cubeImage;
var cubeTexture;

var mvMatrix;
var vertexPositionAttribute;
var textureCoordAttribute;
var perspectiveMatrix;

var test_sphere;
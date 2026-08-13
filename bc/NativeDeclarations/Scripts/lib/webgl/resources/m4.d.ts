// NOTE: The matching (minified) .js files appears to be based on an unknown predecessor of https://github.com/greggman/twgl.js
// Docstrings have been supplemented with those from https://github.com/greggman/twgl.js/releases/tag/v0.0.1 (Copyright 2015, Gregg Tavares, MIT)

/**
 * Copyright 2014, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
declare namespace m4 {
	/** A [4, 4] matrix represented as a flattened length-16 array */
	type Mat4 = Float32Array;
	/** A length-3 vector */
	type Vec3 = Float32Array;
	/** A length-4 vector */
	type Vec4 = Float32Array;

	/**
	 * Copies a matrix.
	 * @param {Mat4} m The matrix.
	 * @param {Mat4?} dst The matrix.
	 * @return {Mat4} A copy of m.
	 */
	function copy(m: m4.Mat4, dst?: m4.Mat4): m4.Mat4;
	/**
	 * Computes a 4-by-4 look-at transformation.
	 *
	 * This is a matrix which positions the camera itself. If you want
	 * a view matrix (a matrix which moves things in front of the camera)
	 * take the inverse of this.
	 *
	 * @param {Vec3} eye The position of the eye.
	 * @param {Vec3} target The position meant to be viewed.
	 * @param {Vec3} up A vector pointing up.
	 * @param {Mat4?} dst matrix to hold result. If none new one is created..
	 * @return {Mat4} The look-at matrix.
	 */
	function lookAt(eye: m4.Vec3, target: m4.Vec3, up: m4.Vec3, dst?: m4.Mat4): m4.Mat4;
	function addVectors(vec1: m4.Vec3, vec2: m4.Vec3, dst?: m4.Vec3): m4.Vec3;
	function subtractVectors(vec1: m4.Vec3, vec2: m4.Vec3, dst?: m4.Vec3): m4.Vec3;
	function distance(vec1: m4.Vec3, vec2: m4.Vec3): number;
	function distanceSq(vec1: m4.Vec3, vec2: m4.Vec3): number;
	/**
	 * Divides a vector by its Euclidean length and returns the quotient.
	 * @param {Vec3} a The vector.
	 * @param {Vec3?} dst vector to hold result. If not new one is created..
	 * @return {Vec3} The normalized vector.
	 */
	function normalize(a: m4.Vec3, dst?: m4.Vec3): m4.Vec3;
	function compose(m: m4.Mat4, a: number, b: number, dst?: m4.Mat4): m4.Mat4;
	/**
	 * Computes the cross product of two vectors; assumes both vectors have
	 * three entries.
	 * @param {Vec3} a Operand vector.
	 * @param {Vec3} b Operand vector.
	 * @param {Vec3?} dst vector to hold result. If not new one is created..
	 * @return {Vec3} The vector a cross b.
	 */
	function cross(a: m4.Vec3, b: m4.Vec3, dst?: m4.Vec3): m4.Vec3;
	function decompose(a: m4.Mat4, b: m4.Mat4, c: m4.Mat4, dst: m4.Mat4): m4.Mat4;
	/**
	 * Computes the dot product of two vectors; assumes both vectors have
	 * three entries.
	 * @param {Vec3} a Operand vector.
	 * @param {Vec3} b Operand vector.
	 * @return {number} dot product
	 */
	function dot(a: m4.Vec3, b: m4.Vec3): number;
	/**
	 * Creates an n-by-n identity matrix.
	 *
	 * @param {Mat4?} dst matrix to hold result. If none new one is created..
	 * @return {Mat4} An n-by-n identity matrix.
	 */
	function identity(dst?: m4.Mat4): number;
	/**
	 * Takes the transpose of a matrix.
	 * @param {Mat4} m The matrix.
	 * @param {Mat4?} dst matrix to hold result. If none new one is created..
	 * @return {Mat4} The transpose of m.
	 */
	function transpose(m: m4.Mat4, dst?: m4.Mat4): m4.Mat4;
	/**
	 * Computes the length of vector
	 * @param {Vec3} v vector.
	 * @return {number} length of vector.
	 */
	function length(v: m4.Vec3): number;
	function orthographic(left: number, right: number, bottom: number, top: number, near: number, far: number, dst?: m4.Mat4): m4.Mat4;
	/**
	 * Computes a 4-by-4 perspective transformation matrix given the left, right,
	 * top, bottom, near and far clipping planes. The arguments define a frustum
	 * extending in the negative z direction. The arguments near and far are the
	 * distances to the near and far clipping planes. Note that near and far are not
	 * z coordinates, but rather they are distances along the negative z-axis. The
	 * matrix generated sends the viewing frustum to the unit box. We assume a unit
	 * box extending from -1 to 1 in the x and y dimensions and from 0 to 1 in the z
	 * dimension.
	 * @param {number} left The x coordinate of the left plane of the box.
	 * @param {number} right The x coordinate of the right plane of the box.
	 * @param {number} bottom The y coordinate of the bottom plane of the box.
	 * @param {number} top The y coordinate of the right plane of the box.
	 * @param {number} near The negative z coordinate of the near plane of the box.
	 * @param {number} far The negative z coordinate of the far plane of the box.
	 * @param {Mat4?} dst Output matrix.
	 * @return {Mat4} The perspective projection matrix.
	 */
	function frustum(left: number, right: number, bottom: number, top: number, near: number, far: number, dst?: m4.Mat4): m4.Mat4;
	/**
	 * Computes a 4-by-4 perspective transformation matrix given the angular height
	 * of the frustum, the aspect ratio, and the near and far clipping planes.  The
	 * arguments define a frustum extending in the negative z direction.  The given
	 * angle is the vertical angle of the frustum, and the horizontal angle is
	 * determined to produce the given aspect ratio.  The arguments near and far are
	 * the distances to the near and far clipping planes.  Note that near and far
	 * are not z coordinates, but rather they are distances along the negative
	 * z-axis.  The matrix generated sends the viewing frustum to the unit box.
	 * We assume a unit box extending from -1 to 1 in the x and y dimensions and
	 * from 0 to 1 in the z dimension.
	 * @param {number} fieldOfViewYInRadians The camera angle from top to bottom (in radians).
	 * @param {number} aspect The aspect ratio width / height.
	 * @param {number} zNear The depth (negative z coordinate)
	 *     of the near clipping plane.
	 * @param {number} zFar The depth (negative z coordinate)
	 *     of the far clipping plane.
	 * @param {Mat4?} dst matrix to hold result. If none new one is created..
	 * @return {Mat4} The perspective matrix.
	 */
	function perspective(fieldOfViewYInRadians: number, aspect: number, zNear: number, zFar: number, dst?: m4.Mat4): m4.Mat4;
	/**
	 * Creates a 4-by-4 matrix which translates by the given vector v.
	 * @param {number} x X component of the vector by which to translate
	 * @param {number} y Y component of the vector by which to translate
	 * @param {number} z Z component of the vector by which to translate
	 * @param {Mat4?} dst matrix to hold result. If none new one is created..
	 * @return {Mat4} The translation matrix.
	 */
	function translation(x: number, y: number, z: number, dst?: m4.Mat4): m4.Mat4;
	/**
	 * Modifies the given 4-by-4 matrix by translation by the given vector v.
	 * @param {Mat4} m The matrix.
	 * @param {number} x X component of the vector by which to translate
	 * @param {number} y Y component of the vector by which to translate
	 * @param {number} z Z component of the vector by which to translate
	 * @param {Mat4?} dst matrix to hold result. If none new one is created..
	 * @return {Mat4} m once modified.
	 */
	function translate(m: m4.Mat4, x: number, y: number, z: number, dst?: m4.Mat4): m4.Mat4;
	function xRotation(angleInRadians: number, dst?: m4.Mat4): m4.Mat4;
	function yRotation(angleInRadians: number, dst?: m4.Mat4): m4.Mat4;
	function zRotation(angleInRadians: number, dst?: m4.Mat4): m4.Mat4;
	function xRotate(m: m4.Mat4, angleInRadians: number, dst?: m4.Mat4): m4.Mat4;
	function yRotate(m: m4.Mat4, angleInRadians: number, dst?: m4.Mat4): m4.Mat4;
	function zRotate(m: m4.Mat4, angleInRadians: number, dst?: m4.Mat4): m4.Mat4;
	/**
	 * Creates a 4-by-4 matrix which rotates around the given axis by the given
	 * angle.
	 * @param {Vec3} axis The axis
	 *     about which to rotate.
	 * @param {number} angleInRadians The angle by which to rotate (in radians).
	 * @param {Mat4?} dst matrix to hold result. If none new one is created..
	 * @return {Mat4} A matrix which rotates angle radians
	 *     around the axis.
	 */
	function axisRotation(axis: m4.Vec3, angleInRadians: number, dst?: m4.Mat4): m4.Mat4;
	/**
	 * Modifies the given 4-by-4 matrix by rotation around the given axis by the
	 * given angle.
	 * @param {Mat4} m The matrix.
	 * @param {Vec3} axis The axis
	 *     about which to rotate.
	 * @param {number} angleInRadians The angle by which to rotate (in radians).
	 * @param {Mat4?} dst matrix to hold result. If none new one is created..
	 * @return {Mat4} m once modified.
	 */
	function axisRotate(m: m4.Mat4, axis: m4.Vec3, angleInRadians: number, dst?: m4.Mat4): m4.Mat4;
	/**
	 * Creates a 4-by-4 matrix which scales in each dimension by an amount given by
	 * the corresponding entry in the given vector; assumes the vector has three
	 * entries.
	 * @param {number} x X component of the vector by which to scale
	 * @param {number} y Y component of the vector by which to scale
	 * @param {number} z Z component of the vector by which to scale
	 * @param {Mat4?} dst matrix to hold result. If none new one is created..
	 * @return {Mat4} The scaling matrix.
	 */
	function scaling(x: number, y: number, z: number, dst?: m4.Mat4): m4.Mat4;
	/**
	 * Modifies the given 4-by-4 matrix, scaling in each dimension by an amount
	 * given by the corresponding entry in the given vector; assumes the vector has
	 * three entries.
	 * @param {Mat4} m The matrix to be modified.
	 * @param {number} x X component of the vector by which to scale
	 * @param {number} y Y component of the vector by which to scale
	 * @param {number} z Z component of the vector by which to scale
	 * @param {Mat4?} dst matrix to hold result. If none new one is created..
	 * @return {Mat4} m once modified.
	 */
	function scale(m: m4.Mat4, x: number, y: number, z: number, dst?: m4.Mat4): m4.Mat4;
	/**
	 * Multiplies two 4-by-4 matrices; assumes that the given matrices are 4-by-4;
	 * assumes matrix entries are accessed in [row][column] fashion.
	 * @param {Mat4} a The matrix on the left.
	 * @param {Mat4} b The matrix on the right.
	 * @param {Mat4?} dst matrix to hold result. If none new one is created..
	 * @return {Mat4} The matrix product of a and b.
	 */
	function multiply(a: m4.Mat4, b: m4.Mat4, dst?: m4.Mat4): m4.Mat4;
	/**
	 * Computes the inverse of a 4-by-4 matrix.
	 * @param {Mat4} m The matrix.
	 * @param {Mat4?} dst matrix to hold result. If none new one is created..
	 * @return {Mat4} The inverse of m.
	 */
	function inverse(m: m4.Mat4, dst?: m4.Mat4): m4.Mat4;
	function transformVector(a: m4.Vec4, b: m4.Vec4, dst?: m4.Vec4): m4.Vec4;
	/**
	 * Takes a 4-by-4 matrix and a vector with 3 entries,
	 * interprets the vector as a point, transforms that point by the matrix, and
	 * returns the result as a vector with 3 entries.
	 * @param {Mat4} m The matrix.
	 * @param {Vec3} v The point.
	 * @param {Vec3} dst optional vec3 to store result
	 * @return {Vec3} dst or new vec3 if not provided
	 */
	function transformPoint(m: m4.Mat4, v: m4.Vec3, dst?: m4.Vec3): m4.Vec3;
	/**
	 * Takes a 4-by-4 matrix and a vector with 3 entries, interprets the vector as a
	 * direction, transforms that direction by the matrix, and returns the result;
	 * assumes the transformation of 3-dimensional space represented by the matrix
	 * is parallel-preserving, i.e. any combination of rotation, scaling and
	 * translation, but not a perspective distortion. Returns a vector with 3
	 * entries.
	 * @param {Mat4} m The matrix.
	 * @param {Vec3} v The direction.
	 * @param {Vec3} dst optional Vec3 to store result
	 * @return {Vec3} dst or new Vec3 if not provided
	 */
	function transformDirection(m: m4.Mat4, v: m4.Vec3, dst?: m4.Vec3): m4.Vec3;
	/**
	 * Takes a 4-by-4 matrix m and a vector v with 3 entries, interprets the vector
	 * as a normal to a surface, and computes a vector which is normal upon
	 * transforming that surface by the matrix. The effect of this function is the
	 * same as transforming v (as a direction) by the inverse-transpose of m.  This
	 * function assumes the transformation of 3-dimensional space represented by the
	 * matrix is parallel-preserving, i.e. any combination of rotation, scaling and
	 * translation, but not a perspective distortion.  Returns a vector with 3
	 * entries.
	 * @param {Mat4} m The matrix.
	 * @param {Vec3} v The normal.
	 * @param {Vec3?} dst The direction.
	 * @return {Vec3} The transformed direction.
	 */
	function transformNormal(m: m4.Mat4, v: m4.Vec3, dst?: m4.Vec3): m4.Vec3;
	/** Do not touch */
	const setDefaultType: never;
}

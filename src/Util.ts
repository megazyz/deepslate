import { mat4, vec3 } from "gl-matrix"

export function mergeFloat32Arrays(...arrays: Float32Array[]) {
  let totalLength = 0
  for (const a of arrays) {
    totalLength += a.length
  }
  const result = new Float32Array(totalLength)
  let offset = 0
  for (const a of arrays) {
    result.set(a, offset),
    offset += a.length
  }
  return result
}

export function transformVectors(array: Float32Array, transformation: mat4) {
  let a = vec3.create()
  for(let i = 0; i < array.length; i += 3) {
    a[0] = array[i]
    a[1] = array[i+1]
    a[2] = array[i+2]
    vec3.transformMat4(a, a, transformation)
    array[i] = a[0]
    array[i+1] = a[1]
    array[i+2] = a[2]
  }
}

export function clamp(x: number, min: number, max: number) {
  return Math.max(min, Math.min(max, x))
}

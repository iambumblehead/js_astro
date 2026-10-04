import test from 'node:test'
import assert from 'node:assert/strict'

import {
  calHouseCusp2
} from '../src/cuspcal.js'

test('calHouseCusp2 returns correct cusps, April 8 2024', () => {
  let cusps = calHouseCusp2(2024, 4, 8, 18, 17, -96.7970, 32.7767, 1);

  assert.strictEqual(+cusps[1].toFixed(4), 117.0236)
  assert.strictEqual(+cusps[2].toFixed(4), 139.1819)
  assert.strictEqual(+cusps[3].toFixed(4), 165.0336)
  assert.strictEqual(+cusps[4].toFixed(4), 196.2250)
  assert.strictEqual(+cusps[5].toFixed(4), 231.4282)
  assert.strictEqual(+cusps[6].toFixed(4), 266.0756)
  assert.strictEqual(+cusps[7].toFixed(4), 297.0236)
  assert.strictEqual(+cusps[8].toFixed(4), 319.1819)
  assert.strictEqual(+cusps[9].toFixed(4), 345.0336)
  assert.strictEqual(+cusps[10].toFixed(4), 16.2250)
  assert.strictEqual(+cusps[11].toFixed(4), 51.4282)
  assert.strictEqual(+cusps[12].toFixed(4), 86.0756)
})

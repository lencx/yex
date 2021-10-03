import { isColor } from '.';

describe('isColor', () => {
  it('color name', () => {
    expect(isColor('red')).toBe(true);
  })
  it('invalid color name', () => {
    expect(isColor('redx')).toBe(false);
  })
  it('HEX', () => {
    expect(isColor('#fff')).toBe(true);
  })
  it('RGBA', () => {
    expect(isColor('rgba(0, 0, 0, 0.2)')).toBe(true);
  })
  it('HSL', () => {
    expect(isColor('hsl(180, 50%, 50%)')).toBe(true);
  })
  it('CSS4 / HWB', () => {
    // https://caniuse.com/?search=HWB
    expect(isColor('hwb(60, 50%, 0)')).toBe(false);
  })
})
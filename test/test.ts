import { betaincinv } from "../dist/esm/index.js";


let digits = 15;

test("Check betaincinv function", () => {
    // results by beta_inc_inv(a, b, p, 1 - p) in Julia SpecialFunction package
    expect(betaincinv(0.001, 1.1, 2)).toBeCloseTo(0.0009549886032748861, digits);
    expect(betaincinv(0.1, 1, 2)).toBeCloseTo(0.05131670194948621, digits);
    expect(betaincinv(0.4, 1.5, 2.5)).toBeCloseTo(0.29041808520374407, digits);
    expect(betaincinv(0.8, 3, 4)).toBeCloseTo(0.5853942353021732, digits);
    expect(betaincinv(0.999, 4.5, 3.5)).toBeCloseTo(0.9485177162846158, digits);

    expect(betaincinv(0.001, 1.1, 2, { upper: true }))
        .toBeCloseTo(0.9990450113967251, digits);
    expect(betaincinv(0.1, 1, 2, { upper: true }))
        .toBeCloseTo(0.9486832980505138, digits);
    expect(betaincinv(0.4, 1.5, 2.5, { upper: true }))
        .toBeCloseTo(0.7095819147962559, digits);
    expect(betaincinv(0.8, 3, 4, { upper: true }))
        .toBeCloseTo(0.4146057646978269, digits);
    expect(betaincinv(0.999, 4.5, 3.5, { upper: true }))
        .toBeCloseTo(0.05148228371538425, digits);
});


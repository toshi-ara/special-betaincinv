import { gammaln } from "@toshiara/special-gammaln";
import { betainc } from "@toshiara/special-betainc";


const EPS = 1e-16;

type TypeOption = {
    upper?: boolean
}


// Returns the inverse of the incomplete beta function
// option: upper
//   - false: the inverse of the lower regularized incomplete beta function
//   - true:  the inverse of the upper regularized incomplete beta function
export function betaincinv(p: number, a: number, b: number, {
                               upper = false
                           }: TypeOption = {}): number {
    if (p <= 0) {
        return (upper) ? 1 : 0;
    }
    if (p >= 1) {
        return (upper) ? 0 : 1;
    }

    const a1 = a - 1;
    const b1 = b - 1;
    let x: number;

    if (a >= 1 && b >= 1) {
        const pp = (p < 0.5) ? p : 1 - p;
        const t = Math.sqrt(-2 * Math.log(pp));
        x = (2.30753 + t * 0.27061) / (1 + t* (0.99229 + t * 0.04481)) - t;
        if (p < 0.5) {
            x = -x;
        }
        const al = (x * x - 3) / 6;
        const h = 2 / (1 / (2 * a - 1)  + 1 / (2 * b - 1));
        const w = (x * Math.sqrt(al + h) / h) - (1 / (2 * b - 1) - 1 / (2 * a - 1)) *
            (al + 5 / 6 - 2 / (3 * h));
        x = a / (a + b * Math.exp(2 * w));
    } else {
        const lna = Math.log(a / (a + b));
        const lnb = Math.log(b / (a + b));
        const t = Math.exp(a * lna) / a;
        const u = Math.exp(b * lnb) / b;
        const w = t + u;
        if (p < t / w) {
            x = Math.pow(a * w * p, 1 / a);
        } else {
            x = 1 - Math.pow(b * w * (1 - p), 1 / b);
        }
    }

    const afac = -gammaln(a) - gammaln(b) + gammaln(a + b);
    for (let j = 0; j < 10; j++) {
        if (x === 0 || x === 1) {
            return x;
        }
        const err: number = betainc(x, a, b) - p;
        let t = Math.exp(a1 * Math.log(x) + b1 * Math.log(1 - x) + afac);
        const u = err / t;
        x -= (t = u / (1 - 0.5 * Math.min(1, u * (a1 / x - b1 / (1 - x)))));
        if (x <= 0) {
            x = 0.5 * (x + t);
        }
        if (x >= 1) {
            x = 0.5 * (x + t + 1);
        }
        if (Math.abs(t) < EPS * x && j > 0) {
            break;
        }
    }
    return (upper) ? 1 - x : x;
};


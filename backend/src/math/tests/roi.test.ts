import { calculateROI } from "../roi";

describe("ROI calculation", () => {
  it("should calculate positive ROI", () => {
    expect(calculateROI(1000, 1500)).toBe(50);
  });

  it("should calculate negative ROI", () => {
    expect(calculateROI(1000, 800)).toBe(-20);
  });

  it("should throw error for zero investment", () => {
    expect(() => calculateROI(0, 1000)).toThrow();
  });
});

export function calculateROI(
  initialInvestment: number,
  currentValue: number
): number {
  if (initialInvestment <= 0) {
    throw new Error("Initial investment must be greater than zero");
  }

  return (
    ((currentValue - initialInvestment) / initialInvestment) * 100
  );
}

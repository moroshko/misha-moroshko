export function formatWithCommas(n: number): string {
  return new Intl.NumberFormat().format(n);
}

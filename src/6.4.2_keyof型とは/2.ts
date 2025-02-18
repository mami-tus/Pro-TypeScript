export const mmConversionTable = {
  mm: 1,
  m: 1e3,
  km: 1e6,
};

export function convertUnits(
  value: number,
  unit: keyof typeof mmConversionTable
) {
  const mmValue = value * mmConversionTable[unit];
  return {
    mm: mmValue,
    m: mmValue / 1e3,
    km: mmValue / 1e6,
  };
}

// { mm: 5600000, m: 5600, km: 5.6 }
console.log(convertUnits(5600, 'm'));

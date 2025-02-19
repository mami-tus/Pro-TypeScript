export const mmConversionTable = {
  mm: 1,
  cm: 10, // この行追加
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
// { mm: 3000000, m: 3000, km: 3 }
console.log(convertUnits(300000, 'cm')); // この行追加

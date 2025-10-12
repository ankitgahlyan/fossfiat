export const formatAddress = (address: string): string => {
  if (!address || address.length < 10) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const formatBalance = (balance: bigint, decimals: number = 9): string => {
  return (Number(balance) / Math.pow(10, decimals)).toFixed(2);
};
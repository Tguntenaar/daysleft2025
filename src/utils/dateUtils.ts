export function getDaysLeftIn2025(): number {
  const now = new Date();
  const endOf2025 = new Date('2025-12-31T23:59:59');
  const timeDiff = endOf2025.getTime() - now.getTime();
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
}

export function getDaysLeftFromDate(date: Date): number {
  const endOf2025 = new Date('2025-12-31T23:59:59');
  const timeDiff = endOf2025.getTime() - date.getTime();
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
}

export function getDateFromDayIndex(index: number): Date {
  const startOf2025 = new Date('2025-01-01');
  const date = new Date(startOf2025);
  date.setDate(startOf2025.getDate() + index);
  return date;
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: '2-digit',
    day: '2-digit'
  }).format(date);
}
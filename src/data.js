export const statsConfig = [
  {
    label: 'Total Consumers',
    value: '8,765',
    icon: 'bi-people-fill',
    bgColor: '#10b981',
    // breakdown: { regular: '7,850', td: '650', pd: '265' },
    breakdown: [
      { title: 'Regular', value: '7,850' },
      { title: 'TD', value: '650' },
      { title: 'PD', value: '265' },
    ],
  },
  {
    label: 'To Be Billed',
    value: '8,765',
    icon: 'bi-file-earmark-text',
    bgColor: '#3b82f6',
  },
  {
    label: 'Billed',
    value: '8,000',
    icon: 'bi-check-circle-fill',
    bgColor: '#10b981',
  },
  {
    label: 'Un-Billed',
    value: '765',
    icon: 'bi-x-circle-fill',
    bgColor: '#f59e0b',
  },
  {
    label: 'Total Billed Units',
    value: '15.2 SCM',
    icon: 'bi-lightning-fill',
    bgColor: '#8b5cf6',
  },
  {
    label: 'Total Billed Amount',
    value: '₼ 7.84 M',
    icon: 'bi-currency-dollar',
    bgColor: '#10b981',
  },
  {
    label: 'Total Collection',
    value: '₼ 6.91 M',
    icon: 'bi-wallet-fill',
    bgColor: '#0d9488',
  },
  {
    label: 'Total Defaulters',
    value: '1,285',
    icon: 'bi-exclamation-circle-fill',
    bgColor: '#f97316',
  },
  {
    label: 'Total Default Amount',
    value: '₼ 0.93 M',
    icon: 'bi-graph-down',
    bgColor: '#ef4444',
  },
];

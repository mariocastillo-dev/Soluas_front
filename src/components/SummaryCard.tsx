import { TrendingUp, DollarSign, Percent } from 'lucide-react';

interface SummaryCardProps {
  title: string;
  value: string;
  icon: 'budget' | 'spent' | 'executionPercentage';
}

export function SummaryCard({ title, value, icon }: SummaryCardProps) {
  const getIcon = () => {
    switch (icon) {
      case 'budget':
        return <TrendingUp className="w-6 h-6 text-white" />;
      case 'spent':
        return <DollarSign className="w-6 h-6 text-white" />;
      case 'executionPercentage':
        return <Percent className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-cyan-300 to-sky-800 rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white/80 text-sm font-medium mb-1">{title}</p>
          <p className="text-white text-2xl font-bold">{value}</p>
        </div>
        <div className="bg-white/10 p-3 rounded-lg">
          {getIcon()}
        </div>
      </div>
    </div>
  );
}
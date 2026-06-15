import React from "react";

export interface MetricCardProps {
  title: string;
  value: string;
  icon: string;
  iconBgClass: string;
  iconTextClass: string;
  trendIcon: string;
  trendText: string;
  trendColorClass: string;
  trendTextColorClass?: string;
}

export default function MetricCard({
  title,
  value,
  icon,
  iconBgClass,
  iconTextClass,
  trendIcon,
  trendText,
  trendColorClass,
  trendTextColorClass,
}: MetricCardProps) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-lg soft-shadow hover-shadow transition-shadow flex flex-col border border-outline-variant/30">
      <div className="flex justify-between items-start mb-md">
        <span className="font-title-md text-title-md text-on-surface-variant">{title}</span>
        <div className={`p-2 rounded-lg ${iconBgClass} ${iconTextClass}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      </div>
      <div className="mt-auto">
        <h3 className="font-headline-lg text-headline-lg text-on-background font-bold">{value}</h3>
        <div className={`flex items-center gap-1 mt-sm ${trendColorClass}`}>
          <span className="material-symbols-outlined text-sm">{trendIcon}</span>
          <span className={`font-label-md text-label-md font-medium ${trendTextColorClass || ""}`}>{trendText}</span>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export function DataTable({ title, actionButtonText, onActionClick, children }: { title: string, actionButtonText?: string, onActionClick?: () => void, children: React.ReactNode }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl soft-shadow border border-outline-variant/30 overflow-hidden">
      <div className="p-lg border-b border-outline-variant/50 flex justify-between items-center bg-surface-bright">
        <h3 className="font-title-lg text-title-lg font-semibold text-on-background">{title}</h3>
        {actionButtonText && (
          <button onClick={onActionClick} className="bg-primary text-on-primary font-body-md text-body-md font-medium px-md py-sm rounded-lg hover:bg-primary-container transition-colors flex items-center gap-sm h-10">
            <span className="material-symbols-outlined text-sm">add</span>
            {actionButtonText}
          </button>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          {children}
        </table>
      </div>
    </div>
  );
}

export function TableHeader({ columns }: { columns: { label: string, align?: 'left'|'right'|'center' }[] }) {
  return (
    <thead>
      <tr className="bg-surface-container-low border-b border-outline-variant/50">
        {columns.map((col, idx) => (
          <th key={idx} className={`font-label-md text-label-md text-on-surface-variant font-medium py-3 px-lg uppercase tracking-wider text-${col.align || 'left'}`}>
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export function TableRow({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <tr className={`border-b border-outline-variant/30 hover:bg-surface-container-lowest transition-colors ${className}`}>
      {children}
    </tr>
  );
}

export function TableCell({ children, className = "", align = "left" }: { children: React.ReactNode, className?: string, align?: 'left'|'right'|'center' }) {
  return (
    <td className={`py-4 px-lg text-${align} ${className}`}>
      {children}
    </td>
  );
}

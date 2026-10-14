export function Star({ size, fill = "#C86D51" }: { size: number; fill?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className="block">
      <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" fill={fill} />
    </svg>
  );
}

export function Stars({ size, gap, label }: { size: number; gap: string; label: string }) {
  return (
    <div role="img" aria-label={label} className={`flex ${gap}`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={size} />
      ))}
    </div>
  );
}

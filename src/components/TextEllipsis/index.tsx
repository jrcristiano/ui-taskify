import { TextLimiter } from "../TextLimiter";

interface TextEllipsisProps {
  text: string;
  lines?: number;
  className?: string;
}

export const TextEllipsis = ({ 
  text, 
  lines = 1, 
  className = '' 
}: TextEllipsisProps) => {
  const lineClampClass = lines === 1 
    ? 'truncate' 
    : `line-clamp-${lines}`;

  return (
    <span className={`${lineClampClass} ${className}`}>
      <TextLimiter text={text} />
    </span>
  );
};
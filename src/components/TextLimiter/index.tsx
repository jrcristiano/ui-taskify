export const TextLimiter = ({ text, maxLength }: { text: string, maxLength?: number }) => {
  maxLength = maxLength ?? 40;
  const truncatedText = text.length > maxLength 
    ? `${text.substring(0, maxLength)}...` 
    : text;

  return <span>{truncatedText}</span>;
};
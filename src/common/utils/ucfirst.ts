export function ucFirst(str: string): string {
    if (!str) return str;
    
    return str.charAt(0).toUpperCase() + str.slice(1);
}
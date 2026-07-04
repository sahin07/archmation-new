const HTML_ENTITY_MAP: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#039;": "'",
  "&apos;": "'",
  "&nbsp;": " ",
};

export function decodeWordPressHtml(text: string): string {
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
      String.fromCharCode(parseInt(hex, 16)),
    )
    .replace(/&[a-z]+;/gi, (entity) => HTML_ENTITY_MAP[entity] ?? entity);
}

export function stripWordPressHtml(html: string): string {
  return decodeWordPressHtml(html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " "))
    .trim();
}

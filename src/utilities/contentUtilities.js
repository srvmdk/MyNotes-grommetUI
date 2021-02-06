/* Shortens the content as per the charCount passed */
export const previewContent = (content, charCount = 0) => {
  return content.length > charCount
    ? `${content
        .split("")
        .filter((el, idx) =>
          !!charCount ? idx <= charCount : idx >= charCount
        )
        .join("")}...`
    : content;
};

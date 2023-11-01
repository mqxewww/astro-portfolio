const displayNameHelper = (name: string) => {
  const words = name.split("-");

  const formattedWords = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return formattedWords;
};

export default displayNameHelper;

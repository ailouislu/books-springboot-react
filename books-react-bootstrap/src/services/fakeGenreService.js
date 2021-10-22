export const genres = [
    {
      id: "5b21ca3eeb7f6fbccd471818",
      name: "Fiction"
    },
    {
      id: "5b21ca3eeb7f6fbccd471814",
      name: "Non Fiction"
    },
    {
      id: "5b21ca3eeb7f6fbccd471820",
      name: "Kids"
    },
    {
      id: "5b21ca3eeb7f6fbccd471821",
      name: "Teen"
    }
];

export function getGenres() {
  return genres.filter(g => g);
}

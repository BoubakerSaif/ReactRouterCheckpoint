import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: uuidv4(),
    title: "John Wick : Chapitre 4",
    description:
      "John Wick faces his deadliest adversaries in the fourth installment of the series. So, enjoy watching this movie and have fun.",
    posterURL:
      "https://m.media-amazon.com/images/I/81fk-N7tvbL._AC_UF894,1000_QL80_.jpg",
    rating: 9,
    trailerUrl: "https://www.youtube.com/embed/qEVUtrk8_B4?si=flUi97Im7oHI6Z-D",
  },
  {
    id: uuidv4(),
    title: "Fast & Furious X",
    description:
      "During numerous missions and against all odds, Dom Toretto and his family have outwitted and overtaken all enemies in their path.",
    posterURL:
      "https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2022/04/fast%20x%20teaser%20poster.jpeg",
    rating: 4,
    trailerUrl: "https://www.youtube.com/embed/32RAq6JzY-w?si=q9rNPT8P-P9g9yet",
  },
];

export default data;

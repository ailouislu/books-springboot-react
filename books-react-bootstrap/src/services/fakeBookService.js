
const books = [
  {
    id: "35147118",
    title: "Lost and Found",
    subtitle: "My story of heartbreak and hope",
    type: "Non Fiction",
    format: "Paperback / softback",
    releaseDate: "September 27th, 2021",
    author: "Toni Street",
    price: 29.99,
    publisherRRP: 37.99,
    pages: 272,
    description: "'A profound and brave addition to the celebrity memoir canon.' - The Spinoff Toni Street's easy on-air style and warm personality has made her a firm favourite with thousands of New Zealanders. But behind the bubbly persona, is a story of heartbreak and resilience. Toni and her twin brother Lance were the much-loved first children of Taranaki dairy farmers Geoff and Wendy Street. At nine months old, Lance was diagnosed with Acute Myloid Leukaemia, passing away a year later. Devastated but determined to give Toni another sibling, Wendy became pregnant soon after Lance's death, but after a difficult pregnancy, their baby Tracy was born, but only lived for a couple of hours. Trying to pick up the pieces of her shattered life, Wendy became pregnant again, and the Streets were overjoyed and relieved to welcome to a healthy boy, Stephen. Life returned to some kind of normalcy, and two years after Stephen was born, Wendy gave birth to another baby, Kirsty. But then, when Stephen was 14, the unthinkable happened. While out on the farm with his dad, Stephen was killed in a quad bike accident. His death would become the seismic marker of Toni's life, as she vowed to do everything in her power to bring happiness to her parent's life. Toni would go onto become one of New Zealand's most popular and successful television reporters and hosts and was determined to raise her own large family, with husband Matt. But after giving birth to their second child, she became seriously unwell, and was admitted to hospital, in agony. Eventually diagnosed with a rare immune disease, Churg-Strauss syndrome, she had her gall bladder removed, and is on permanent medication. As a result, she and Matt found that she was unable to carry another child. Desperate for the large family that her parents missed out on, Toni's dream for a third child was realised by her best friend, who offered to be her and Matt's surrogate. Toni and her family's story is one of almost unbelievable trial and tragedy, but also love, determination and incredible resilience and will strike a chord with anyone who has gone through difficult times.",
    dimensions: "155x237x22",
    wishList: true,
    isbn: "9781988547732",
    publisher: "Pan Macmillan Australia"
  },
  {
    id: "9781760785024",
    title: "Apples Never Fall",
    subtitle: "Liane Moriarty",
    type: "Fiction",
    format: "Trade Paperback",
    releaseDate: "20/09/2021",
    author: "Liane Moriarty",
    price: 29.99,
    publisherRRP: 37.99,
    pages: 496,
    description: "From the outside, the Delaneys appear to be an enviably contented family. Even after all these years, former tennis coaches Joy and Stan are still winning tournaments, and now they've sold the family business they have all the time in the world to learn how to 'relax'. Their four adult children are busy living their own lives, and while it could be argued they never quite achieved their destinies, no-one ever says that out loud. But now Joy Delaney has disappeared and her children are re-examining their parents' marriage and their family history with fresh, frightened eyes. Is her disappearance related to their mysterious house guest from last year? Or were things never as rosy as they seemed in the Delaney household?",
    dimensions: "H232xW155xS37",
    wishList: true,
    isbn: "9781760785024",
    publisher: "Pan Macmillan Australia"
  },
  {
    id: "9781509840182",
    title: "The Missing Sister",
    subtitle: "They will search the world to find her",
    type: "Fiction",
    format: "Trade Paperback",
    releaseDate: "20/09/2021",
    author: "Lucinda Riley",
    price: 29.99,
    publisherRRP: 37.99,
    pages: 400,
    description: "They'll search the world to find her. From the Sunday Times number one bestselling author Lucinda Riley, The Missing Sister is the seventh instalment in the multimillion-copy epic series The Seven Sisters. The six D'Apliese sisters have each been on their own incredible journey to discover their heritage, but they still have one question left unanswered: who and where is the seventh sister? They only have one clue - an image of a star-shaped emerald ring. The search to fi ...",
    dimensions: "h234mm x w153mm",
    wishList: true,
    isbn: "9781509840182",
    publisher: "Pan Macmillan"
  },
  {
    id: "9780008499723",
    title: "Megamonster",
    subtitle: "From multi-million bestselling author",
    type: "Kids",
    format: "Paperback",
    releaseDate: "06/07/2021",
    author: "David Walliams",
    price: 22.99,
    publisherRRP: 37.99,
    pages: 496,
    description: "Megamonster is an action-packed page-turning adventure featuring a hilarious cast of characters, which is set to become a classic in the Walliams publishing portfolio. This timeless story takes place on an island in the middle of shark-infested waters - where the Cruel School stands on top of a dormant volcano. The lessons are appalling, the school dinners are revolting and the teachers are terrifying - especially the mysterious Science teacher, Doctor Doktur. When Larker is ...",
    dimensions: "H216xW135xS29",
    wishList: true,
    isbn: "9780008499723",
    publisher: "\tHarperCollins Publishers"
  },
  {
    id: "9780473470807",
    title: "Aroha's Way",
    subtitle: "A children's guide through emotions",
    type: "Teen",
    format: "Paperback",
    releaseDate: "06/07/2021",
    author: "Craig Phillips",
    price: 19.95,
    publisherRRP: 29.99,
    pages: 36,
    description: "Aroha's Way is a bestselling picture book for children around uncomfortable emotions; fear, apprehension, worrying thoughts and nervousness with ways to manage them. Come along on a journey with Aroha, as she wards off nervousness, fear, worrying thoughts and apprehension, with simple, yet effective tools that everyone can use. From award-winning New Zealand author and illustrator, Craig Phillips, creator of The Adventures of Jack Scratch and Giants, Trolls, Witches, Beast ...",
    dimensions: "H210xW225",
    wishList: true,
    isbn: "9780473470807",
    publisher: "Wildling Books"
  }
]


export function getBooks() {
  return books;
}

export function getBook(bookId) {
  return books.find(b => b.id === bookId);
}


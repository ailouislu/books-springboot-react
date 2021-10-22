

const authors = [
    {
      id: "1",
      fullName: "Liane Moriarty",
      type: "Fiction",
      born: "15 November 1966 Sydney, New South Wales, Australia",
      yearsActive: "2004–present",
      books: "Apples Never Fall",
      description: "Liane Moriarty (born 1966) is an Australian author. She has written eight novels, including the New York Times best sellers Big Little Lies and Nine Perfect Strangers, which were adapted into television series for HBO and Hulu, respectively."
    },
    {
      id: "2",
      fullName: "Craig Phillips",
      type: "Teen",
      born: "16 October 1971 Liverpool, England",
      yearsActive: "2000–present",
      books: "Aroha's Way",
      description: "Craig Phillips (born 16 October 1971) is an English television personality and builder. He is known for winning the first series of Big Brother in 2000. He is trained as a bricklayer, and has appeared in numerous television series related to building since winning Big Brother."
    },
    {
      id: "3",
      fullName: "Toni Street",
      type: "Non Fiction",
      born: "8 September 1983 New Plymouth, New Zealand",
      yearsActive: "2006 – present",
      books: "Lost and Found",
      description: "Toni Street (born 8 September 1983) is a New Zealand television presenter and sports commentator. She is best known for co-hosting the New Zealand current affairs programme Seven Sharp alongside Mike Hosking, as well as presenting morning shows and sports reporting for One News."
    },
    {
      id: "4",
      fullName: "David Walliams",
      type: "Kids",
      born: "20 August 1971 Wimbledon, London, England",
      yearsActive: "1995–present",
      books: "Megamonster",
      description: "David Edward Williams OBE (born 20 August 1971), known professionally as David Walliams, is an English comedian, actor, writer, and television personality. He is best known for his work with Matt Lucas on the BBC sketch comedy series Rock Profile (1999–2000, 2009), Little Britain (2003–2007) and Come Fly With Me (2010–2011). Since 2012, Walliams has been a judge on the television talent show competition Britain's Got Talent on ITV. He is also a writer of children's books, having sold more than 37 million copies worldwide."
    },
    {
      id: "5",
      fullName: "Lucinda Riley",
      type: "Fiction",
      born: "16 February 1965 Lisburn, Northern Ireland",
      yearsActive: "1992-2021",
      books: "The Missing Sister",
      description: "Lucinda Kate Riley (née Edmonds; 16 February 1965 – 11 June 2021) was a Northern Irish author of popular historical fiction, originally an actress."
    }
  ]


export function getAuthors() {
  return authors;
}

export function getAuthor(authorId) {
  return authors.find(a => a.id === authorId);
}

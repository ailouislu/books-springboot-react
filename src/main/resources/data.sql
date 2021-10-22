
insert into user values('10@gmail.com', 'RESEARCH', 'Louis', 'Augustine');
insert into user values('20@gmail.com', 'RESEARCH', 'Tom', 'Smith');
insert into user values('30@gmail.com', 'SALES', 'James', 'Hudson');
insert into user values( '40@gmail.com','OPERATIONS', 'Peter', 'William');

insert into genres values( '5b21ca3eeb7f6fbccd471818','Fiction');
insert into genres values( '5b21ca3eeb7f6fbccd471814','Non Fiction');
insert into genres values( '5b21ca3eeb7f6fbccd471820','Kids');
insert into genres values( '5b21ca3eeb7f6fbccd471821','Teen');

insert into Authors values( '1','Liane Moriarty','Fiction','15 November 1966 Sydney, New South Wales, Australia',
                            '2004-present', 'Apples Never Fall',
                           'Liane Moriarty (born 1966) is an Australian author. She has written eight novels, ' ||
                           'including the New York Times best sellers Big Little Lies and Nine Perfect Strangers, ' ||
                           'which were adapted into television series for HBO and Hulu, respectively.');
insert into Authors values( '2','Craig Phillips','Teen','16 October 1971 Liverpool, England',
                            '2000-present', 'Aroha''s Way',
                            'Craig Phillips (born 16 October 1971) is an English television personality and builder. ' ||
                            'He is known for winning the first series of Big Brother in 2000. He is trained ' ||
                            'as a bricklayer, and has appeared in numerous television series related to building ' ||
                            'since winning Big Brother.');
insert into Authors values( '3','Toni Street','Non Fiction','8 September 1983 New Plymouth, New Zealand',
                            '2006-present', 'Lost and Found',
                            'Toni Street (born 8 September 1983) is a New Zealand television presenter and ' ||
                            'sports commentator. She is best known for co-hosting the New Zealand current affairs ' ||
                            'programme Seven Sharp alongside Mike Hosking, as well as presenting morning shows and ' ||
                            'sports reporting for One News.');
insert into Authors values( '4','David Walliams','Kids','20 August 1971 Wimbledon, London, England',
                            '1995-present', 'Megamonster',
                            'David Edward Williams OBE (born 20 August 1971), known professionally as ' ||
                            'David Walliams, is an English comedian, actor, writer, and television ' ||
                            'personality. He is best known for his work with Matt Lucas on the BBC ' ||
                            'sketch comedy series Rock Profile (1999-2000, 2009), Little Britain (2003-2007)' ||
                            ' and Come Fly With Me (2010-2011). Since 2012, Walliams has been a judge ' ||
                            'on the television talent show competition Britain''s Got Talent on ITV. ' ||
                            'He is also a writer of children''s books, having sold more than 37 million ' ||
                            'copies worldwide.');
insert into Authors values( '5','Lucinda Riley','Fiction','16 February 1965 Lisburn, Northern Ireland',
                            '1992-2021', 'The Missing Sister',
                            'Lucinda Kate Riley (Edmonds; 16 February 1965 - 11 June 2021)' ||
                            ' was a Northern Irish author of popular historical fiction, originally an actress.');

insert into books values( '35147118','Lost and Found','My story of heartbreak and hope',
                          'Non Fiction','Paperback / softback','September 27th, 2021','Toni Street',
                         29.99,37.99,272, true,
                         '''A profound and brave addition to the celebrity memoir canon.'' - ' ||
                         'The Spinoff Toni Street''s easy on-air style and warm personality has ' ||
                         'made her a firm favourite with thousands of New Zealanders. But behind ' ||
                         'the bubbly persona, is a story of heartbreak and resilience. Toni and ' ||
                         'her twin brother Lance were the much-loved first children of Taranaki ' ||
                         'dairy farmers Geoff and Wendy Street. At nine months old, Lance was ' ||
                         'diagnosed with Acute Myloid Leukaemia, passing away a year later. ' ||
                         'Devastated but determined to give Toni another sibling, Wendy became ' ||
                         'pregnant soon after Lance''s death, but after a difficult pregnancy, ' ||
                         'their baby Tracy was born, but only lived for a couple of hours. ' ||
                         'Trying to pick up the pieces of her shattered life, Wendy became pregnant ' ||
                         'again, and the Streets were overjoyed and relieved to welcome to a healthy ' ||
                         'boy, Stephen. Life returned to some kind of normalcy, and two years after ' ||
                         'Stephen was born, Wendy gave birth to another baby, Kirsty. But then, when ' ||
                         'Stephen was 14, the unthinkable happened. While out on the farm with his dad,' ||
                         ' Stephen was killed in a quad bike accident. His death would become the seismic ' ||
                         'marker of Toni''s life, as she vowed to do everything in her power to bring ' ||
                         'happiness to her parent''s life. Toni would go onto become one of New Zealand''s' ||
                         ' most popular and successful television reporters and hosts and was determined to ' ||
                         'raise her own large family, with husband Matt. But after giving birth to their ' ||
                         'second child, she became seriously unwell, and was admitted to hospital, in agony. ' ||
                         'Eventually diagnosed with a rare immune disease, Churg-Strauss syndrome, she had her ' ||
                         'gall bladder removed, and is on permanent medication. As a result, she and Matt found ' ||
                         'that she was unable to carry another child. Desperate for the large family that her ' ||
                         'parents missed out on, Toni''s dream for a third child was realised by her best friend, ' ||
                         'who offered to be her and Matt''s surrogate. Toni and her family''s story is one of ' ||
                         'almost unbelievable trial and tragedy, but also love, determination and incredible ' ||
                         'resilience and will strike a chord with anyone who has gone through difficult times.',
                         '155x237x22','9781988547732','Pan Macmillan Australia');
insert into books values( '9781760785024','Apples Never Fall','Liane Moriarty',
                          'Fiction','Trade Paperback','20/09/2021','Liane Moriarty',
                         29.99,37.99,496, true,
                         'From the outside, the Delaneys appear to be an enviably contented family. ' ||
                         'Even after all these years, former tennis coaches Joy and Stan are still winning ' ||
                         'tournaments, and now they''ve sold the family business they have all the time ' ||
                         'in the world to learn how to ''relax''. Their four adult children are busy living ' ||
                         'their own lives, and while it could be argued they never quite achieved their ' ||
                         'destinies, no-one ever says that out loud. But now Joy Delaney has disappeared ' ||
                         'and her children are re-examining their parents'' marriage and their family ' ||
                         'history with fresh, frightened eyes. Is her disappearance related to their ' ||
                         'mysterious house guest from last year? Or were things never as rosy as they ' ||
                         'seemed in the Delaney household?',
                         'H232xW155xS37','9781760785024','Pan Macmillan Australia');
insert into books values( '9781509840182','The Missing Sister','They will search the world to find her',
                          'Fiction','Trade Paperback','20/09/2021','Lucinda Riley',
                         29.99,37.99,400, true,
                         'They''ll search the world to find her. From the Sunday Times number ' ||
                         'one bestselling author Lucinda Riley, The Missing Sister is the seventh ' ||
                         'instalment in the multimillion-copy epic series The Seven Sisters. ' ||
                         'The six D''Apliese sisters have each been on their own incredible journey ' ||
                         'to discover their heritage, but they still have one question left ' ||
                         'unanswered: who and where is the seventh sister? They only have one ' ||
                         'clue - an image of a star-shaped emerald ring. The search to fi ...',
                         'h234mm x w153mm','9781509840182','Pan Macmillan');
insert into books values( '9780008499723','Megamonster','From multi-million bestselling author',
                          'Kids','Paperback','06/07/2021','David Walliams',
                         22.99,37.99,496, true,
                         'Megamonster is an action-packed page-turning adventure featuring ' ||
                         'a hilarious cast of characters, which is set to become a classic ' ||
                         'in the Walliams publishing portfolio. This timeless story takes ' ||
                         'place on an island in the middle of shark-infested waters - where ' ||
                         'the Cruel School stands on top of a dormant volcano. The lessons ' ||
                         'are appalling, the school dinners are revolting and the teachers ' ||
                         'are terrifying - especially the mysterious Science teacher, Doctor ' ||
                         'Doktur. When Larker is ...',
                         'H216xW135xS29','9780008499723','	HarperCollins Publishers');
insert into books values( '9780473470807','Aroha''s Way','A children''s guide through emotions',
                          'Teen','Paperback','06/07/2021','Craig Phillips',
                         19.95,29.99,36, true,
                         'Aroha''s Way is a bestselling picture book for children around uncomfortable ' ||
                         'emotions; fear, apprehension, worrying thoughts and nervousness with ' ||
                         'ways to manage them. Come along on a journey with Aroha, as she wards ' ||
                         'off nervousness, fear, worrying thoughts and apprehension, with simple, ' ||
                         'yet effective tools that everyone can use. From award-winning New Zealand ' ||
                         'author and illustrator, Craig Phillips, creator of The Adventures of Jack ' ||
                         'Scratch and Giants, Trolls, Witches, Beast ...',
                         'H210xW225','9780473470807','Wildling Books');


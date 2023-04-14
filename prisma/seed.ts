import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();
async function main() {
  // create dummy articles
  const post1 = await prisma.article.upsert({
    where: { title: 'Conversations With God Book 1' },
    update: {},
    create: {
      title: 'Conversations With God Book 1',
      body: 'The correct prayer is therefore never a prayer of supplication, but a prayer of gratitude.',
      description: `Conversations with God Book 1 began a series that has been changing millions of lives for more than ten years. Finally, the bestselling series is now a movie, starring Henry Czerny (The Pink Panther and Clear and Present Danger) and Ingrid Boulting (The Last Tycoon). Produced and directed by Stephen Simon (producer of Somewhere in Time and What Dreams May Come) and distributed by Samuel Goldwyn Films and Fox Home Entertainment, the theatrical release is set for October 27, 2006. The movie is the true account of Walsch (played by Cierny), who went from an unemployed homeless man to an "accidental spiritual messenger" and author of the bestselling book`,
      published: true,
    },
  });
  const post2 = await prisma.article.upsert({
    where: { title: 'Conversations With God Book 2' },
    update: {},
    create: {
      title: 'Conversations With God Book 2',
      body: 'Mine is always your Highest Thought, your Clearest Word, your Grandest Feeling. Anything less is from another source.',
      description: `Conversations with God Book 2 began a series that has been changing millions of lives for more than ten years. Finally, the bestselling series is now a movie, starring Henry Czerny (The Pink Panther and Clear and Present Danger) and Ingrid Boulting (The Last Tycoon). Produced and directed by Stephen Simon (producer of Somewhere in Time and What Dreams May Come) and distributed by Samuel Goldwyn Films and Fox Home Entertainment, the theatrical release is set for October 27, 2006. The movie is the true account of Walsch (played by Cierny), who went from an unemployed homeless man to an "accidental spiritual messenger" and author of the bestselling book`,
      published: true,
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });

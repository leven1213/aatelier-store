import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data';

async function main () {
    const prisma = new PrismaClient(); // instantiate prisma
    await prisma.product.deleteMany(); // deletes everything in Product table
    await prisma.account.deleteMany(); // deletes everything in Account table
    await prisma.session.deleteMany(); // deletes everything in Session table
    await prisma.verificationToken.deleteMany(); // deletes everything in verificationToken table
    await prisma.user.deleteMany(); // deletes everything in User table

    await prisma.product.createMany({ data: sampleData.products }); // creates multiple Products and skips any duplicates
    await prisma.user.createMany({ data: sampleData.users }); // creates multiple Users and skips any duplicates
    
    // console.log('Database seeded successfully!');
}

main();
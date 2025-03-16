import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data';

async function main () {
    const prisma = new PrismaClient(); // instantiate prisma
    await prisma.product.deleteMany(); // deletes everything in product table

    await prisma.product.createMany({ data: sampleData.products }); 
    
    // console.log('Database seeded successfully!');
}

main();
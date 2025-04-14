// Infer from Zod schemas
import { z } from 'zod';
import { insertProductSchema, insertCartSchema, cartItemSchema, shippingAddressSchema } from '@/lib/validators';

export type Product = z.infer<typeof insertProductSchema> & {
    // Extra fields
    id: string;
    rating: string;
    createdAt: Date;
};

// No extra fields, no additional fields
export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
export type ShippingAddress = z.infer<typeof shippingAddressSchema>;
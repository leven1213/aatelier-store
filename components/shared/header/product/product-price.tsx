import { cn

 } from "@/lib/utils";
const ProductPrice = ({ value, className }: {value: number; className?: string; }) => {
    // Ensure two decimal places
    const stringValue = value.toFixed(2);
    // Get int/float
    const [intValue, floatValue] = stringValue.split('.');
    
    return ( <p className={cn('', className)}>
        <span>&#36;</span>
        {intValue}
        <span>.{floatValue}</span>
    </p> );
}
 
export default ProductPrice;
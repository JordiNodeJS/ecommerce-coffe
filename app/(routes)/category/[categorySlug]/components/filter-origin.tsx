import { useGetProductField } from "@/api/getProductField"
import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { FilterTypes } from "@/types/filters";
import { RadioGroup } from "@radix-ui/react-radio-group";

type FiltersOriginProps = {
    setFilterOrigin: (origin: string)=> void
  }

const FilterOrigin = ({setFilterOrigin}: FiltersOriginProps) => {
    const {result, loading }:FilterTypes = useGetProductField();
  return (
    <div className='my-5'>
        <p className='mb-3 font-bold'>Origen</p>
        {loading && result === null && (
            <p>Cargando origen...</p>
        )}
        <RadioGroup onValueChange={(value)=>setFilterOrigin(value)}>
            {result !== null && result.schema.attributes.origin.enum.map((origin:string)=> (
                <div key={origin} className="flex items-center space-x-2 mb-1">
                    <RadioGroupItem value={origin} id={origin} />
                    <Label htmlFor={origin}>{origin}</Label>
                </div>
            ))}
        </RadioGroup>
    </div>
  )
}

export default FilterOrigin
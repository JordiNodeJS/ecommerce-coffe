
import { useRouter } from 'next/navigation'

interface Props {
    slug: string;
    url: string
}

const ProductImageMiniature = ({slug, url}:Props) => {
    const router = useRouter();
  return (
    <div onClick={()=> router.push(`/product/${slug}`)}>
        <img 
          // src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`} 
          src={`${url}`} 
          alt="Product" 
          className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
        />
    </div>
  )
}

export default ProductImageMiniature

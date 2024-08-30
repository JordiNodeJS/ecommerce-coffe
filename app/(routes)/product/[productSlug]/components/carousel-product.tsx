import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface CarouselProductsProps {
    images: {
        data: {
            id: number;
            attributes: {
                url: string
            }
        }[]
    }
}

const CarouselProduct = (props: CarouselProductsProps) => {
    const {images} = props
  return (
    <div className="sm:px-16">
        <Carousel>
            <CarouselContent>
                {images.data.map((image)=> (
                    <CarouselItem key={image.id}>
                        <img 
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`} 
                            alt="image product" 
                            className="rounded-lg "
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
  )
}

export default CarouselProduct
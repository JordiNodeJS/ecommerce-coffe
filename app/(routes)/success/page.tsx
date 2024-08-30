'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const successPage = () => {
    const router = useRouter();
  return (
    <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
        <div className="flex flex-col-reverse gap-2 sm:flex-row">
            <div className="flex justify-center md:min-w-[400px]">
                <Image src="/success.jpg" alt="Success" width={250}height={500} className="rounded-lg" />
            </div>
            <div>
                <h1 className="text-3xl">¡Gracias por tu compra!</h1>
                <p className="my-3">En breve, nuestro equipo se pondrámanos a la obra para seleccionar los granos másfrescos y preparar tu envío con cuidado y dedicación.Mientras tanto, siéntate, relájate y deja que laanticipación del delicioso aroma del café recién hechote envuelva.</p>
                <p className="my-3">Gracias de nuevo por confiar ennosotros para satisfacer tu amor por el café. ¡Estamosdeseando que pruebes nuestros exquisitos sabores!</p>
                <p className="my-3">¡Disfruta del café!</p>
                <Button onClick={() => router.push("/")}>Volver a latienda</Button>
            </div>
        </div>
    </div>
  )
}

export default successPage

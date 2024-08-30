"use client";

import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { formatPrice } from '@/lib/formatPrice';
import { Separator } from '@radix-ui/react-dropdown-menu';
import React from 'react'
import CartItem from './components/cart-item';
import { useRouter } from 'next/navigation';

const CartPage = () => {
    const { items, removeAll } = useCart();
    const prices = items.map(product=> product.attributes.price)
    const totalPrice = prices.reduce((total, price)=> total+ price, 0)
    const router = useRouter();
  return (
    <div className='max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
        <h1 className='mb-5 text-3xl font-bold'>
            Carrito de compras
        </h1>
        <div className='grid sm:grid-cols-2 sm:gap-5'>
            <div>
                {items.length === 0 && (
                    <p>No hay productos en el carrtito</p>
                )}
                <ul>
                    {items.map((item)=> (
                        <CartItem key={item.id} product={item}/>
                    ))}
                </ul>
            </div>
            <div className='max-w-xl'>
                <div className='p-6 rounded-lg bg-slate-100'>
                    <p className='mb-3 text-lg font-semibold'>
                        Resumen de la orden
                    </p>
                    <Separator />
                    <div className='flex justify-between gap-5 my-4'>
                        <p>Orden total</p>
                        <p>{formatPrice(totalPrice)}</p>
                    </div>
                    <div className='fex items-center justify-center w-full mt-3'>
                        <Button 
                            className='w-full'
                            onClick={()=> router.push('/order')}
                        >
                            Comprar
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartPage
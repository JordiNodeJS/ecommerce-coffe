'use client'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart';
import React, { useEffect, useState } from 'react'
import { makePaymentRequest } from '@/api/payment';
import { useRouter } from 'next/navigation';

const OrderPage = () => {
    const [formData, setFormData] = useState({
        customerName: '',
        address: '',
        phone: '',
    });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const {items, removeAll} = useCart();
  const router = useRouter()
  const prices = items.map(product=> product.attributes.price)
  const totalPrice = prices.reduce((total, price)=> total+ price, 0)
  useEffect(() => {
    // Verificamos si hay algún campo vacío
    const { customerName, address, phone } = formData;
    if (customerName && address && phone && items.length > 0) {
        setIsButtonDisabled(false);
    } else {
        setIsButtonDisabled(true);
    }
}, [formData]); // Se ejecuta cada vez que formData cambie
  const handleChange=(e:any)=> {
    setFormData(
      {...formData, 
        [e.target.id]:e.target.value,
      }
    )
  }
  
  const handleSubmit=async(e:any)=> {
    e.preventDefault();
    setIsButtonDisabled(true);
    const orderData = {
      data: {
          ...formData,
          products: items.map(item=> ({
            productName: item.attributes.productName,
            price: item.attributes.price,
            taste: item.attributes.taste
          })),
          total: totalPrice
      }
  };
    // console.log({...formData, products: items})
        try {
            const response = await makePaymentRequest.post(`/api/orders`, orderData);

            console.log('Orden enviada:', response.data);
            removeAll();
            router.push('/success')
        } catch (error) {
            console.error('Error al enviar la orden:', error);
            // Puedes manejar el error, mostrar un mensaje de error, etc.
        }
  }
    
  return (
    <div className="mt-20 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-5 text-center">Ingrese sus datos</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="nombre">
              Nombre
            </label>
            <input
              type="text"
              id="customerName"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Tu nombre"
              value={formData.customerName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="direccion">
              Dirección
            </label>
            <input
              type="text"
              id="address"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Tu dirección"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="celular">
              Celular
            </label>
            <input
              type="text"
              id="phone"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Tu número de celular"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <Button 
                className='w-full'
                onClick={handleSubmit}
                disabled={isButtonDisabled}
          >
            Hacer pedido
          </Button>
        </form>
      </div>
    </div>
  )
}

export default OrderPage

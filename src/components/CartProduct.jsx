import {formatVND} from "../utils/utils.js";

export  default function  CartProduct({id, name, image, price, quantity}) {
    return (
        <div className='flex gap-4'>
                <div>
                    <div
                        className="w-[80px] flex justify-center items-center aspect-square rounded-md overflow-hidden">
                        <img className="w-full h-full object-cover" src={image} alt={name}
                             title={name}/>
                    </div>

                </div>
                <div>
                    <div>
                        <p className='text-left font-medium'>{name}</p>
                    </div>
                    <div>
                        <p className='pt-2'>Thành
                            tiền {price} x {quantity} = {formatVND(price * quantity)} VND</p>
                    </div>
                </div>
        </div>
    )
}
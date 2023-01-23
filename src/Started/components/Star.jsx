import { useState, useEffect } from 'react';
import {AiFillStar} from 'react-icons/ai';

export const Star = () => {

    const [star, setStar] = useState(0);

    const handleStar = (e, item ) => {
        e.preventDefault();
        setStar(item);
    }

    return (
        <div>
            {
                [1, 2, 3, 4, 5].map( ( item ) => {
                    return (
                        <button className={'bg-white border-0'} onClick={ (e) => handleStar(e, item) }  >
                            <AiFillStar key={item} className={item <= star ? 'fs-3 text-danger' : 'fs-3' }  />
                        </button>
                    )
                })
            }
        </div>
    )
}
import React from 'react';
import Link from 'next/link';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link href={props.path} passHref>
          <div className='cards__item__link'>
            <figure className='cards__item__pic-wrap' data-category={props.label}>
              <img
                className='cards__item__img'
                alt='Bike'
                src={props.src}
              />
            </figure>
            <div className='cards__item__info'>
              <h5 className='cards__item__text'>{props.text}</h5>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;

import { Error, Loading } from '.';
import { useData } from '../hooks/useData';
import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from "../constants";

import { Inventory } from '../types/Inventory';

export const InventoryContainer = () => {
  const name = 'inventory';
  const { data, error } = useData(name);

  if (error) return <Error />
  if (!data) return <Loading />



  return (
    <main>
      <h2>{name}</h2>
      <Ul>
        {data.map((inventoryData: Inventory) => {
          const { title, category, description, slogan, price, stock, id } = inventoryData;
          return (
            <li key={`futurama-cast-${id}`}>
              <Category>{category}</Category>
              <h3>{title}</h3>
              <Slogan>{slogan}</Slogan>
              <p>{description}</p>
              <dl>
                <div>
                  <dt>price</dt>
                  <dd>{price} </dd>
                </div>
                <div>
                  <dt>stock</dt>
                  <dd>{stock} </dd>
                </div>
              </dl>
            </li>
          )
        })}
      </Ul>
    </main >
  )
}
const Ul = styled.ul`
  max-width:1000px; margin:0 auto;
  display:grid;
  gap :2rem;

  h3{margin-bottom:0.8rem;}

  @media (min-width: ${MEDIA_QUERY_END_POINT.DESKTOP}) {
    grid-template-columns: repeat(2, calc((100% - 2rem) / 2));
  }
  li{text-align:center;}
  dl{display:flex; flex-wrap:wrap; justify-content:center; gap:0 1em;
    div{ }
  }
`

const Slogan = styled.p`
font-weight:bold;
  color:#E44047;
`
const Category = styled.p`
display:inline-block; position: absolute; top:3rem; left: 0;
  background:#ffe591; font-size:1.4rem; padding:0 0.8em; border-radius:0 2rem 2rem 0; font-weight:normal;
`
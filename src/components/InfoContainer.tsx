import { Error, Loading } from '.';
import { useData } from '../hooks/useData';
import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from "../constants";

import { Info } from '../types/Info';
import Link from 'next/link';

export const InfoContainer = () => {
  const name = 'info'
  const { data, error } = useData(name);
  console.log(data);
  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <main>
      <h2>{name}</h2>
      <Ul>
        {data.map((infoData: Info) => {
          const { synopsis, yearsAired, creators, id } = infoData;
          return (
            <li key={`futurama-info-${id}`}>
              <dl>
                <div>
                  <dt>synopsis</dt>
                  <dd>{synopsis}</dd>
                </div>
                <div>
                  <dt>yearsAired</dt>
                  <dd>{yearsAired}</dd>
                </div>
                <div>
                  <dt>creators</dt>
                  <dd>
                    <Link href={creators[0].url}>
                      <a>{creators[0].name}</a>
                    </Link>
                  </dd>
                  <dd>
                    <Link href={creators[0].url}>
                      <a>{creators[0].name}</a>
                    </Link></dd>
                </div>

              </dl>
            </li>
          )
        })}
      </Ul>
    </main>
  )
}


const Ul = styled.ul`
  li{
    max-width:1000px; margin:0 auto;
    dl{
        div{flex-direction:column;}
        div:not(:first-child){
          flex-direction: row;
        }
        div:first-child{
          margin-bottom:2rem;
          dd{
            columns: 20em;
            column-gap:4rem;
            text-align:justify;
            letter-spacing:-0.3px;
            &::first-letter{
              font-size:2em; font-weight:bold;
            }
          }
        }
      }
    }
`
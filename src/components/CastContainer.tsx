import { Error, Loading } from '.';
import { useData } from '../hooks/useData';
import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from "../constants";
import Link from 'next/link';
import { Cast } from '../types/Cast';

export const CastContainer = () => {
  const name = 'cast'
  const { data, error } = useData(name);
  console.log(data);
  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <main>
      <h2>{name}</h2>
      <Ul>
        {data.map((castData: Cast) => {
          const { name, born, died, bio, id } = castData;
          return (
            <li key={`futurama-cast-${id}`}>
              <h3>{name}</h3>
              <dl>
                <div>
                  <dt>born</dt>
                  <dd>{born}</dd>
                </div>
                <div>
                  <dt>bio</dt>
                  <dd>
                    <Link href={bio.url}><a>URL</a></Link></dd>
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
  width:100%;
  max-width:1000px; margin:0 auto;
  margin:0 auto;
  display: grid;
  gap :2rem;
  grid-template-columns: repeat(2, calc((100% - 2rem) / 2));
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: repeat(3, calc((100% - 2rem * 2) / 3));
  }

`
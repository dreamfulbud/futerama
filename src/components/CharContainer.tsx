import { Error, Loading } from '.';
import { useData } from '../hooks/useData';
import { Characters } from '../types/Characters';
import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from "../constants";

export const CharContainer = () => {
  const name = 'characters'
  const { data, error } = useData(name);

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <main>
      <h2>{name}</h2>
      <Ul>
        {data.map((charData: Characters) => {
          const { images, name, sayings, gender, species, age, id } = charData;
          return (
            <li key={`futurama-character-${id}`}>
              <h3>{name.first} {name.middle} {name.last}</h3>
              <Profile>
                <img src={images.main} alt={name.first} />
                <Syaings><strong>{sayings[0]}</strong></Syaings>
              </Profile>
              <dl>
                <div>
                  <dt>gender</dt>
                  <dd>{gender}</dd>
                </div>
                <div>
                  <dt>species</dt>
                  <dd>{species}</dd>
                </div>
                {/* <div>
                  <dt>homePlanet</dt>
                  <dd>{homePlanet}</dd>
                </div> */}
                {/* <div>
                  <dt>occupation</dt>
                  <dd>{occupation}</dd>
                </div> */}
                <div>
                  <dt>age</dt>
                  <dd>{age}</dd>
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
  margin:0 auto;
  display: grid;
  gap :2rem;
  grid-template-columns: repeat(2, calc((100% - 2rem) / 2));
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: repeat(3, calc((100% - 2rem * 2) / 3));
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.DESKTOP}) {
    grid-template-columns: repeat(4, calc((100% - 2rem * 3) / 4));
  }

  li{


    &:hover > div > p{opacity:1; }

    dl{
      div{ align-items: center; justify-content: center;}
    }
  }


`

const Profile = styled.div`
  width:100%;
  height:0;
  padding-top:calc( 1.2 * 100%);
  position:relative;
  margin-bottom:2rem;

  img{
    position:absolute; top:0; left:0;
    width:100%; height:100%;
    object-fit:contain;
  }

`
const Syaings = styled.p`
  word-break:break-all;
  width:100%;
  line-height:1.4; font-size:1.6rem; font-weight:bold; background:rgba(0,0,0,0.8);
  color:#fff;
  letter-spacing:-0.5px;
  position:absolute; bottom:0; left:0; padding:0.8em 1em; border-radius:1em;
  opacity:0;
  transition:all 0.3s;
`
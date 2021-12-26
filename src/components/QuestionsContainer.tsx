import { Error, Loading } from '.';
import { useData } from '../hooks/useData';
import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from "../constants";
import { useState } from 'react';
import { Questions } from '../types/Questions';

export const QuestionsContainer = () => {
  const name = 'questions';
  const { data, error } = useData(name);

  const buttonHandler = (event) => {
    event.currentTarget.nextSibling.classList.toggle('on');
  }

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <main>
      <h2>{name}</h2>
      <Ul>
        {data.map((questionsData: Questions) => {
          const { question, possibleAnswers, correctAnswer, id } = questionsData;
          return (
            <li key={`futurama-cast-${id}`}>
              <button onClick={buttonHandler}>
                <span>Q</span>
                <span>{question}</span>
              </button>
              <p>
                <span>A</span>
                <span>{correctAnswer}</span>
              </p>
            </li>
          )
        })}
      </Ul >
    </main >
  )
}


const Ul = styled.ul`
  max-width:1000px; margin:0 auto;
  display:grid;
  gap :2rem;


  li{
    padding:1rem;
  }
  button, p{
    background:none;
    font-size:inherit;
    text-align:left;
    display:flex; justify-content:start-flex; align-items:center;
    padding:1em;
    span:first-child{ 
      display:flex; justify-content:center; align-items:center; width:2em; height:2em; 
      background:#eee;  border-radius:50%; margin-right:1rem; 
    }
  }
  button{cursor:point; width:100%;}
  p{ display:none; height:0; width:100%;
    padding:0 1em;  opacity:0; font-weight:bold; color:#E44047;
    
    span:first-child{ background:#ffe591; }
  }
  p.on{display:flex; height:auto; opacity:1; padding:0 1em 1em 1em;}

`
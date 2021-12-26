import { Error, Loading } from '.';
import { useData } from '../hooks/useData';
import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from "../constants";
import { useState } from 'react';
import { Questions } from '../types/Questions';

export const QuestionsContainer = () => {
  const name = 'questions';
  const { data, error } = useData(name);


  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <main>
      <h2>{name}<Text>Drag to see the answer!</Text></h2>

      <Ul>
        {data.map((questionsData: Questions) => {
          const { question, possibleAnswers, correctAnswer, id } = questionsData;
          return (
            <li key={`futurama-cast-${id}`}>
              <p>
                <span>Q</span>
                <span>{id}. {question}</span>
              </p>
              <List>
                {possibleAnswers.map((questionList: string, index: number) => {
                  return (
                    <>
                      <li>
                        <input type="radio" name={question} id={questionList} />
                        <label htmlFor={questionList}><span>{index + 1}</span> {questionList}</label>
                      </li>
                    </>
                  )
                })
                }
              </List>
              <p className="answer">
                <span>A</span>
                <span className="drag">{correctAnswer}</span>
              </p>
            </li>
          )
        })}
      </Ul >
    </main >
  )
}

const Text = styled.span`
  font-size:1.8rem;
  font-weight:normal;
  display:block;
  margin-top:1rem;
`
const Ul = styled.ul`
  max-width:1000px; margin:0 auto;
  display:grid;
  gap :2rem;
  & > li{padding:3rem; text-align:center;}
  p{
    font-weight:bold;
    background:none;
    font-size:inherit;
    text-align:left;
    display:flex; justify-content:center; align-items:center;
    span:first-child{ 
      display:flex; justify-content:center; align-items:center; width:2em; height:2em; 
      background:#eee;  border-radius:50%; margin-right:1rem; 
    }
  }

  .answer{ 
    border:2px solid #ffe591; padding:0.4rem 3rem 0.4rem 2rem; border-radius:0.8rem;
    display:inline-flex;
    margin:0 auto;
    height:auto; opacity:1; 
    font-weight:bold; color:#fff;
    span:first-child{ background:#ffe591; }
    .drag::selection{
      color:#E44047;
    }
  }
`

const List = styled.ul`
  display:flex;
  box-shadow:none;
  padding:2rem;       
  gap:1rem;
  justify-content:center;
  flex-wrap:wrap;

  li{
    position:relative;
    padding:0;

  }
  input[type='radio']{
    opacity:0;
    position:absolute;

    & + label{
      display:block;
      padding:1rem 2rem;
      line-height:1;
      background:#f5f5f5;
      border-radius:0.4rem;
      display:flex;
      align-items:center;
      span{
        font-weight:bold;
        background:#fff;
        width:1.4em;
        height:1.4em;
        line-height:1.6em;
        text-align:center;
        margin-right:1rem;
        border-radius:1rem;
      }

    }
    &:focus + label{
      outline: 2px auto -webkit-focus-ring-color;
      outline-offset: 2px;
    }
    &:checked + label{
      box-sizing:border-box;
      color:#E44048;
      background:#ffe591;
    }
  }  
  
`
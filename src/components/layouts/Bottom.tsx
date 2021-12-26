import styled from "@emotion/styled";

export const Bottom = () => {
  return (

    <Footer>
      <div>
        <h2>Sample APIs <strong>Futurama</strong></h2>
        <p>[Link]https://sampleapis.com/api-list/futurama</p>
      </div>
    </Footer>

  )
}

const Footer = styled.footer`
  background:#eee;

  div{
    max-width:1280px; margin:0 auto;
    padding:2em 0;
    text-align:center;

    h2{
      font-size:1.8rem;
      font-weight:bold;
      margin-bottom:0.8rem;
    }
    h2, p{ color:#777;}
  }
`

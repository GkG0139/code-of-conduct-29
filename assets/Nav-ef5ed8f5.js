import{s as t,j as i}from"./index-04971815.js";const d=t.div`
  // padding: 2rem;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: top;
  width: 100%;
  font-size: 1.5rem;
`,m=t.img`
  width: 20vw;
  height: auto;

  /* iPhone */
  @media (max-width: 375px) {
    min-width: 120px;
    max-width: 60vw;
  }

  /* Between iPhone and iPad */
  @media (min-width: 376px) and (max-width: 767px) {
    min-width: 150px; 
    max-width: 40vw; 

  /* iPad */
  @media (min-width: 768px) and (max-width: 1024px) {
    min-width: 180px;
    max-width: 30vw;
  }

  /* PC */
  @media (min-width: 1025px) {
    min-width: 200px;
    max-width: 20vw;
  }
`,n=t.img`
  max-height: 3vw;
  max-width: auto;

  @media (min-width: 1025px) {
    max-height: 3vw;
    max-width: auto;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    max-height: 4vw;
    max-width: auto;
  }
  @media (max-width: 768px) {
    display: none;
  }
`,x=t.img`
  @media (min-width: 1025px) {
    display: none;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 768px) {
    max-height: 8vw;
    max-width: auto;
  }
`;function h({children:a}){return i.jsxs(i.Fragment,{children:[i.jsxs(d,{children:[i.jsx(m,{src:"../../public/logo.png"}),i.jsx(n,{src:"../../public/sitlogo.png"}),i.jsx(x,{src:"../../public/sitlogo_short.png"})]}),a]})}export{h as default};

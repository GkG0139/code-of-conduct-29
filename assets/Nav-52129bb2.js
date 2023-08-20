import{s as t,j as i}from"./index-9d171072.js";const o="/code-of-conduct-29/assets/logo-24806036.png",d="/code-of-conduct-29/assets/sitlogo-4ec81818.png",n="/code-of-conduct-29/assets/sitlogo_short-cfbe5d9c.png",e=t.div`
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
`,x=t.img`
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
`,h=t.img`
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
`;function w({children:a}){return i.jsxs(i.Fragment,{children:[i.jsxs(e,{children:[i.jsx(m,{src:o,alt:"Code of Aquatia Logo"}),i.jsx(x,{src:d,alt:"SIT Logo"}),i.jsx(h,{src:n,alt:"SIT Logo Short"})]}),a]})}export{w as default};

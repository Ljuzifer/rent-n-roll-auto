import{s as d,j as t,r as l,S as c,u as x,a as i,b as h,c as f,d as m,f as g,e as j,M as C,L as b}from"./index-83SvrIq8.js";import{c as y,C as L,a as F,F as S}from"./filterHelper-7L-ZwCB6.js";const T=d.button`
    display: block;
    color: rgba(52, 112, 255, 1);

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
    text-decoration-line: underline;
    border: none;
    background: transparent;
    margin: 0 auto;
    transition: color 0.3s;

    margin-top: 100px;

    &:hover,
    &:active,
    &:focus {
        color: rgba(11, 68, 205, 1);
    }
`;function p({loadMore:s}){return t.jsx(T,{style:{display:"block",marginLeft:"auto",marginRight:"auto",marginBottom:"150px"},type:"button",onClick:s,children:"Load more"})}p.propTypes;const k=12;function u({catalog:s}){const[n,a]=l.useState(1),e=n*k,o=()=>a(r=>r+1);return t.jsxs(t.Fragment,{children:[t.jsxs(c,{children:[t.jsx("ul",{style:{display:"flex",flexWrap:"wrap",columnGap:"29px",rowGap:"50px"},children:y(s,e).map(r=>t.jsx("li",{children:t.jsx(L,{car:r})},r.id))}),(s==null?void 0:s.length)>e&&t.jsx(p,{loadMore:o})]}),s.length===0&&t.jsx(c,{children:t.jsx("div",{children:t.jsx("b",{children:"Cars Not Found 😊 Try another options."})})})]})}u.propTypes;function M(){const s=x(),n=i(h),a=i(f),e=i(m),o=F(n,a);return l.useEffect(()=>{s(g())},[s]),l.useEffect(()=>{s(j(null))},[s]),t.jsxs(C,{children:[e?t.jsx(b,{type:"Gear",color:"blue",size:"220px"}):t.jsx(S,{cars:o}),n.length!==0&&!e&&t.jsx(u,{catalog:o})]})}export{M as default};

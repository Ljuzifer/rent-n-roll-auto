import{s as d,j as t,r as l,S as c,u as h,a as i,b as x,c as f,d as g,f as m,e as j,M as y}from"./index-vuZgYgKf.js";import{c as C,C as b,a as F,F as L}from"./filterHelper-9XXtrAzg.js";const T=d.button`
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
`;function u({loadMore:s}){return t.jsx(T,{style:{display:"block",marginLeft:"auto",marginRight:"auto",marginBottom:"150px"},type:"button",onClick:s,children:"Load more"})}u.propTypes;const k=12;function p({catalog:s}){const[e,a]=l.useState(1),n=e*k,o=()=>a(r=>r+1);return t.jsxs(t.Fragment,{children:[t.jsxs(c,{children:[t.jsx("ul",{style:{display:"flex",flexWrap:"wrap",columnGap:"29px",rowGap:"50px"},children:C(s,n).map(r=>t.jsx("li",{children:t.jsx(b,{car:r})},r.id))}),(s==null?void 0:s.length)>n&&t.jsx(u,{loadMore:o})]}),s.length===0&&t.jsx(c,{children:t.jsx("div",{style:{height:"100vh"},children:t.jsx("b",{style:{display:"flex",justifyContent:"center"},children:"Oops...! Cars Not Found 😊 Try another options."})})})]})}p.propTypes;function E(){const s=h(),e=i(x),a=i(f),n=i(g),o=F(e,a);return l.useEffect(()=>{s(m())},[s]),l.useEffect(()=>{s(j(null))},[s]),t.jsxs(y,{children:[t.jsx(L,{cars:o}),e.length!==0&&!n&&t.jsx(p,{catalog:o})]})}export{E as default};

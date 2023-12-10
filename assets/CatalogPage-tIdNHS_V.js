import{s as d,j as t,r as c,S as l,u as x,a as i,b as h,c as f,d as m,f as g,e as j,M as C}from"./index-nOEPXe0v.js";import{c as b,C as y,a as F,F as L}from"./filterHelper-Lxu2nboC.js";const T=d.button`
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
`;function u({loadMore:s}){return t.jsx(T,{style:{display:"block",marginLeft:"auto",marginRight:"auto",marginBottom:"150px"},type:"button",onClick:s,children:"Load more"})}u.propTypes;const k=12;function p({catalog:s}){const[e,a]=c.useState(1),n=e*k,o=()=>a(r=>r+1);return t.jsxs(t.Fragment,{children:[t.jsxs(l,{children:[t.jsx("ul",{style:{display:"flex",flexWrap:"wrap",columnGap:"29px",rowGap:"50px"},children:b(s,n).map(r=>t.jsx("li",{children:t.jsx(y,{car:r})},r.id))}),(s==null?void 0:s.length)>n&&t.jsx(u,{loadMore:o})]}),s.length===0&&t.jsx(l,{children:t.jsx("div",{children:t.jsx("b",{children:"Cars Not Found 😊 Try another options."})})})]})}p.propTypes;function M(){const s=x(),e=i(h),a=i(f),n=i(m),o=F(e,a);return c.useEffect(()=>{s(g())},[s]),c.useEffect(()=>{s(j(null))},[s]),t.jsxs(C,{children:[t.jsx(L,{cars:o}),e.length!==0&&!n&&t.jsx(p,{catalog:o})]})}export{M as default};

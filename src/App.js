import React from "react";
import styled from 'styled-components';

function App() {
  const navArr = [{title: "html"}, {title: "css"}, {title: "js"}];
  return (
    <div className="root"> 
      <HeaderStyled title="리액트(React)" nav={navArr}/>
      <Nav nav={navArr}/>
      <Article title="리액트란?" desc="desc 1"/>
      <Article title="컴포넌트란?" desc="desc 2"/>
      <Article  title="props란?" desc="desc 3"/>
    </div>
  );
}

function Header({ title, nav }) {
  // const { title, nav } = props;
  return (
    <header>
      <h1>{title}</h1>
      <Nav nav={nav}/>
    </header>
  );
}

function Nav({ nav }){
  // const { nav } = props;
  return (
    <nav>
      <ul>
        {nav.map((item, index) => (
          <li key={index}>
            <a href={"/sub" + item.title}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Article(props){
  return (
    <article>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </article>
  );
}

const HeaderStyled = styled(Header)`
  display: flex;
  border-bottom: 1px solid #eee;
`;

export default App;

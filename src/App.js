function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      <Nav/>
    </header>
  )
};
// 컴포넌트(Header) 안에 컴포넌트(Nav)를 넣을 수 있음 상단 참고

function Nav(props) {
  const list = props.nav.map((item, index) => (
    <li key={index}>
      <a href={"/sub" + item.title}>{item.title}</a>
    </li>
  )
);

  return (
    <nav>
      <ul>{list}</ul>
    </nav>
  )
};

function Article (props){
  return (
    <article>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </article>
  )
};

function App() {
  const navArr = [{title: "html"}, {title: "css"}, {title: "js"}];
  return (
    <div className="root"> 
      <Header title="리액트(React)"/>
      <Nav nav={navArr}/>
      <Article title="리액트란?" desc="desc 1"/>
      <Article title="컴포넌트란?" desc="desc 2"/>
      <Article  title="props란?" desc="desc 3"/>
    </div>
  );
}

export default App;

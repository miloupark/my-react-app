function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      <Nav/>
    </header>
  )
};
// 컴포넌트(Header) 안에 컴포넌트(Nav)를 넣을 수 있음 상단 참고

function Nav() {
  return (
    <nav>
        <ul>
          <li>
            <a href="/">html</a>
          </li>
          <li>
            <a href="/">CSS</a>
          </li>
          <li>
            <a href="/">js</a>
          </li>
        </ul>
      </nav>
  )
};

function Article (){
  return (
    <article>
      <h2>타이틀1</h2>
      <p>hello, react</p>
    </article>
  )
};

function App() {
  return (
    <div className="root"> 
      <Header title="리액트(React)"/>
      <Nav/>
      <Article/>
      <Article/>
      <Article/>
    </div>
  );
}

export default App;






// 화살표 함수를 사용한 컴포넌트 (상단엔 일반함수로 표현해줌)
// const App = () => {
//   return
//     <>
//     리액트 공부중 28살 개미는 오늘도 공부를 해본다
//     </>;
// };
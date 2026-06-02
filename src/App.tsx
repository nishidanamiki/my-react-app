// 作成したコンポーネントをインポート
import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./components/UserProfile";
import Card from "./components/Card";
import Counter from "./components/Counter";
import NameForm from "./components/NameForm";

function App() {
  return (
    <>
      <WelcomeMessage />
      <Card>
        <UserProfile
          name="山田 太郎"
          hobby="プログラミング"
          bio="Reactを勉強中です！"
        />
      </Card>

      <Card>
        <UserProfile name="鈴木 花子" age={25} hobby="読書" />
      </Card>

      <Card>
        <h2>お知らせ</h2>
        <p>ここにお知らせが入ります。</p>
      </Card>

      <Card>
        <Counter />
      </Card>

      <Card>
        <NameForm />
      </Card>
    </>
  );
}

export default App;

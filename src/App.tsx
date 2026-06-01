// 作成したコンポーネントをインポート
import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./components/UserProfile";
import Card from "./components/Card";

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
        <UserProfile name="鈴木 花子" hobby="読書" />
      </Card>
    </>
  );
}

export default App;

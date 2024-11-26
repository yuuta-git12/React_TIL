import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
    const [num, setNum] = useState(0);
    const onClickCountUp = () => {
        // このset関数は実行されない
        setNum(num + 2);
        // set関数が複数ある場合は最後のset関数のみが読み込まれる
        setNum(num + 1);

        // 関数を使うと複数のset関数も実行される(今のステートの状態を参照して更新)
        setNum((prev) => prev + 1);
        setNum((prev) => prev + 1);
    };
    return(
    // ReactFragmentを使うパターン 
    <>
        {/* スタイルの適用方法 */}
        <h1 style={{ color: "#aacfd0" }}>こんにちは!</h1>
        <ColorfulMessage color="blue" fontSize="30px">お元気ですか?</ColorfulMessage>
        <ColorfulMessage color="green" fontSize="30px">元気です!</ColorfulMessage>
    
        {/* 関数の適用方法 */}
        <button onClick={onClickCountUp}>カウントアップ</button>
        <p>{ num }</p>
    </>
    ); 
};
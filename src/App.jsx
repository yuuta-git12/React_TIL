import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

// ステート更新のたびにApp以下が再レンダリングされる
// propsの値が変わった場合も再レンダリングされる
export const App = () => {
    console.log("---App---")
    const [num, setNum] = useState(0);
    const [isShowFase, setIsShowFace] = useState(true);
    const onClickCountUp = () => {
        // 関数を使うと複数のset関数も実行される(今のステートの状態を参照して更新)
        setNum((prev) => prev + 1);
    };

    const onClickToggle = () => {
        setIsShowFace(!isShowFase);
    }

    // numの値に変更があった場合にuseEffect内の処理が実行される
    useEffect(() => {
        // numが3の倍数の場合に顔文字を出す
        if(num > 0){
            if(num % 3 === 0){
                isShowFase || setIsShowFace(true);
            }else{
                isShowFase && setIsShowFace(false);
            }
        }
    }, [num]);

    return(
    // ReactFragmentを使うパターン 
    <>
        {/* スタイルの適用方法 */}
        <h1 style={{ color: "#aacfd0" }}>こんにちは!</h1>
        {/* 親のコンポーネントが */}
        <ColorfulMessage color="blue" fontSize="30px">お元気ですか?</ColorfulMessage>
        <ColorfulMessage color="green" fontSize="30px">元気です!</ColorfulMessage>
    
        {/* 関数の適用方法 */}
        <button onClick={onClickCountUp}>カウントアップ</button>
        <p>{ num }</p>
        <button onClick={onClickToggle}>on/off</button>
        {isShowFase && <p>Σ('◉⌓◉’)</p>}      
    </>
    ); 
};
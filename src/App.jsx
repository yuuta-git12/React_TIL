import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
    const onClickButtton = () => alert();
    return(
    // ReactFragmentを使うパターン 
    <>
        {/* スタイルの適用方法 */}
        <h1 style={{ color: "#aacfd0" }}>こんにちは!</h1>
        <ColorfulMessage color="blue" fontSize="30px">お元気ですか?</ColorfulMessage>
        <ColorfulMessage color="green" fontSize="30px">元気です!</ColorfulMessage>
    
        {/* 関数の適用方法 */}
        <button onClick={onClickButtton}>ボタン</button>
    </>
    ); 
};
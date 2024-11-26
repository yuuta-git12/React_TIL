export const App = () => {
    const onClickButtton = () => alert();
    // スタイルのオブジェクト
    const contentStyle = {
        color: "blue",
        fontSize: "25px",
        margin: "100px",
    };
    return(
    // ReactFragmentを使うパターン 
    <>
        {/* スタイルの適用方法 */}
        <h1 style={{ color: "#aacfd0" }}>こんにちは!</h1>
        <p style={contentStyle}>おげんきですか?</p>
        {/* 関数の適用方法 */}
        <button onClick={onClickButtton}>ボタン</button>
    </>
    ); 
};
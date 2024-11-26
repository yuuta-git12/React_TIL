export const ColorfulMessage = (props) => {
    // console.log(props);
    // 分割代入によるpropsの取り出し
    const { color, fontSize , children} = props;
    const contentStyleA = {
        // プロパティ名と変数名が同じ場合は省略できる
        color,
        fontSize,
        margin: "100px",
    };

    return <p style={contentStyleA}>{children}</p>
}
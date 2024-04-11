export function Button({text, color}){
    const buttonStyle = {
        backgroundColor: color,
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      };

    return <button style={buttonStyle}>
        {text}
    </button>
}
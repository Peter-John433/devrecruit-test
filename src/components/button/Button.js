export default function Button({ children, onClick, buttonStyle }) {
  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}

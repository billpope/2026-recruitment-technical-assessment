function IconButton({ icon, title, onClick }) {
   return (
    <button className="icon-button" title={title} onClick={onClick}>
      <span className="material-symbols-outlined">{icon}</span>
    </button>
  );
}

export default IconButton;
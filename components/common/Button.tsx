type Props = {
  label: string;
  onClick?: () => void;
  className?: string;
  href?: string;
};

export default function Button({ label, onClick, className = "", href }: Props) {
  const baseStyle =
    "px-6 py-3 rounded-xl text-white font-medium border border-white/30 backdrop-blur-md bg-white/5 hover:bg-white/20 hover:border-white/40 transition cursor-pointer";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyle} ${className}`}
      >
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyle} ${className}`}>
      {label}
    </button>
  );
}

import { useNavigate } from "react-router-dom";

export default function TopHeader({
  title,
  role,
  onBack,
  className = "",
  backButtonClassName = "",
  titleClassName = "",
}) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) return onBack();
    navigate(-1);
  };

  return (
    <header className={className}>
      <button
        type="button"
        onClick={handleBack}
        className={backButtonClassName}
        aria-label="Back"
      >
        <span className="material-symbols-outlined">arrow_back</span>
      </button>
      <h1 className={titleClassName}>{title}</h1>
    </header>
  );
}


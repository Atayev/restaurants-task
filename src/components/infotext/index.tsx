const InfoBadge = ({ text, label }: { text: string; label?: string }) => {
  return (
    <p className="inline">
      {label && label}
      <span className="font-bold text-xl"> {text}</span>
    </p>
  );
};

export default InfoBadge;

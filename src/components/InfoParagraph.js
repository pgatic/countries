const InfoParagraph = ({ label, children }) => {
  return (
    <p>
      <span className="property">{label}:</span>
      {children}
    </p>
  );
};

export default InfoParagraph;

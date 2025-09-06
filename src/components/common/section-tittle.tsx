const SectionTitle = ({ label, title }: { label: string; title: string }) => (
  <div className="mb-12">
    <div className="text-center mb-2 text-xs tracking-widest text-[#7C6F6F]">{label}</div>
    <h2 className="text-center text-2xl md:text-3xl font-semibold text-black max-w-2xl mx-auto">
      {title}
    </h2>
  </div>
);
export default SectionTitle;
interface ResultItem {
  title: string;
  desc: string;
  icon: React.ReactNode | string;
}

interface ResultsListProps {
  items: ResultItem[];
}

const ResultsList: React.FC<ResultsListProps> = ({ items }) => (
  <div className="flex flex-col gap-6 max-w-[480px]">
    {items.map((item) => (
      <div
        key={item.title}
        className="flex flex-col items-start gap-4 rounded-2xl border border-[#E6E6E6] bg-white px-8 py-7 shadow-sm"
        style={{ boxShadow: '0px 2px 8px 0px rgba(41,45,50,0.04)' }}
      >
        <div className="mt-1 flex-shrink-0">
          {typeof item.icon === 'string' ? (
            <img src={item.icon} alt={item.title} className="w-11 h-11 object-contain" />
          ) : (
            item.icon
          )}
        </div>
        <div>
          <h3 className="text-[20px] font-bold mb-1 text-[#292D32] leading-snug">{item.title}</h3>
          <p className="text-[15px] text-[#555555] leading-[1.6]">{item.desc}</p>
        </div>
      </div>
    ))}

  </div>
);
export default ResultsList;
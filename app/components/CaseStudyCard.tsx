interface CaseStudyCardProps {
  title: string;
  company: string;
  challenge: string;
  solution: string;
  result: string;
  savings: string;
  icon: string;
}

export default function CaseStudyCard({
  title,
  company,
  challenge,
  solution,
  result,
  savings,
  icon,
}: CaseStudyCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-blue-600 font-semibold mb-4">{company}</p>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-slate-900 text-sm">Challenge</h4>
          <p className="text-gray-700 text-sm">{challenge}</p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 text-sm">Solution</h4>
          <p className="text-gray-700 text-sm">{solution}</p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 text-sm">Result</h4>
          <p className="text-gray-700 text-sm">{result}</p>
        </div>

        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-blue-900 font-bold text-lg">{savings}</p>
          <p className="text-blue-700 text-sm">time saved per month</p>
        </div>
      </div>
    </div>
  );
}

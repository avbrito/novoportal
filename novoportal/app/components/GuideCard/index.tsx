const GuideCard = ({ date, code, name, status, statusColor }) => {
  return (
    <div className="border rounded-lg bg-white border-gray-unimed">
      <p className="flex justify-between text-gray-500 text-sm p-3">
        {date}
        <span
          className={`text-xs font-semibold px-2 py-1 rounded ${statusColor}`}
        >
          <span
            className={`
                  w-2 h-2 rounded-full mr-1
                  ${
                    status === "Aprovado"
                      ? "text-green-600"
                      : status === "Negado"
                      ? "text-red-600"
                      : status === "Autorizado"
                      ? "text-verde-unimed"
                      : status === "Em análise"
                      ? "text-orange-status-analise"
                      : ""
                  }
                `}
          >
            •
          </span>
          {status}
        </span>
      </p>
      <hr />
      <p className="text-verde-unimed font-semibold px-4 py-2">{code}</p>
      <p className="text-gray-700 px-4 py-2">{name}</p>
    </div>
  );
};

export default GuideCard;

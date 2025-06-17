import React from "react";
import { useUserContext } from "../../UserContext";
import { levels, userPoints } from "../../utils/const";
import { Check } from "@/app/components/Icons/Check";
import { ArrowRightBold } from "@/app/components/Icons/ArrowRightBold";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import { useRouter } from "next/navigation";

const InfoBeneficios = () => {
  const { userType } = useUserContext();
  const router = useRouter();

  const userScore = userType
    ? parseInt(userPoints[userType]?.[0]?.userPontuacao || "0")
    : 0;

  const currentLevel = levels.find((level) => {
    if (Array.isArray(level.range)) {
      return userScore >= level.range[0] && userScore <= level.range[1];
    } else {
      return userScore >= parseInt(level.range);
    }
  });
  const handleRedirect = () => {
    router.back();
  };

  return (
    <div className="p-4 bg-white">
      <div className="min-h-screen bg-white">
        <div className="p-8 bg-white rounded-lg pl-40 pr-40">
          <div className="flex items-center mb-6">
            <span className="mt-1 cursor-pointer" onClick={handleRedirect}>
              <ArrowLeftBlue />{" "}
            </span>
            <h1 className="text-2xl font-sans text-blue-black pl-2">
              Benefícios
            </h1>
          </div>

          <div className="space-y-3">
            {levels.map((level, index) => {
              const isCurrent = currentLevel?.range === level.range;

              return (
                <div
                  key={index}
                  className={`bg-gray-card rounded-2xl border ${
                    isCurrent ? "border-verde-unimed" : "border-gray-borda"
                  }`}
                >
                  {isCurrent && (
                    <div className="w-28 bg-verde-unimed text-white text-center font-sans font-normal text-xs py-2 mt-4 ml-6 rounded">
                      Nível atual
                    </div>
                  )}

                  <h2 className="text-4xl font-ultra-bold font-sansSlab text-verde-unimed mb-2 flex pl-6 pt-6">
                    {Array.isArray(level.range) ? (
                      <>
                        {level.range[0]}
                        <span className="mx-2 flex items-center">
                          <ArrowRightBold />
                        </span>
                        {level.range[1]}
                      </>
                    ) : (
                      level.range
                    )}
                    <p className="text-blue-black font-sansSlab pl-2 text-sm flex items-end">
                      pontos
                    </p>
                  </h2>

                  <p className="text-verde-unimed mb-4 pl-6">{level.level}</p>
                  <hr className="w-full" />
                  <ul className="list-disc space-y-2 text-gray-700 p-6">
                    {level.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center">
                        <Check className="mr-2" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBeneficios;

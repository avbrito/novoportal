import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useRouter } from "next/navigation";
import { eventsDate } from "../../utils/const";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";

const InfoCalendarioFechamento = () => {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState<Date | null>(null);
  const [clickedDate, setClickedDate] = useState<string | null>(null);

  useEffect(() => {
    const today = new Date();
    setCurrentMonth(today);
  }, []);

  const handleMonthChange = ({
    activeStartDate,
  }: {
    activeStartDate: Date | null;
  }) => {
    if (activeStartDate) {
      setCurrentMonth(activeStartDate);
    }
  };

  const getFormattedDate = (date: Date) => date.toISOString().split("T")[0];

  const eventsForDate = (date: Date) => {
    const formattedDate = getFormattedDate(date);
    return eventsDate.filter((event) => event.date === formattedDate);
  };

  const handleRedirect = () => {
    router.back();
  };

  const handleDateClick = (date: Date) => {
    const formattedDate = getFormattedDate(date);
    setClickedDate(formattedDate === clickedDate ? null : formattedDate);
  };

  return (
    <div className="min-h-screen bg-white ml-16">
      <div className="max-w-[808px] mx-auto bg-white rounded-lg p-6">
        <div className="flex items-center mb-6">
          <span className="mt-1 cursor-pointer" onClick={handleRedirect}>
            <ArrowLeftBlue />
          </span>
          <h1 className="text-2xl font-sans text-blue-black pl-2">
            Calendário 
          </h1>
        </div>

        <div className="bg-white text-blue-black rounded-lg p-6 w-1/2 mb-4">
          <Calendar
            className="rounded-lg bg-gray-card border-gray-400"
            onChange={(value) => {
              if (value instanceof Date) {
                setSelectedDate(value);
              }
            }}
            value={selectedDate}
            locale="pt-BR"
            tileClassName={({ date, view }) => {
              if (view === "month") {
                const formattedDate = getFormattedDate(date);
                const event = eventsDate.find((e) => e.date === formattedDate);

                if (event) {
                  return `event-tile ${event.backgroundColor}`;
                }
              }
              return "";
            }}
            onActiveStartDateChange={handleMonthChange}
            onClickDay={handleDateClick} 
          />

          <div className="min-w-fit mt-8">
            {currentMonth ? (
              <>
                {Array.from({ length: 31 }, (_, i) => {
                  const date = new Date(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth(),
                    i + 1
                  );
                  if (date.getMonth() !== currentMonth.getMonth()) return null;

                  const events = eventsForDate(date);
                  const formattedDate = getFormattedDate(date);

                  
                  if (
                    (events.length === 0 && formattedDate !== clickedDate) ||
                    (formattedDate !== clickedDate && clickedDate)
                  )
                    return null;

                  return (
                    <div
                      key={i}
                      className={`flex items-center border-l-4 ${
                        events.length > 0 ? events[0].color : "border-gray-300"
                      } bg-white p-4 rounded-lg mb-2`}
                    >
                      <div className="text-gray-500 text-sm font-medium w-16">
                        <div className="uppercase">
                          {date.toLocaleDateString("pt-BR", {
                            weekday: "short",
                          })}
                        </div>
                        <div className="text-xl text-black font-bold">
                          {date.getDate()}
                        </div>
                      </div>
                      <div className="pl-4 text-gray-700 text-sm">
                        {events.length > 0 ? (
                          <p className="font-semibold">{events[0].description}</p>
                        ) : (
                          <p className="text-gray-400">Sem eventos</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <p>Carregando...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCalendarioFechamento;
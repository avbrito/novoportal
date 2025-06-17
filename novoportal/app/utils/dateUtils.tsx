export const getTodayDate = (): string => {
    const today = new Date();
    return today.toLocaleDateString("pt-BR"); 
  };
  
  export const getEndOfMonthDate = (): string => {
    const date = new Date();
    const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return endOfMonth.toLocaleDateString("pt-BR");
  };
  
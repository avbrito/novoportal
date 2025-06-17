function formatDateToBr(date, withYear = true) {
    const adjustedDate = new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds()
    );
  
    const options = { day: '2-digit', month: '2-digit' };
    if (withYear) {
      options.year = 'numeric';
    }
  
    return new Intl.DateTimeFormat('pt-BR', options).format(adjustedDate);
  }
  
  
  export const sortByUrgency = (date) => {
    const result = date.sort((a, b) => {
      return a.carencia === 'URGÊNCIA / EMERGÊNCIA' ? -1 : 1;
    })
  
    return result;
  }
  
  export const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  
  export const capitalizeWords = (date) => {
    return date.split(' ').map((word) => capitalizeFirstLetter(word)).join(' ');
  }
  
  export const urgencyText = (carencia, prazo) => {
    return carencia === 'URGÊNCIA / EMERGÊNCIA' ? <span className="urgencyText">Permitido</span> : formatDateToBr(new Date(prazo))
  }
  
  export const handleLogout = (navigate, path) => {
    localStorage.clear();
    navigate(path);
  };
  
  export function transformToBrazilFormatDate(originalDate) {
    const date = new Date(originalDate);
    return date.toLocaleDateString('pt-BR');
  }
  
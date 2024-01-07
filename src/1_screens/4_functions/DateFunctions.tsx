// date
  // ----------------------------------------------------------------------
  export function getFormattedDate() {
    const currentDate = new Date();

    const day = currentDate.getDate().toString().padStart(2, '0');

    const monthNames = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    return `${day} de ${month} de ${year}`;

  }
 
  // ----------------------------------------------------------------------
export default function convertTime(dateTime) {
  const date = new Date(dateTime);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const amPm = hours >= 12 ? 'PM' : 'AM';

  const hours12 = hours % 12 || 12;

  const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${
    day < 10 ? '0' : ''
  }${day}`;
  const formattedTime = `${hours12}:${
    minutes < 10 ? '0' : ''
  }${minutes} ${amPm}`;

  return `${formattedDate} ${formattedTime}`;
}

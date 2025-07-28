export const getEmojiByType = (type: string) => {
  switch (type) {
    case "metal":
      return "🧲";    
    case "pipe":
      return "🛠️";     
    case "tunnel":
      return "🚇";     
    case "mine":
      return "💣";     
    default:
      return "❓";      
  }
};


interface LinkProps {
  url: string;
  icon?: string;
  caption?: string;
}

const Link: React.FC<LinkProps> = ({url, icon, caption}) => {
  return(
    <a href={url}
      target="_blank"
      rel="noopener noreferrer">
      {icon &&
        <img src={icon} alt={caption}/> 
      }
    </a>
  )
}

export default Link;
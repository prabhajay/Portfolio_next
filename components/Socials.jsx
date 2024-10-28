import Link from "next/link";
import { FaLinkedin,FaGithub } from "react-icons/fa";

const socials = [
    {icon:<FaGithub />, path:"https://github.com/prabhajay"},
    {icon:<FaLinkedin />,  path:"https://www.linkedin.com/in/prabhajay/"},
];
 const Socials = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item,index)=>{
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}
export default Socials;

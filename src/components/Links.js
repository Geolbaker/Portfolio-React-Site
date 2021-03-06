import { FaGithub, FaItchIo } from "react-icons/fa"

// styles
import "./Links.css"

export default function Links() {
  return (
      <div className="links">
          <a href="https://github.com/Jack-Pettigrew" target="_blank"><FaGithub className="icon"/></a>
          <a href="https://pixeldump.itch.io/" target="_blank"><FaItchIo className="icon"/></a>
      </div>
  )
}

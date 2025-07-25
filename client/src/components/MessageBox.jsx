import { cn } from "../utils/ClassName";

const typeStyles = {
  success: "bg-bg-green text-green font-sans font-medium tracking-wide text-sm",
  error: "bg-bg-red text-red font-sans font-medium tracking-wide text-sm",
  warning: "bg-bg-orange text-orange font-sans font-medium tracking-wide text-sm",
  normal: "bg-bg-gray text-gray font-sans font-medium tracking-wide text-sm",
}

const MessageBox = ({ content, type, containerStyles }) => {
  return (
    <div className={cn(typeStyles[type], containerStyles, "rounded-xl px-5 py-3")}>
      {content}
    </div>
  )
};

export default MessageBox;
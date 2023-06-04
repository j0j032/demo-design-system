import { ReactNode, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Tooltip.module.scss";

type TooltipProps = {
  children: ReactNode;
  text: string;
};

const Tooltip = ({ children, text }: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const childRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const child = childRef.current;
    const tooltip = tooltipRef.current;

    let showTooltipTimeout: ReturnType<typeof setTimeout>;

    const handleMouseOver = () => {
      showTooltipTimeout = setTimeout(() => {
        setVisible(true);
      }, 1000);
    };

    const handleMouseOut = () => {
      clearTimeout(showTooltipTimeout);
      setVisible(false);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (tooltip) {
        const screenWidth = window.innerWidth;
        const tooltipWidth = tooltip.offsetWidth;
        const offsetX = screenWidth - event.pageX < tooltipWidth + 20 ? -tooltipWidth - 20 : 10;
        setPosition({ top: event.pageY + 10, left: event.pageX + offsetX });
      }
    };

    if (child) {
      child.addEventListener("mouseover", handleMouseOver);
      child.addEventListener("mouseout", handleMouseOut);
      child.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (child) {
        child.removeEventListener("mouseover", handleMouseOver);
        child.removeEventListener("mouseout", handleMouseOut);
        child.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const tooltipContent = (
    <div ref={tooltipRef} className={styles.tooltip} style={{ top: position.top, left: position.left, opacity: visible ? 1 : 0 }}>
      {text}
    </div>
  );

  return (
    <>
      <div ref={childRef}>{children}</div>
      {ReactDOM.createPortal(tooltipContent, document.body)}
    </>
  );
};

export default Tooltip;

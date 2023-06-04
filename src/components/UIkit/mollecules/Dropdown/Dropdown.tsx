import styles from "./Dropdown.module.scss";
import React, { CSSProperties } from "react";
import { useBoolean } from "usehooks-ts";
import { Icon } from "../../atoms/Icon/Icon";
import { Separator } from "../../atoms/Separator/Separator";
import { useSpring, animated } from "react-spring";

type DropdownProps = {
  children: React.ReactNode;
  title: string;
  backgroundColor?: string;
  separatorColor?: string;
  icon?: string;
  borderRadius?: CSSProperties["borderRadius"] | string;
  color?: string;
  hideSeparator?: boolean;
};

const Dropdown = ({ children, title, backgroundColor = "#fffefc", separatorColor = "lightgray", icon, borderRadius, color, hideSeparator = false }: DropdownProps) => {
  const { value: isDropdownOpen, toggle: toggleDropdown, setFalse: closeDropdown } = useBoolean(false);

  const contentSpring = useSpring({
    height: isDropdownOpen ? "auto" : "0",
    overflow: "hidden",
    config: { tension: 300, friction: 20 },
  });

  const rotation = useSpring({
    transform: isDropdownOpen ? "rotate(90deg)" : "rotate(0deg)",
    config: { tension: 300, friction: 20 },
  });

  return (
    <div className={styles.dropdown} style={{ backgroundColor, borderRadius }}>
      <div className={styles.dropdownHeading} onClick={toggleDropdown}>
        <div style={{ color }}>
          {icon && <Icon icon={icon} />}
          {title}
        </div>
        <animated.div style={rotation}>
          <Icon icon="arrow_forward_ios" size={"small"} color={color} />
        </animated.div>
      </div>
      {!hideSeparator && <Separator direction="horizontal" customMargin="0" customColor={separatorColor} />}
      <animated.div style={contentSpring} onClick={closeDropdown} className={isDropdownOpen ? styles.dropdownContent : styles.dropdownContentHidden}>
        {children}
      </animated.div>
      {!hideSeparator && isDropdownOpen && <Separator direction="horizontal" customMargin="0" customColor={separatorColor} />}
    </div>
  );
};

export default Dropdown;

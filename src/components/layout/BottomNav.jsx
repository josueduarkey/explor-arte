import { NavLink } from "react-router-dom";

export default function BottomNav({
  className = "",
  innerClassName = "flex justify-around items-center max-w-lg mx-auto",
  items = [],
}) {
  return (
    <nav className={className}>
      <div className={innerClassName}>
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end ?? false}
            className={({ isActive }) => (isActive ? item.activeClassName : item.inactiveClassName)}
          >
            <span
              className={`material-symbols-outlined ${item.iconClassName ?? ""}`}
              style={item.iconStyle}
            >
              {item.icon}
            </span>
            <span className={item.labelClassName ?? ""}>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}


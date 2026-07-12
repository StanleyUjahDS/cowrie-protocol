import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../Button/Button";
import "./Dropdown.css";

function Dropdown({
  label,
  items,
  variant = "primary",
  size = ""
}) {
  return (
    <DropdownMenu.Root>

      <DropdownMenu.Trigger asChild>

        <Button
          variant={variant}
          className={size}
        >
          {label}
          <ChevronDown size={16} />
        </Button>

      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        className="dropdown-content"
        sideOffset={8}
      >

        {items.map((item, index) => (

          <DropdownMenu.Item
            key={index}
            asChild
          >

            <Link
              to={item.to}
              className="dropdown-item"
            >
              {item.label}
            </Link>

          </DropdownMenu.Item>

        ))}

      </DropdownMenu.Content>

    </DropdownMenu.Root>
  );
}

export default Dropdown;
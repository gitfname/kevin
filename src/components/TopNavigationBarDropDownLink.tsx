
import { BsChevronDown } from "react-icons/bs"
import { Menu } from "@mantine/core"
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom"

interface Props {
    text: string;
    items: { text: string; link: string }[];
}

function TopNavigationBarDropDownLink({ items, text }: Props) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Menu
            trigger="hover"
            width={220}
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            classNames={{
                dropdown: "border-t-2 border-t-primary rounded-t-sm rounded-b-lg [box-shadow:1px_3px_10px_rgba(0,0,0,0.1)]"
            }}
        >
            <Menu.Target>
                <p className="text-sm cursor-pointer peer text-black/80 hover:text-black transition-colors group-hover:text-black
            flex items-center gap-x-2">
                    {text}
                    <BsChevronDown className={twMerge(
                        `w-3 h-3 transition-transform duration-300`,
                        isOpen ? "rotate-0" : "rotate-180"
                    )} />
                </p>
            </Menu.Target>

            <Menu.Dropdown>
                {
                    items.map(item => (
                        <Menu.Item
                            key={item.link}
                            component={Link}
                            to={item.link}
                        >
                            <span className="text-sm text-right block">
                                {item.text}
                            </span>
                        </Menu.Item>
                    ))
                }
            </Menu.Dropdown>
        </Menu>
    )
}

export default TopNavigationBarDropDownLink
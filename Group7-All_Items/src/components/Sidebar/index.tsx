import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses, useProSidebar } from 'react-pro-sidebar';
import * as FaIcons from "react-icons/fa";
import arrow from "@/public/about/arrow.png"
import Image from "next/image";
import { Arrow } from "./style";

const SideBar = ({setSelectedOption}) => {
  const { collapseSidebar } = useProSidebar();
  const [isHovered, setIsHovered] = useState(false);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  

  const MenuItemStyle ={
    display: "flex",
    alignItems: "center", 
    justifyContent: "space-between",
    height:"40px",
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  }

  return (
    <div style={{ height: '100%' }}>
      <Sidebar className="custom-sidebar" rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: '#265590',
          maxWidth: '20vw',
          marginBottom: "75px"
        },
      }}>
        
        <Menu menuItemStyles={{
          button: ({ level, active, disabled, ...rest }) => ({
            color: active ? '#265590' : '#ffffff',
            backgroundColor: active ? '#ffffff' : '#265590',
            '&:hover': {
              color: '#265590',
              backgroundColor: '#ffffff',
            },
          }),
        }}>
          <MenuItem style={MenuItemStyle} onClick={() => handleOptionClick("all")}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ marginRight: "10px" }}>所有商品</span>
              <Arrow>
                <Image src={arrow} alt="arrow icon" />
              </Arrow>
            </div>
          </MenuItem>
          <MenuItem style={MenuItemStyle} onClick={() => handleOptionClick("featured")}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ marginRight: "10px" }}>精選商品</span>
              <Arrow>
                <Image src={arrow} alt="arrow icon" />
              </Arrow>
            </div>
          </MenuItem>
          
          <MenuItem style={MenuItemStyle} onClick={() => handleOptionClick("electronics")}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ marginRight: "10px" }}>電子產品</span>
              <Arrow>
                <Image src={arrow} alt="arrow icon" />
              </Arrow>
            </div>
          </MenuItem>
          <MenuItem style={MenuItemStyle} onClick={() => handleOptionClick("vehicle")}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ marginRight: "10px" }}>汽機車</span>
              <Arrow>
                <Image src={arrow} alt="arrow icon" />
              </Arrow>
            </div>
          </MenuItem>
          <MenuItem style={MenuItemStyle} onClick={() => handleOptionClick("instrument")}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ marginRight: "10px" }}>樂器/樂器周邊</span>
              <Arrow>
                <Image src={arrow} alt="arrow icon" />
              </Arrow>
            </div>
          </MenuItem>
          <MenuItem style={MenuItemStyle} onClick={() => handleOptionClick("appliance")}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ marginRight: "10px" }}>家電</span>
              <Arrow>
                <Image src={arrow} alt="arrow icon" />
              </Arrow>
            </div>
          </MenuItem>
          <MenuItem style={MenuItemStyle} onClick={() => handleOptionClick("furniture")}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ marginRight: "10px" }}>家具</span>
              <Arrow>
                <Image src={arrow} alt="arrow icon" />
              </Arrow>
            </div>
          </MenuItem>
          <MenuItem style={MenuItemStyle} onClick={() => handleOptionClick("luxury")}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ marginRight: "10px" }}>時尚精品</span>
              <Arrow>
                <Image src={arrow} alt="arrow icon" />
              </Arrow>
            </div>
          </MenuItem>
          <MenuItem style={MenuItemStyle} onClick={() => handleOptionClick("collections")}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ marginRight: "10px" }}>娛樂收藏</span>
              <Arrow>
                <Image src={arrow} alt="arrow icon" />
              </Arrow>
            </div>
          </MenuItem>
          <MenuItem style={MenuItemStyle} onClick={() => handleOptionClick("game")}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ marginRight: "10px" }}>電玩遊戲</span>
              <Arrow>
                <Image src={arrow} alt="arrow icon" />
              </Arrow>
            </div>
          </MenuItem>
        </Menu>
      </Sidebar >
    </div >
  )
}

export default SideBar;

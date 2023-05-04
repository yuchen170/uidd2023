import SideBar from "@/components/Sidebar";

import React, { useState } from "react";
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Data } from "@/data";
import Card from "@/components/Card";
import { ItemContainer, Title } from "./style";


const AllItems = () => {

  const [selectedOption, setSelectedOption] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchQuery, setSearchQuery] = useState("");

  const getTitle = () => {
    switch (selectedOption) {
      case 'featured':
        return '精選商品';
      case 'electronics':
        return '電子產品';
      case 'vehicle':
        return '汽機車';
      case 'instrument':
        return '樂器';
      case 'appliance':
        return '家電';
      case 'furniture':
        return '家具';
      case 'luxury':
        return '時尚精品';
      case 'game':
        return '電玩遊戲';
      case 'collections':
        return '娛樂收藏';
      case 'all':
        return '所有商品';
      default:
        return '';
    }
  };

  const filteredData = () => {
    let filtered = Data;

    switch (selectedOption) {
      case 'featured':
        filtered = filtered.filter(item => item.featured === 1);
        break;
      case 'electronics':
        filtered = filtered.filter(item => item.type === 'electronics');
        break;
      case 'vehicle':
        filtered = filtered.filter(item => item.type === 'vehicle');
        break;
      case 'instrument':
        filtered = filtered.filter(item => item.type === 'instrument');
        break;
      case 'appliance':
        filtered = filtered.filter(item => item.type === 'appliance');
        break;
      case 'furniture':
        filtered = filtered.filter(item => item.type === 'furniture');
        break;
      case 'luxury':
        filtered = filtered.filter(item => item.type === 'luxury');
        break;
      case 'game':
        filtered = filtered.filter(item => item.type === 'game');
        break;
      case 'collections':
        filtered = filtered.filter(item => item.type === 'collections');
        break;
      case 'all':
        filtered = filtered.sort((a, b) => b.viewed - a.viewed);
        break;
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOrder === 'asc') {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      filtered = filtered.sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'popular') {
      filtered = filtered.sort((a, b) => b.viewed - a.viewed);
    } else if (sortOrder === 'newest') {
      filtered = filtered.sort((a, b) => b.id - a.id);
    }
    return filtered;
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <>



      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "50px", marginTop: "30px", marginBottom: "-40px" }}>
          <input
            type="text"
            placeholder="搜尋商品"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              position: "relative",
              height: "24px",
              verticalAlign:"center",
              top:"12px",
              zIndex:"10"
            }}
          />
          <select value={sortOrder} onChange={handleSortOrderChange} style={{
            margin: "10px", border: "none",
            borderRadius: "10%",
            backgroundColor: sortOrder === 'asc' || sortOrder === 'desc' ? '#265590' : '#EFF1F5',
            color: sortOrder === 'asc' || sortOrder === 'desc' ? 'white' : '#265590',
            zIndex:"10"
          }}>
            <option value="none">價格</option>
            <option value="asc">低到高</option>
            <option value="desc">高到低</option>
          </select>

          <button
            onClick={() => setSortOrder('popular')}
            style={{
              margin: "10px",
              border: "none",
              borderRadius: "10%",
              backgroundColor: sortOrder === 'popular' ? '#265590' : '#EFF1F5',
              color: sortOrder === 'popular' ? 'white' : '#265590',
              zIndex:"10"
            }}
          >
            最熱銷
          </button>
          <button
            onClick={() => setSortOrder('newest')}
            style={{
              margin: "10px",
              border: "none",
              borderRadius: "10%",
              backgroundColor: sortOrder === 'newest' ? '#265590' : '#EFF1F5',
              color: sortOrder === 'newest' ? 'white' : '#265590',
              zIndex:"10"
            }}
          >
            最新上架
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div style={{ position: "sticky", top: "100px", marginBottom: "50px", height: "360px" }}>
            <ProSidebarProvider>
              <SideBar setSelectedOption={setSelectedOption} />
            </ProSidebarProvider>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
            <Title>
              {getTitle()}
            </Title>



            <ItemContainer>
              {filteredData().map(
                (item) =>
                  item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ? (
                        
                    <Card key={item.id} item={item} />
                  ) : null
              )}
            </ItemContainer>
            
          </div >
        </div >
      </div>
    </>
  );
};

export default AllItems;
